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
            We believe AI should feel human, not artificial
          </h2>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Bringforth Studio is an AI Product Lab founded on the belief that
            AI should enhance our humanity &mdash; not replace it. We build
            tools that feel intuitive, empathetic, and genuinely helpful.
          </p>
          <p className="text-foreground/60 leading-relaxed mb-8">
            Every product we create is designed to make AI feel more
            human: natural, thoughtful, and aligned with how we actually think
            and work.
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
