import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold mt-10 mb-4 text-foreground" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-semibold mt-8 mb-3 text-foreground" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground" {...props} />
  ),
  p: (props) => (
    <p className="leading-7 mb-4 text-foreground/90" {...props} />
  ),
  a: (props) => {
    const href = props.href ?? "";
    if (href.startsWith("/")) {
      return (
        <Link href={href} className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors">
          {props.children}
        </Link>
      );
    }
    return (
      <a
        className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul className="list-disc pl-6 mb-4 space-y-1" {...props} />
  ),
  ol: (props) => (
    <ol className="list-decimal pl-6 mb-4 space-y-1" {...props} />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-l-4 border-accent/40 pl-4 italic my-6 text-muted" {...props} />
  ),
  code: (props) => (
    <code className="bg-secondary text-foreground px-1.5 py-0.5 rounded text-sm font-mono" {...props} />
  ),
  pre: (props) => (
    <pre className="bg-hero-start text-white/90 rounded-lg p-4 overflow-x-auto my-6 text-sm leading-6" {...props} />
  ),
  hr: () => <hr className="border-border my-8" />,
  img: (props) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg my-6 w-full" alt={props.alt ?? ""} {...props} />
  ),
};
