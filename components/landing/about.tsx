import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-foreground/50 mb-4 tracking-wide uppercase">
            About us
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            We believe AI should serve humans, not replace them
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Bringforth Studio is an AI Product Lab founded on the belief that
            artificial intelligence should be a tool that amplifies human
            capabilities rather than a replacement for human creativity and
            judgment.
          </p>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Every product we build is designed to be a co-pilot in your work
            &mdash; handling the repetitive, analytical tasks so you can focus
            on what matters most: creativity, strategy, and human connection.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" href="#products">
              Explore Our Products
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
