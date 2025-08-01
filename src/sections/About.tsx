import cn from "classnames";
import { Container } from "../components/ui/Container";
import { Title } from "../components/ui/Title";
import { useGetCompanies } from "../hooks/useGetCompanies";
import { useEffect } from "react";
import type { CompanyType } from "../types/Companies.types";
import { formatDateWithMonthGenitive } from "../utils/formatDateWithMonthGenitive";
import { SkeletonCompanies } from "../components/ui/SkeletonCompanies";

interface AboutProps {
  className?: string;
}

const PARAGRAPHS = [
  "Hi, I'm Denys. I'm a frontend developer working with modern technologies such as React, Next.js, and JavaScript. I am constantly improving my skills and developing new ones. I create my own pet projects and learn from them.",
  "I enjoy solving interesting problems, studying new technologies, and improving myself as a software engineer.",
  "I have experience working both in team projects and individually as a frontend developer.",
];

export const About = ({ className }: AboutProps) => {
  const { companies, getCompanies } = useGetCompanies();

  useEffect(() => {
    getCompanies();
  }, []);

  console.log("companies:", companies);

  return (
    <section className={cn(className, "")} id="about">
      <Container>
        <Title>About me</Title>

        <div className="grid gap-3 mb-20">
          {PARAGRAPHS.map((paragraph) => (
            <p key={paragraph} className="text-color-text-secondary">
              {paragraph}
            </p>
          ))}
        </div>

        <Title className="text-[48px] text-right">my experience</Title>

        <div className="relative pl-8 border-l-2 border-[var(--color-primary)] grid gap-12 mt-10 max-xs:pl-3">
          {companies.length === 0 && [1, 2].map(() => <SkeletonCompanies />)}
          {companies.map((company: CompanyType) => (
            <div key={company.id} className="relative flex gap-5 group max-xs:gap-3">
              <div className="min-w-16 w-16  min-h-16 h-16 rounded-full overflow-hidden border-2 border-[var(--color-primary)] bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent shadow-md flex items-center justify-center">
                <img src={company.company_icon as string} alt={company.company_name} className="w-full h-full" />
              </div>

              <div>
                <p className="text-sm text-[var(--color-accent)] font-medium uppercase mb-1 tracking-wide">
                  {formatDateWithMonthGenitive(company.start_work)} —{" "}
                  {company.end_work ? formatDateWithMonthGenitive(company.end_work) : "Present"}
                </p>
                <h3 className="font-bebas-neue text-2xl text-color-text-primary mb-1">{company.company_name}</h3>
                <p className="text-[15px] text-color-text-secondary mb-2">{company.role}</p>
                <p className="text-[15px] leading-relaxed text-color-text-tertiary">{company.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
