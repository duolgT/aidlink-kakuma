
export const categories = [
  { id: "all", label: "All Services" },
  { id: "health", label: "Healthcare" },
  { id: "education", label: "Education" },
  { id: "water", label: "Water & Sanitation" },
  { id: "protection", label: "Protection" },
  { id: "livelihoods", label: "Livelihoods" },
];

export function getCategoryLabel(categoryId) {
  return (
    categories.find((item) => item.id === categoryId)?.label ??
    "Other"
  );
}
