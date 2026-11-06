import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#acervo", id: "acervo", label: "Acervo" },
  { href: "#guia", id: "guia", label: "Guia de Leitura" },
  { href: "#projeto", id: "projeto", label: "Projeto" },
  { href: "#avaliar", id: "avaliar", label: "Avaliar" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-neutral-800 bg-black/85 backdrop-blur-md"
          : "border-b border-transparent bg-black/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <a
          href="#topo"
          onClick={() => setActiveId("")}
          className="text-[15px] font-medium tracking-tight text-white transition-opacity hover:opacity-80"
        >
          IA na Prática
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-white"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#acervo"
            className="hidden rounded-full bg-white px-5 py-2 text-xs font-medium text-black transition-colors duration-200 hover:bg-neutral-200 sm:inline-block"
          >
            Acessar Acervo
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-300 transition-colors hover:bg-neutral-900 md:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b border-neutral-900 bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? "max-h-80 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#acervo"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black"
            >
              Acessar Acervo
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
