import { Box, Button, Typography } from "@mui/material";
import { type FC } from "react";
import { type PostObject } from "./PostsWrapper";
import StyledSinglePost from "./styled/SinglePost.styled";

interface ISinglePostProps {
  post: PostObject;
  editPost: () => void;
}

const SinglePost: FC<ISinglePostProps> = ({ post, editPost }) => {
  return (
    <StyledSinglePost>
      {post.image && <img src={post.image} alt={post.title} />}
      <Box className="content">
        <Typography className="title">{post.title}</Typography>
        <Typography className="description">{post.content}</Typography>
        <Typography className="author">Author: {post.author}</Typography>
        <Box className="button-container">
          <Button onClick={() => editPost()} variant="contained" color="primary">
            Edit
          </Button>
          <Button variant="outlined" color="secondary">
            Delete
          </Button>
        </Box>
      </Box>
    </StyledSinglePost>
  );
};

export default SinglePost;