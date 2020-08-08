import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Twitter from "./Twitter.png";
import Instagram from "./Instagram.jpg";
import Facebook from "./Facebook.png";
import GitHub from "./GitHub.png"

const useStyles = makeStyles({
  root: {
    width: 545,
  },
  media: {
    height: 500,
  },
});

export default function UserCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.pic}
          title="Contemplative Kyle"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Bio: {props.bio}
          </Typography>
          <br></br>
          <Typography variant="body2" color="textSecondary" component="p">
            Followers: {props.followers}
          </Typography>
          <br></br>
          <Typography variant="body2" color="textSecondary" component="p">
            Location: {props.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <h3>Socials:</h3>
        <Avatar alt="" src={GitHub} />
        <h6>@kdneldor</h6>
        <Avatar alt="" src={Twitter} />
        <h6>@kdneldor</h6>
        <Avatar alt="" src={Instagram} />
        <h6>@kdneldor</h6>
        <Avatar alt="" src={Facebook} />
        <h6>Kyle Nelson</h6>
      </CardActions>
    </Card>
  );
}
