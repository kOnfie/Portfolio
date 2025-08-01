import { useState } from "react";
import { supabase } from "../supabase/supabaseClient";

import type { CompanyType } from "../types/Companies.types";

export function useGetCompanies(): { getCompanies: () => void; companies: CompanyType[] } {
  const [companies, setCompanies] = useState<CompanyType[]>([]);

  async function getCompanies() {
    try {
      const { data: companies, error } = await supabase
        .from("companies")
        .select("*")
        .order("id", { ascending: false });

      if (error) {
        throw error;
      }

      setCompanies(companies);
    } catch (error) {
      console.error("Error in useGetCompanies:", error);
    }
  }

  return { getCompanies, companies };
}
