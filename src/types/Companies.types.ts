export enum EmploymentType {
  FULL_TIME = "full_time",
  PART_TIME = "part_time",
}

export interface CompanyType {
  id: number;
  company_name: string;
  start_work: string;
  end_work: string | null;
  is_current: boolean;
  company_icon: string | null;
  role: string;
  description?: string | null;
  employment: EmploymentType;
}
