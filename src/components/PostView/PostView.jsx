import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import Comment from "../Comment/Comment";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 400,
  },
});

const PostView = () => {
  const { id } = useParams();
  const classes = useStyles();

  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadPost();
    loadComment();
  }, []);

  const loadPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((ps) => setPost(ps));
  };

  const loadComment = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((res) => res.json())
      .then((comment) => setComments(comment));
  };

  return (
    <Container style={{ marginTop: "30px" }} maxWidth="sm">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card style={{ textAlign: "left" }}>
            <CardMedia
              className={classes.media}
              image={`https://loremflickr.com/600/400?random=${id}`}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {post.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {post.body}
              </Typography>
            </CardContent>

            <CardContent>
              <Typography variant="h5" gutterBottom>
                All Comments:
              </Typography>
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PostView;
