import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-10 py-12">
      <section>
        {posts.length === 0 ? (
          <p className="text-muted">No posts yet. Check back soon!</p>
        ) : (
          <div className="divide-y divide-border">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
