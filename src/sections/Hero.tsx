import cn from "classnames";
import { Container } from "../components/ui/Container";
import author from "../assets/author.jpeg";
import { ArrowRight, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  className?: string;
}

const LINKS = [
  { icon: <Linkedin size={20} color="#D3E97A" />, href: "https://www.linkedin.com/in/denys-matvieiev-56b25a256/" },
  { icon: <Github size={20} color="#D3E97A" />, href: "https://github.com/kOnfie" },
  { icon: <Send size={20} color="#D3E97A" />, href: "https://t.me/denismatvieiev" },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0): any => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.7,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn(className, "")} id="hero">
      <Container>
        <motion.div
          className="flex justify-between items-center gap-[30px] max-md:flex-col max-ss:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="max-md:order-2">
            <motion.h1
              className="uppercase text-[101px] font-bebas-neue line leading-none mb-2 max-lg:text-[62px] max-ss:text-[40px]"
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            >
              hi, i am <br /> denys matvieiev.
            </motion.h1>

            <motion.p
              className="text-[18px] mb-10 text-color-text-secondary max-md:text-[14px] max-md:mb-5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Frontend developer, I help businesses create adaptive, convenient, and interesting web applications.
            </motion.p>

            <motion.div className="flex gap-4 items-center flex-wrap" initial="hidden" animate="visible">
              <motion.a
                href="#connect"
                className="flex gap-5 items-center uppercase font-bold py-[15px] px-6 bg-[var(--color-primary)] text-[var(--color-black)] rounded-[100px] max-md:py-[16.5px] max-md:px-4 max-md:text-[14px]"
                variants={itemVariants}
                custom={0}
                whileHover={{ scale: 1.08, boxShadow: "0 3px 24px #d3e97a50" }}
                whileTap={{ scale: 0.98 }}
              >
                contact me
                <ArrowRight size={20} />
              </motion.a>

              {LINKS.map((link, i) => (
                <motion.a
                  className="w-[54px] h-[54px] grid place-content-center bg-[#222222] rounded-[50%] max-ss:w-[41px] max-ss:h-[41px]"
                  href={link.href}
                  target="_blank"
                  key={link.href}
                  variants={itemVariants}
                  custom={i + 1}
                  whileHover={{ scale: 1.12, boxShadow: "0 2px 16px #d3e97a30" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.img
            src={author}
            alt="Denys Matvieiev"
            className="w-[49%] rounded-[10px] max-md:order-1 max-ss:w-[70%]"
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.8, type: "spring" }}
          />
        </motion.div>
      </Container>
    </section>
  );
};
