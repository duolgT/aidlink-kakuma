
export const emergencyCategories = [
  { id: "all", label: "All Guides" },
  { id: "medical", label: "Medical" },
  { id: "fire", label: "Fire Safety" },
  { id: "protection", label: "Protection" },
  { id: "water", label: "Water Safety" },
  { id: "weather", label: "Weather" },
  { id: "family", label: "Family Support" },
];

export const emergencyGuides = [
  {
    id: "medical-help",
    title: "Finding Emergency Medical Help",
    category: "medical",
    summary: "Learn how to seek professional medical assistance.",
    steps: [
      "Check that the surrounding area is safe.",
      "Seek qualified medical assistance promptly.",
      "Explain what happened to healthcare personnel.",
      "Follow instructions from qualified responders.",
    ],
    reminder: "This information does not replace medical treatment.",
    locallyVerified: false,
  },
  {
    id: "fire-safety",
    title: "Fire Safety",
    category: "fire",
    summary: "General precautions when a fire occurs.",
    steps: [
      "Move away from the fire and warn others nearby.",
      "Avoid entering burning structures.",
      "Keep away from smoke and other hazards.",
      "Contact appropriate local emergency responders.",
    ],
    reminder: "Never re-enter a burning building for belongings.",
    locallyVerified: false,
  },
  {
    id: "protection-support",
    title: "Protection and Safety Support",
    category: "protection",
    summary: "Find general guidance on seeking protection support.",
    steps: [
      "Move to a safer location if possible.",
      "Seek help from trusted protection personnel.",
      "Share sensitive concerns privately.",
      "Ask about safe and confidential referrals.",
    ],
    reminder: "Protect personal and confidential information.",
    locallyVerified: false,
  },
  {
    id: "water-safety",
    title: "Water Safety",
    category: "water",
    summary: "General information about safe water access.",
    steps: [
      "Check trusted local water safety notices.",
      "Avoid water suspected of contamination.",
      "Use trusted drinking water sources where available.",
      "Seek guidance from qualified public health workers.",
    ],
    reminder: "Water treatment depends on the type of contamination.",
    locallyVerified: false,
  },
  {
    id: "severe-weather",
    title: "Severe Weather and Flooding",
    category: "weather",
    summary: "Basic information about weather-related hazards.",
    steps: [
      "Follow official weather warnings.",
      "Avoid floodwater and unstable areas.",
      "Move to safer ground when necessary.",
      "Follow verified local evacuation instructions.",
    ],
    reminder: "Check current local conditions before taking action.",
    locallyVerified: false,
  },
  {
    id: "family-separation",
    title: "Family Separation Support",
    category: "family",
    summary: "Guidance on seeking family tracing assistance.",
    steps: [
      "Move to a safe location.",
      "Contact an authorized family tracing service.",
      "Share relevant information through private channels.",
      "Keep case reference details secure.",
    ],
    reminder: "Never publicly share children's sensitive details.",
    locallyVerified: false,
  },
];

export function getEmergencyGuideById(id) {
  return emergencyGuides.find((guide) => guide.id === id);
}
