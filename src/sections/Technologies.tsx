import cn from "classnames";
import { Container } from "../components/ui/Container";
import { Title } from "../components/ui/Title";
import { useGetTechnologies } from "../hooks/useGetTechnologies";
import { useEffect } from "react";
import type { TechnologyType } from "../types/Techonoly.types";
import { motion } from "framer-motion";

interface TechnologiesProps {
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 1): any => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.1 + i * 0.07,
      duration: 0.5,
      type: "spring",
      stiffness: 70,
    },
  }),
};

export const Technologies = ({ className }: TechnologiesProps) => {
  const { technologies, getTechnologies } = useGetTechnologies();

  useEffect(() => {
    getTechnologies();
  }, []);

  return (
    <section className={cn(className, "")}>
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <motion.div variants={itemVariants}>
            <Title>main Technologies</Title>
          </motion.div>
          <motion.div
            className="grid grid-cols-5 gap-3 mt-20 px-[110px] technologies max-md:px-0 max-ss:mt-10 max-ss:grid-cols-3 max-ss:gap-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {technologies.map((technology: TechnologyType, i) => (
              <motion.div
                className="text-center transition-all technology"
                key={technology.id}
                variants={itemVariants}
                custom={i}
                whileHover={{
                  scale: 1.12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <motion.img
                  className="w-[40px] h-[40px] m-auto mb-4"
                  src={technology.icon}
                  alt={technology.name}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.3 }}
                />
                <motion.p
                  className="text-[18px] text-color-text-secondary uppercase"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18 + i * 0.08, duration: 0.35 }}
                >
                  {technology.name}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
