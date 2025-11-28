import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-4 px-6 bg-card border-t border-border mt-10">
      <div className="container mx-auto relative">

        {/* Center Text */}
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Arpit Portfolio. All rights reserved.
        </p>

        {/* Arrow Button on RIGHT */}
        <a
          href="#hero"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition"
        >
          <ArrowUp size={18} />
        </a>

      </div>
    </footer>
  );
};
