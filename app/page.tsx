import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Products } from "@/components/landing/products";
import { About } from "@/components/landing/about";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <About />
      <Footer />
    </main>
  );
}
