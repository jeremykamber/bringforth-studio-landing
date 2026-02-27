import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { ProductCard } from "@/components/ui/product-card";

const products = [
  {
    name: "DeepBound",
    description:
      "Automated user testing for startups. Generate realistic personas from your ICP, run them through your product, and get detailed insights on their journey.",
    status: "live" as const,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    name: "Echo",
    description:
      "Your AI-powered journaling companion. As you write, Echo listens, understands, and gently guides you toward deeper self-reflection.",
    status: "live" as const,
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
        <path d="M12 2a10 10 0 0 1 10 10" />
        <circle cx="12" cy="12" r="6" />
      </svg>
    ),
  },
];

export function Products() {
  return (
    <Section id="products">
      <Container>
        <div className="mb-12">
          <p className="text-sm font-medium text-foreground/50 mb-4 tracking-wide uppercase">
            What we&apos;re building
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">Products</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              icon={product.icon}
              status={product.status}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
