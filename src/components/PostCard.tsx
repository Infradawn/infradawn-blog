import Link from "next/link";
import { format } from "date-fns";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block py-6">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-sm text-muted">
            <time dateTime={post.date}>
              {format(new Date(post.date), "MMM d, yyyy")}
            </time>
            <span className="text-border">·</span>
            <span>{post.readingTime}</span>
          </div>

          <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {post.title}
          </h2>

          <p className="text-muted leading-relaxed">
            {post.description}
          </p>

          {post.tags.length > 0 && (
            <div className="flex gap-2 pt-1">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary/10 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
