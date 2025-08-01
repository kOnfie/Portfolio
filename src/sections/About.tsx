import cn from "classnames";
import { Container } from "../components/ui/Container";
import { Title } from "../components/ui/Title";
import { useGetCompanies } from "../hooks/useGetCompanies";
import { useEffect } from "react";

import { formatDateWithMonthGenitive } from "../utils/formatDateWithMonthGenitive";
import { SkeletonCompanies } from "../components/ui/SkeletonCompanies";

import { motion } from "framer-motion";

interface AboutProps {
  className?: string;
}

const PARAGRAPHS = [
  "Hi, I'm Denys. I'm a frontend developer working with modern technologies such as React, Next.js, and JavaScript. I am constantly improving my skills and developing new ones. I create my own pet projects and learn from them.",
  "I enjoy solving interesting problems, studying new technologies, and improving myself as a software engineer.",
  "I have experience working both in team projects and individually as a frontend developer.",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1): any => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.65,
      type: "spring",
      stiffness: 60,
    },
  }),
};

const fadeSimple = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const About = ({ className }: AboutProps) => {
  const { companies, getCompanies } = useGetCompanies();

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <section className={cn(className, "")} id="about">
      <Container>
        <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
          <motion.div variants={fadeSimple}>
            <Title>About me</Title>
          </motion.div>

          <motion.div className="grid gap-3 mb-20">
            {PARAGRAPHS.map((paragraph, i) => (
              <motion.p
                key={paragraph}
                className="text-color-text-secondary"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div variants={fadeSimple}>
            <Title className="text-[48px] text-right">my experience</Title>
          </motion.div>

          <motion.div
            className="relative pl-8 border-l-2 border-[var(--color-primary)] grid gap-12 mt-10 max-xs:pl-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {companies.length === 0 && [1, 2].map((_, i) => <SkeletonCompanies key={i} />)}
            {companies.map((company, i) => (
              <motion.div
                key={company.id}
                className="relative flex gap-5 group max-xs:gap-3"
                variants={fadeUp}
                custom={i + 1}
              >
                <motion.div
                  className="min-w-16 w-16  min-h-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-primary)] bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent shadow-md flex items-center justify-center"
                  initial={{ scale: 0.8, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.12, duration: 0.5, type: "spring" }}
                >
                  <img src={company.company_icon as string} alt={company.company_name} className="w-full h-full" />
                </motion.div>
                <div>
                  <p className="text-sm text-[var(--color-accent)] font-medium uppercase mb-1 tracking-wide">
                    {formatDateWithMonthGenitive(company.start_work)} —{" "}
                    {company.end_work ? formatDateWithMonthGenitive(company.end_work) : "Present"}
                  </p>
                  <h3 className="font-bebas-neue text-2xl text-color-text-primary mb-1">{company.company_name}</h3>
                  <p className="text-[15px] text-color-text-secondary mb-2">{company.role}</p>
                  <p className="text-[15px] leading-relaxed text-color-text-tertiary">{company.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};
