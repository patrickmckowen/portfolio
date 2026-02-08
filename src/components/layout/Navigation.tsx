"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Spring transition matching Framer values
const springTransition = {
  type: "spring" as const,
  stiffness: 500,
  damping: 60,
};

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("work");
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Check if nav is over a dark section
  const checkDarkSection = useCallback(() => {
    if (!headerRef.current) return;

    const headerRect = headerRef.current.getBoundingClientRect();
    const headerCenter = headerRect.top + headerRect.height / 2;

    const darkSections = document.querySelectorAll(".dark-section");
    let overDark = false;

    darkSections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (headerCenter >= rect.top && headerCenter <= rect.bottom) {
        overDark = true;
      }
    });

    setIsOverDarkSection(overDark);
  }, []);

  // Handle scroll for dark section detection
  useEffect(() => {
    const handleScroll = () => {
      checkDarkSection();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkDarkSection]);

  // Section detection based on scroll position
  useEffect(() => {
    const sectionIds = ["work", "about", "contact"];

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      // Check if scrolled to bottom (for Contact section)
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (scrolledToBottom) {
        setActiveSection("contact");
        return;
      }

      // Find which section the scroll position is in
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;

        if (scrollPosition >= elementTop) {
          setActiveSection(id);
          return;
        }
      }

      // Default to first section if at top
      setActiveSection(sectionIds[0]);
    };

    // Initial check
    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get nav item styles based on active state and dark mode
  const getNavItemStyles = (isActive: boolean) => {
    if (isOverDarkSection) {
      // Dark mode (over dark sections)
      if (isActive) {
        return {
          backgroundColor: "rgb(255, 255, 255)",
          color: "rgba(0, 0, 0, 0.9)",
          backdropFilter: "none",
        };
      }
      return {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        color: "rgb(255, 255, 255)",
        backdropFilter: "blur(40px)",
      };
    } else {
      // Light mode (over light sections)
      if (isActive) {
        return {
          backgroundColor: "rgb(23, 26, 28)",
          color: "rgb(255, 255, 255)",
          backdropFilter: "none",
        };
      }
      return {
        backgroundColor: "rgba(0, 0, 0, 0.08)",
        color: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(40px)",
      };
    }
  };

  // Get hover styles for nav items
  const getNavItemHoverStyles = (isActive: boolean) => {
    if (isActive) return {}; // No hover effect for active items

    if (isOverDarkSection) {
      return { backgroundColor: "rgba(255, 255, 255, 0.12)" };
    }
    return { backgroundColor: "rgba(0, 0, 0, 0.12)" };
  };

  // Logo color based on dark mode
  const logoColor = isOverDarkSection
    ? "rgb(255, 255, 255)"
    : "rgba(0, 0, 0, 0.9)";

  // Render nav items (shared between mobile and desktop)
  const renderNavItems = () => {
    return navItems.map((item) => {
      const isActive = activeSection === item.href.replace("#", "");
      const styles = getNavItemStyles(isActive);
      const hoverStyles = getNavItemHoverStyles(isActive);

      return (
        <motion.button
          key={item.label}
          onClick={() => scrollToSection(item.href)}
          className="h-[44px] px-5 rounded-full text-sm font-medium flex items-center justify-center"
          style={{
            backgroundColor: styles.backgroundColor,
            color: styles.color,
            backdropFilter: styles.backdropFilter,
            WebkitBackdropFilter: styles.backdropFilter,
          }}
          initial={false}
          animate={{
            backgroundColor: styles.backgroundColor,
            color: styles.color,
          }}
          whileHover={{
            scale: 1.02,
            ...hoverStyles,
          }}
          whileTap={{ scale: 0.98 }}
          transition={springTransition}
        >
          {item.label}
        </motion.button>
      );
    });
  };

  return (
    <>
      {/* Mobile: Static Logo at Top */}
      <div className="md:hidden py-6 px-6">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[18px] font-medium transition-colors"
          style={{ color: "rgba(0, 0, 0, 0.9)" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={springTransition}
        >
          Patrick McKowen
        </motion.button>
      </div>

      {/* Desktop: Fixed Header with Logo + Nav */}
      <motion.header
        ref={headerRef}
        className="hidden md:flex fixed top-0 left-0 right-0 z-50 py-6"
      >
        <div className="max-w-[1200px] mx-auto flex justify-between items-center w-full">
          {/* Logo / Name */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[18px] font-medium transition-colors"
            style={{ color: logoColor }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={springTransition}
          >
            Patrick McKowen
          </motion.button>

          {/* Navigation Items */}
          <nav className="flex items-center gap-[10px]">{renderNavItems()}</nav>
        </div>
      </motion.header>

      {/* Mobile: Fixed Bottom Nav Bar */}
      <motion.nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 pb-5 px-6">
        <div className="flex items-center justify-center gap-[10px]">
          {renderNavItems()}
        </div>
      </motion.nav>
    </>
  );
}
