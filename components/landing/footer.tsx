import { Container } from "@/components/ui/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-foreground/10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <p className="font-semibold mb-2">Bringforth Studio</p>
            <p className="text-sm text-foreground/50">
              Building AI products that amplify human potential.
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@bringforth.studio"
              className="text-sm text-foreground/50 hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-foreground/5">
          <p className="text-xs text-foreground/30">
            &copy; {currentYear} Bringforth Studio. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
