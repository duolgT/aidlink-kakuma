
export const REPORT_CATEGORIES = [
  { id: "water", label: "Water & Sanitation" },
  { id: "health", label: "Healthcare Access" },
  { id: "education", label: "Education" },
  { id: "accessibility", label: "Accessibility" },
  { id: "shelter", label: "Shelter & Infrastructure" },
  { id: "other", label: "Other Service Challenges" },
];

export const REPORT_AREAS = [
  "Kakuma 1",
  "Kakuma 2",
  "Kakuma 3",
  "Kakuma 4",
  "Prefer not to specify",
];

export function getReportCategoryLabel(id) {
  return (
    REPORT_CATEGORIES.find((category) => category.id === id)
      ?.label ?? "Other"
  );
}
