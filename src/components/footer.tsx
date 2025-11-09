import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 pb-4 text-center">
      <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
        <span className="text-muted-foreground">
          Built with Flutter • Rust • Grok
        </span>
        <span className="text-muted-foreground">•</span>
        <Link
          href="https://github.com/asimwe1/docflow-waitlist"
          className="text-muted-foreground hover:text-foreground"
        >
          View on GitHub
        </Link>
        <span className="text-muted-foreground">•</span>
        <Link
          href="https://docflow.ai"
          className="text-muted-foreground hover:text-foreground"
        >
          docflow.ai
        </Link>
      </div>

      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} DocFlow AI. All rights reserved.
      </p>
    </footer>
  );
}