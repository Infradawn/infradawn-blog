import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <section className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
          infradawn
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Tech explorations and personal projects. Writing about systems, software, and the things I build.
        </p>
      </section>

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
