import HeroCarousel from "./components/HeroCarousel";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import BooksSection from "./components/BooksSection";

export default function HomePage() {
  return (
    <div className="mt-10">
      <HeroCarousel />
      <CategorySection />
      <FeaturedProducts />
      <BooksSection />
    </div>
  );
}
