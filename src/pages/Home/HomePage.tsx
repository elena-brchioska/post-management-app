import { Box, CircularProgress, Typography } from '@mui/material';
import FiltersContainer from '../../components/filters/FiltersContainer';
import AppContent from '../../layout/AppContent/AppContent';
import PostsWrapper from '../../components/posts/PostsWrapper';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../../endpoints/posts';

const HomePage = () => {

  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  })

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography color="error">Error fetching posts</Typography>;

  return (
    <Box>
      <FiltersContainer />

      <AppContent>
        <PostsWrapper posts={posts} />
      </AppContent>
    </Box>
  );
};

export default HomePage;