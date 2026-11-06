import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ebooks from "@/components/Ebooks";
import Guia from "@/components/Guia";
import Projeto from "@/components/Projeto";
import Avaliar from "@/components/Avaliar";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function App() {
  useScrollReveal();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const scrollToAcervo = () => {
    const el = document.getElementById("acervo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHeroSearch = (query: string) => {
    setSearchQuery(query);
    scrollToAcervo();
  };

  const handleHeroCategory = (category: string) => {
    setSelectedCategory(category);
    scrollToAcervo();
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />
      <main>
        <Hero
          onSearch={handleHeroSearch}
          onSelectCategory={handleHeroCategory}
          activeCategory={selectedCategory}
        />
        <Ebooks
          query={searchQuery}
          onQueryChange={setSearchQuery}
          category={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <Guia />
        <Projeto />
        <Avaliar />
      </main>
      <Footer />
    </div>
  );
}
