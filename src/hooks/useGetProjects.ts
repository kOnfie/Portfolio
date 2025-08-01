import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";
import type { ProjectType } from "../types/Project.types";

export function useGetProjects(): { getProjects: () => void; projects: ProjectType[] } {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  async function getProjects() {
    try {
      const { data: projects, error } = await supabase.from("projects").select("*");

      if (error) {
        throw error;
      }

      setProjects(projects);
    } catch (error) {
      console.error("Error in useGetProjects:", error);
    }
  }

  return { getProjects, projects };
}
