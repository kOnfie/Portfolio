import cn from "classnames";
import { Container } from "../components/ui/Container";

import author from "../assets/author.jpeg";
import { ArrowRight, Github, Linkedin, Send } from "lucide-react";

interface HeroProps {
  className?: string;
}

const LINKS = [
  {
    icon: <Linkedin size={20} color="#D3E97A" />,
    href: "https://www.linkedin.com/in/denys-matvieiev-56b25a256/",
  },
  {
    icon: <Github size={20} color="#D3E97A" />,
    href: "https://github.com/kOnfie",
  },
  {
    icon: <Send size={20} color="#D3E97A" />,
    href: "https://t.me/denismatvieiev",
  },
];

export const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn(className, "")} id="hero">
      <Container>
        <div className="flex justify-between items-center gap-[30px] max-md:flex-col max-ss:gap-5">
          <div className="max-md:order-2">
            <h1 className="uppercase text-[101px] font-bebas-neue line leading-none mb-2 max-lg:text-[62px] max-ss:text-[40px]">
              hi, i am <br /> denys matvieiev.
            </h1>

            <p className="text-[18px] mb-10 text-color-text-secondary max-md:text-[14px] max-md:mb-5">
              Frontend developer, I help businesses create adaptive, convenient, and interesting web applications.
            </p>

            <div className="flex gap-4 items-center flex-wrap">
              <a
                href="#connect"
                className="flex gap-5 items-center uppercase font-bold py-[15px] px-6 bg-[var(--color-primary)] text-[var(--color-black)] rounded-[100px] max-md:py-[16.5px] max-md:px-4 max-md:text-[14px]"
              >
                contact me
                <ArrowRight size={20} />
              </a>

              {LINKS.map((link) => (
                <a
                  className="w-[54px] h-[54px] grid place-content-center bg-[#222222] rounded-[50%] max-ss:w-[41px] max-ss:h-[41px]"
                  href={link.href}
                  target="_blank"
                  key={link.href}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <img src={author} alt="Denys Matvieiev" className="w-[49%] rounded-[10px] max-md:order-1 max-ss:w-[70%]" />
        </div>
      </Container>
    </section>
  );
};
