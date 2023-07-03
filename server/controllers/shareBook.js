const mongoose = require("mongoose");
const ShareBook = require("../models/ShareBook");
const User = require("../models/User");

const { postBookShareValidator } = require("../validators/joi-validator");

exports.getSharedBooks = async (req, res) => {
  try {
    const sharedBooks = await ShareBook.find()
      .populate("borrowRequests", "username")
      .populate("borrowed.user", "username");
    return res.status(200).json(sharedBooks), console.log(ShareBook);
  } catch (err) {
    return res.status(404).json({ msg: "check" });
  }
};

exports.createShareBookAd = async (req, res) => {
  const sharedBooks = req.body;
  const { error } = postBookShareValidator.validate(req.body);

  if (!req.userId) return res.status(403).json({ msg: "Unauthorized" });
  try {
    if (error) {
      return res.status(400).json({ msg: error.details[0].message });
    }
    const { selectedFile } = req.body;
    const noOfPages = Number(sharedBooks.noOfPages);
    const currentUser = await User.findById(req.userId);
    currentUser.postedSharedBooks = currentUser.postedSharedBooks || []; // If postedSharedBooks is undefined, set it as an empty array

    const newSharedBook = new ShareBook({
      ...sharedBooks,
      noOfPages: noOfPages,
      owner: req.userId,
      wishListedBy: [],
      createdAt: new Date().toISOString(),
    });
    await newSharedBook.save();

    /*const currentUser = await User.findById(req.userId);
    // const sharedBooks = currentUser.postedSharedBooks;
    const postedSharedBooks = currentUser.postedSharedBooks;
    postedSharedBooks.push(newSharedBook);
    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      {
        postedSharedBooks: sharedBooks,
      },
      { new: true }
    );
    await updatedUser.save();*/

    currentUser.postedSharedBooks.push(newSharedBook._id);
    await currentUser.save();

    return res.status(201).json({ msg: "Added" });
  } catch (err) {
    console.error(err);
    return res.status(409).json({ msg: "Something went wrong on Server.." });
  }
};
