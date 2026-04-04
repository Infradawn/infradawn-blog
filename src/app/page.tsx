import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero section — dark with dawn gradient */}
      <section className="bg-gradient-to-b from-hero-start via-hero-end to-background">
        <div className="max-w-3xl mx-auto px-6 pt-16 pb-20">
          <h1 className="text-5xl font-bold tracking-tight text-white mb-4">
            infradawn<span className="text-accent">.</span>
          </h1>
          <p className="text-lg text-white/60 leading-relaxed max-w-lg">
            Tech explorations and personal projects. Writing about systems, software, and the things I build.
          </p>
        </div>
      </section>

      {/* Posts — clean white */}
      <section className="max-w-3xl mx-auto px-6 py-12">
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
    </>
  );
}
