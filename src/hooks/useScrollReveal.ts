import { useEffect } from "react";

/**
 * Hook autoral para revelação progressiva de seções ao rolar a página.
 * Observa também mutações no dom pra garantir que itens filtrados suave
 * dinamicamente recebam a classe `.is-visible` sem ficarem ocultos, nn sei pq ele meteu isso como funcao dinamica, mas ta indo
 * nn mexe
 */
export function useScrollReveal() {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            intersectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(".reveal:not(.is-visible)");
      elements.forEach((el) => intersectionObserver.observe(el));
    };

    observeAll();

    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      intersectionObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
