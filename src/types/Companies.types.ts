export interface CompanyType {
  id: number;
  company_name: string;
  start_work: string;
  end_work: string | null;
  is_current: boolean;
  company_icon: string | null;
  role: string;
  description?: string | null;
  employment: "full_time" | "part_time";
}
