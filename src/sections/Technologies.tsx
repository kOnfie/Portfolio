import cn from "classnames";
import { Container } from "../components/ui/Container";
import { Title } from "../components/ui/Title";
import { useGetTechnologies } from "../hooks/useGetTechnologies";
import { useEffect } from "react";
import type { TechnologyType } from "../types/Techonoly.types";

interface TechnologiesProps {
  className?: string;
}

export const Technologies = ({ className }: TechnologiesProps) => {
  const { technologies, getTechnologies } = useGetTechnologies();

  useEffect(() => {
    getTechnologies();
  }, []);

  console.log("technologies:", technologies);

  return (
    <section className={cn(className, "")}>
      <Container>
        <Title className="">main Technologies</Title>

        <div className="grid grid-cols-5 gap-3 mt-20 px-[110px] technologies max-md:px-0 max-ss:mt-10 max-ss:grid-cols-3 max-ss:gap-y-6">
          {technologies.map((technology: TechnologyType) => (
            <div className="text-center transition-all technology">
              <img
                className="w-[40px] h-[40px] m-auto mb-4"
                src={technology.icon}
                alt={technology.name}
                key={technology.id}
              />

              <p className="text-[18px] text-color-text-secondary uppercase">{technology.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
