import cn from "classnames";
import { Container } from "./ui/Container";
import { Title } from "./ui/Title";
import { Copyright, Github, Linkedin, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.23 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.54, type: "spring", stiffness: 80 } },
};

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn(className, "pb-10")} id="connect">
      <Container>
        <motion.div
          className="m-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.28 }}
        >
          <motion.div variants={itemVariants}>
            <Title>Let’s connect</Title>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-[18px] mb-[8px] text-color-text-secondary max-md:text-[14px] max-md:mb-5"
          >
            Say hello at{" "}
            <a className="text-color-text-primary underline" href="mailto:matveevdenis458@gmail.com">
              matveevdenis458@gmail.com
            </a>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-[18px] mb-[38px] text-color-text-secondary max-md:text-[14px] max-md:mb-5"
          >
            For more info, here’s my{" "}
            <a
              className="text-color-text-primary underline"
              href="https://drive.google.com/file/d/1A_zYz5NoEUZ6PRj7d6NCq1LjHAzb4tI1/view?usp=sharing"
              target="_blank"
            >
              resume
            </a>
          </motion.p>

          <motion.div className="flex justify-center gap-6 mb-20" variants={itemVariants}>
            {SOCIAL_MEDIAS.map((media) => (
              <motion.a
                key={media.href}
                href={media.href}
                target="_blank"
                className="bg-[--color-black] p-2 rounded-[50%]"
                variants={itemVariants}
                whileHover={{
                  scale: 1.15,
                  boxShadow: "0 2px 15px #d3e97a30",
                }}
                transition={{ type: "spring", stiffness: 320 }}
              >
                {media.icon}
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="flex justify-center items-center gap-[5px] text-color-text-secondary"
          >
            <Copyright size={12} />
            2025 Denys Matvieiev
          </motion.p>
        </motion.div>
      </Container>
    </footer>
  );
};
