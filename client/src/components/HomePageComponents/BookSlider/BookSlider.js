import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { css } from "@emotion/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PulseLoader from "react-spinners/PulseLoader";
import Book from "../../AllBooksComponents/Book/Book";
import { Grid, Container, Typography } from "@material-ui/core";
import { getBooks } from "../../../actions/books";
import { getShareBooks } from "../../../actions/shareBooks";
import { v4 } from "uuid";
import useStyles from "./style";

const BookSlider = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books);
  const allShareBooks = useSelector((state) => state.shareBooks);
  const [allUnSoldbooks, setAllUnSoldBooks] = useState([]);
  const [allUnSharedbooks, setAllUnSharedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [bookShare, setBookShare] = useState([]);

  useEffect(() => {
    if (allBooks.length === 0) {
      dispatch(getBooks());
    }
  }, [dispatch]);
  useEffect(() => {
    if (allShareBooks.length === 0) {
      dispatch(getShareBooks());
    }
  }, [dispatch]);

  useEffect(() => {
    if (allBooks.length !== 0) {
      setAllUnSoldBooks(allBooks.filter((book) => book.isSold === false));
    }
  }, [allBooks.length]);
  useEffect(() => {
    if (allShareBooks.length !== 0) {
      setAllUnSharedBooks(
        allShareBooks.filter((bookShare) => bookShare.isShare === false)
      );
    }
  }, [allShareBooks.length]);

  useEffect(() => {
    if (allUnSoldbooks.length > 5) {
      var indices = [];
      while (indices.length < 5) {
        var r = Math.floor(Math.random() * allUnSoldbooks.length);
        if (indices.indexOf(r) === -1) indices.push(r);
      }

      const arr = [];
      for (const i of indices) {
        arr.push(allUnSoldbooks[i]);
      }
      setBooks(arr);
      console.log(books);
    } else {
      setBooks(allUnSoldbooks);
    }
  }, [allUnSoldbooks]);

  useEffect(() => {
    if (allUnSharedbooks.length > 5) {
      var indices = [];
      while (indices.length < 5) {
        var r = Math.floor(Math.random() * allUnSharedbooks.length);
        if (indices.indexOf(r) === -1) indices.push(r);
      }

      const arr = [];
      for (const i of indices) {
        arr.push(allUnSharedbooks[i]);
      }
      setBookShare(arr);
      console.log(bookShare);
    } else {
      setBookShare(allUnSharedbooks);
    }
  }, [allUnSharedbooks]);

  useEffect(() => {
    if (allBooks.length !== 0) {
      setLoading(false);
    }
  }, [allBooks]);

  useEffect(() => {
    if (allShareBooks.length !== 0) {
      setLoading(false);
    }
  }, [allShareBooks]);

  const override = css`
    display: block;
    border-color: red;
    background-color: #eae7dc;
  `;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1800 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1800, min: 1350 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1350, min: 1000 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 1000, min: 700 },
      items: 2,
    },
    mobileSmall: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div style={{ background: "rgb(234,231,220)" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            background: "rgb(234,231,220)",
            paddingTop: "10px",
          }}
        >
          Most Trending Books
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "300px",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />
      </div>

      {loading ? (
        <div style={{ textAlign: "center" }}>
          <PulseLoader
            loading={loading}
            color="#e98074"
            css={override}
            size={30}
            style={{ background: "rgb(234,231,220)" }}
          />
        </div>
      ) : (
        <div
          style={{
            padding: "20px 10px",
            background: "rgb(234,231,220)",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={6000}
          >
            {books.map((book) => (
              <Grid className={classes.grid} key={book._id}>
                <Container>
                  <Book book={book} />
                </Container>
              </Grid>
            ))}
          </Carousel>
        </div>
      )}

      <div style={{ background: "rgb(234,231,220)" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            background: "rgb(234,231,220)",
            paddingTop: "10px",
          }}
        >
          Most Viewed Books
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "300px",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />
      </div>

      {loading ? (
        <div style={{ textAlign: "center" }}>
          <PulseLoader
            loading={loading}
            color="#e98074"
            css={override}
            size={30}
            style={{ background: "rgb(234,231,220)" }}
          />
        </div>
      ) : (
        <div
          style={{
            padding: "20px 10px",
            background: "rgb(234,231,220)",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={6000}
          >
            {books.map((book) => (
              <Grid className={classes.grid} key={book._id}>
                <Container>
                  <Book book={book} />
                </Container>
              </Grid>
            ))}
          </Carousel>
        </div>
      )}
      <div style={{ background: "rgb(234,231,220)" }}>
        <Typography
          variant="h6"
          style={{
            textAlign: "center",
            background: "rgb(234,231,220)",
            paddingTop: "10px",
          }}
        >
          Shared Book List
        </Typography>
        <hr
          style={{
            border: "1.5px solid #8e8d8a",
            width: "300px",
            background: "rgb(234,231,220)",
            margin: "0px auto",
          }}
        />
      </div>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <PulseLoader
            loading={loading}
            color="#e98074"
            css={override}
            size={30}
            style={{ background: "rgb(234,231,220)" }}
          />
        </div>
      ) : (
        <div
          style={{
            padding: "20px 10px",
            background: "rgb(234,231,220)",
            marginTop: "0px",
            marginBottom: "0px",
          }}
        >
          <Carousel
            responsive={responsive}
            arrows={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={6000}
          >
            {bookShare.map((book) => (
              <Grid className={classes.grid} key={book._id}>
                <Container>
                  <Book book={book} />
                </Container>
              </Grid>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default BookSlider;
