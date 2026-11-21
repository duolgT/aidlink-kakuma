
export const services = [
  {
    id: "demo-health-01",
    name: "Sample Community Health Centre",
    category: "health",
    area: "Kakuma — example only",
    description:
      "Illustrates how residents could find information about consultations, healthcare services, and referrals.",
    servicesOffered: [
      "General consultations",
      "Health information",
      "Referral guidance",
    ],
    coordinates: null,
    phone: null,
    verified: false,
    isDemo: true,
  },
  {
    id: "demo-education-01",
    name: "Sample Community Learning Centre",
    category: "education",
    area: "Kakuma — example only",
    description:
      "Demonstrates a listing for education, digital literacy, and community learning opportunities.",
    servicesOffered: [
      "Digital literacy",
      "Computer training",
      "Learning resources",
    ],
    coordinates: null,
    phone: null,
    verified: false,
    isDemo: true,
  },
  {
    id: "demo-water-01",
    name: "Sample Water Access Point",
    category: "water",
    area: "Kakuma — example only",
    description:
      "Shows how verified water access points and sanitation information could be presented.",
    servicesOffered: [
      "Water access information",
      "Sanitation guidance",
    ],
    coordinates: null,
    phone: null,
    verified: false,
    isDemo: true,
  },
  {
    id: "demo-protection-01",
    name: "Sample Protection Support Centre",
    category: "protection",
    area: "Kakuma — example only",
    description:
      "Demonstrates a directory entry for confidential protection support and referral information.",
    servicesOffered: [
      "Protection information",
      "Referral guidance",
    ],
    coordinates: null,
    phone: null,
    verified: false,
    isDemo: true,
  },
  {
    id: "demo-livelihoods-01",
    name: "Sample Digital Skills Hub",
    category: "livelihoods",
    area: "Kakuma — example only",
    description:
      "Illustrates training and employment-readiness support for young people.",
    servicesOffered: [
      "Digital skills",
      "Career readiness",
      "Entrepreneurship training",
    ],
    coordinates: null,
    phone: null,
    verified: false,
    isDemo: true,
  },
  {
    id: "demo-education-02",
    name: "Sample Youth Learning Programme",
    category: "education",
    area: "Kakuma — example only",
    description:
      "Illustrates information about youth learning programmes and educational support.",
    servicesOffered: [
      "Youth learning",
      "Mentorship",
      "Educational resources",
    ],
    coordinates: null,
    phone: null,
    verified: false,
    isDemo: true,
  },
];

export function getServiceById(id) {
  return services.find((service) => service.id === id);
}
