import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    textAlign: "left",
  },
});

const handleReadMore = (oid) => {
  console.log(oid);
};

export default function SinglePost(props) {
  const classes = useStyles();
  const history = useHistory();

  const { id, title, body } = props.post;

  const handleReadMore = (id) => {
    history.push(`/post/${id}`);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="240"
        image={`https://loremflickr.com/600/400?random=${id}`}
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title.length > 25 ? title.substring(0, 25) + "..." : title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {body.length > 100 ? body.substring(0, 100) + "..." : body}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => handleReadMore(id)}
          size="small"
          color="secondary"
          variant="outlined"
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}