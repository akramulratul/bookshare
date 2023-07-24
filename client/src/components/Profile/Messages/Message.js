import React, { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { getRecentUsers } from "./../../../actions/user";

import { CARD_CLICKED } from "../../../constants/actions";
import useStyles from "../styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";

const Message = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const recents = useSelector((state) => state.recents);
  const clickedCards = useSelector((state) => state.clickedCards);
  const [clicked, setClicked] = useState(new Array(recents.length).fill(false));

  useEffect(() => {
    dispatch(getRecentUsers());
  }, []);

  useEffect(() => {
    setClicked(new Array(recents.length).fill(false));
  }, [recents]);

  const handleClick = (userId) => {
    dispatch({ type: CARD_CLICKED, payload: userId });
    history.push(`user/${userId}`);
  };

  return (
    <div>
      <Container className={classes.messageBody}>
        <Typography className={classes.messageHeading}>
          Recent Messages
        </Typography>
        {recents.map((user, index) => (
          <Card
            className={
              clickedCards.includes(user.id)
                ? classes.clickedCard
                : classes.messageCard
            }
            variant="outlined"
          >
            <CardContent className={classes.messageCardContent}>
              <Avatar src={user.profilePic} className={classes.large}></Avatar>
              <div>
                <Typography
                  className={classes.messagePrimary}
                  variant="h5"
                  component="h2"
                >
                  {user.name}
                </Typography>
                <Typography
                  className={classes.messageSecondary}
                  variant="body2"
                  component="p"
                >
                  Recently Sent You a Message
                </Typography>
              </div>
            </CardContent>
            <CardActions>
              <IconButton
                className={classes.messageButtonOuter}
                onClick={() => {
                  handleClick(user.id);
                  // history.push(`user/${user.id}`);
                }}
                size="small"
              >
                <ChatIcon className={classes.messageButton} />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default Message;
