import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import type { TechnologyType } from "../types/Techonoly.types";

export function useGetTechnologies(): { getTechnologies: () => void; technologies: TechnologyType[] } {
  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);

  async function getTechnologies() {
    try {
      const { data: technologies, error } = await supabase
        .from("technologies")
        .select("*")
        .order("order", { ascending: true });

      if (error) {
        throw error;
      }

      setTechnologies(technologies);
    } catch (error) {
      console.error("Error in useGetTechnologies:", error);
    }
  }

  return { getTechnologies, technologies };
}
