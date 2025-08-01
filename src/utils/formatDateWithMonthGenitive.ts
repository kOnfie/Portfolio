export const formatDateWithMonthGenitive = (created_at: string | null): string => {
  if (created_at === null) {
    return "Present";
  }
  const monthNamesGenitive = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const getMonthByIndex = (monthNumber: number) => monthNamesGenitive[monthNumber - 1];

  const month = created_at.split("-")[1];
  const year = created_at.split("-")[0];

  return `${getMonthByIndex(Number(month))} ${Number(year)}`;
};
