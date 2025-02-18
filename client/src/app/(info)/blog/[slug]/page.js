'use client'
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { posts } from '@/lib/posts';  // Import static posts

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;  // Get slug from URL
 // Check if slug is undefined or if we're still waiting for the slug to load
 if (!slug) {
  return <p>Loading...</p>;  // You can return a loading state while slug is not available
}
  const post = posts.find((p) => p.slug === slug);  // Find the post based on slug

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className="post-detail">
      <Card shadow="lg" className="post-card-detail">
        <p fontSize="2xl" fontWeight="bold">{post.title}</p>
        <p fontSize="sm" color="gray">{new Date(post.publishedAt).toLocaleDateString()}</p>
        <p>{post.content}</p>
        <Button onClick={() => alert('Liked!')} variant="outline">Like</Button>
        <p>Likes: {post.likes}</p>
      </Card>
    </div>
  );
};

export default PostPage;
