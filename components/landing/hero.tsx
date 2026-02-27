import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-foreground/50 mb-4 tracking-wide uppercase">
            AI Product Lab
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Building the future of{" "}
            <span className="text-foreground/60">AI-powered</span> products
          </h1>
          <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl">
            We&apos;re a product studio exploring the boundaries of artificial intelligence.
            Our mission: create tools that amplify human potential.
          </p>
        </div>
      </Container>
    </section>
  );
}
