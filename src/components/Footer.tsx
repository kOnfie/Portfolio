import cn from "classnames";
import { Container } from "./ui/Container";
import { Title } from "./ui/Title";
import { Copyright, Github, Linkedin, Mail, Send } from "lucide-react";

interface FooterProps {
  className?: string;
}

const SOCIAL_MEDIAS = [
  {
    icon: <Linkedin size={32} color="#D3E97A" />,
    href: "https://www.linkedin.com/in/denys-matvieiev-56b25a256/",
  },
  {
    icon: <Github size={32} color="#D3E97A" />,
    href: "https://github.com/kOnfie",
  },
  {
    icon: <Mail size={32} color="#D3E97A" />,
    href: "mailto:matveevdenis458@gmail.com",
  },
  {
    icon: <Send size={32} color="#D3E97A" />,
    href: "https://t.me/denismatvieiev",
  },
];

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, "pb-10")} id="connect">
      <Container>
        <div className="m-auto text-center">
          <Title>Let’s connect</Title>

          <p className="text-[18px] mb-[8px] text-color-text-secondary max-md:text-[14px] max-md:mb-5">
            Say hello at{" "}
            <a className="text-color-text-primary underline" href="mailto:matveevdenis458@gmail.com">
              matveevdenis458@gmail.com
            </a>
          </p>

          <p className="text-[18px] mb-[38px] text-color-text-secondary max-md:text-[14px] max-md:mb-5">
            For more info, here’s my{" "}
            <a
              className="text-color-text-primary underline"
              href="https://drive.google.com/file/d/1A_zYz5NoEUZ6PRj7d6NCq1LjHAzb4tI1/view?usp=sharing"
              target="_blank"
            >
              resume
            </a>
          </p>

          <div className="flex justify-center gap-6 mb-20">
            {SOCIAL_MEDIAS.map((media) => (
              <a key={media.href} href={media.href} target="_blank" className="bg-[--color-black] p-2 rounded-[50%]">
                {media.icon}
              </a>
            ))}
          </div>

          <p className="flex justify-center items-center gap-[5px] text-color-text-secondary">
            <Copyright size={12} />
            2025 Denys Matvieiev
          </p>
        </div>
      </Container>
    </footer>
  );
};
