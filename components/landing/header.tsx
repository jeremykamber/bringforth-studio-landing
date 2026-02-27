import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Bringforth Studio
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#products"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-sm text-foreground/60 hover:text-foreground transition-colors"
            >
              About
            </a>
          </nav>
          <Button variant="ghost" href="#products" className="text-sm">
            View Products
          </Button>
        </div>
      </Container>
    </header>
  );
}
