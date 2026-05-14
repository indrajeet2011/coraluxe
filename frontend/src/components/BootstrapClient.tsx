"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    import("bootstrap");

    const spinner = () => {
      setTimeout(() => {
        const spinnerEl = document.getElementById("spinner");
        if (spinnerEl) {
          spinnerEl.classList.remove("show");
        }
      }, 1);
    };
    spinner();

    if (typeof (window as any).WOW !== "undefined") {
      new (window as any).WOW().init();
    }

    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("position-fixed", "bg-dark", "shadow-sm");
        } else {
          navbar.classList.remove("position-fixed", "bg-dark", "shadow-sm");
        }
      }

      const backToTop = document.querySelector(".back-to-top") as HTMLElement;
      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.style.display = "flex";
        } else {
          backToTop.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const backToTopBtn = document.querySelector(".back-to-top");
    const handleBackToTop = (e: Event) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    backToTopBtn?.addEventListener("click", handleBackToTop);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      backToTopBtn?.removeEventListener("click", handleBackToTop);
    };
  }, []);

  return null;
}
