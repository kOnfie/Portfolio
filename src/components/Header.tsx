import cn from "classnames";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  className?: string;
}

const ITEMS = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#connect",
  },
];

export const Header = ({ className }: HeaderProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(!!localStorage.getItem("darkTheme"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleChangeTheme() {
    setMenuOpen(false);

    if (darkTheme) {
      document.body.classList.toggle("light-theme");
      localStorage.setItem("darkTheme", "false");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("darkTheme", "true");
    }

    setDarkTheme((prevTheme) => !prevTheme);
  }

  function handleToggleMenu() {
    setMenuOpen((open) => !open);
  }

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <header className={cn(className, "py-6 fixed top-0 left-0 right-0 z-10", scrolled && "bg-[var(--bg-primary)]")}>
      <div className="max-w-[1320px] px-5 m-auto flex justify-between items-center">
        <a href="#" className="uppercase font-bebas-neue text-[32px] text-color-text-primary">
          Denys Matvieiev
        </a>

        <ul
          className={cn(
            "flex items-center gap-8 max-md:flex-col max-md:absolute max-md:top-[-280px] max-md:left-5 max-md:right-5 max-md:rounded-[10px] max-md:gap-3 max-md:py-3 max-md:border max-md:border-1 max-md:border-[--color-text-primary] max-md:bg-[--bg-primary] transition-all",
            menuOpen && "max-md:top-[85px]"
          )}
        >
          {ITEMS.map((item) => (
            <li key={item.name}>
              <a className="text-color-text-secondary" href={item.href} onClick={handleLinkClick}>
                {item.name}
              </a>
            </li>
          ))}

          <button onClick={handleChangeTheme}>
            {darkTheme ? <Sun size={20} color="#c7c7c7" /> : <Moon size={20} color="#968989" />}
          </button>
        </ul>

        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={handleToggleMenu}
          aria-label="Open menu"
        >
          <span
            className={cn(
              "block h-0.5 w-6 bg-color-text-primary transition-transform duration-300",
              menuOpen ? "rotate-45 translate-y-[8px]" : ""
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-color-text-primary my-1 transition-opacity duration-300",
              menuOpen ? "opacity-0" : ""
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-6 bg-color-text-primary transition-transform duration-300",
              menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            )}
          />
        </button>
      </div>
    </header>
  );
};
