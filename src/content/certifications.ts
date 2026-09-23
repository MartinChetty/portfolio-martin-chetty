import type { Certification } from "@/content/types";

export const certifications: readonly Certification[] = [
  {
    id: "ccna",
    name: "Cisco Certified Network Associate (CCNA)",
    provider: "Cisco",
    category: "Networking",
    featured: true,
    credentialUrl:
      "https://www.credly.com/badges/091fcb28-fcd2-4ad4-81e6-d3eb958d3724/linked_in_profile",
  },
  {
    id: "cisco-ai-technical-practitioner",
    name: "Cisco AI Technical Practitioner (AITECH)",
    provider: "Cisco",
    category: "AI",
    credentialUrl:
      "https://www.credly.com/badges/61b31f25-0b78-4df4-b9d3-8684d3c1c0ac/linked_in_profile",
  },
  {
    id: "agentic-ai-bootcamp",
    name: "Complete Agentic AI Bootcamp with LangGraph and LangChain",
    provider: "Udemy",
    category: "AI / Generative AI",
    credentialUrl: "https://www.udemy.com/certificate/UC-0a45c254-f013-46cb-a42a-f3944bb827d4/",
  },
  {
    id: "generative-ai-with-large-language-models",
    name: "Generative AI with Large Language Models",
    provider: "Coursera",
    issuedBy: ["AWS", "DeepLearning.AI"],
    category: "Generative AI",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/6XUQLFH9AYKU",
  },
  {
    id: "software-automation-testing-program",
    name: "Software Automation Testing Program",
    provider: "Simplilearn",
    issuedBy: ["Cisco"],
    note: "Cisco Sponsored",
    category: "Software Automation / Testing",
    credentialUrl: "https://drive.google.com/file/d/1Kxy8KMyBQi8a3uasxnh7XiM778ob-s3t/view?pli=1",
  },
  {
    id: "full-stack-web-development",
    name: "Full Stack Web Development",
    provider: "Tap Academy",
    category: "Software Development",
    credentialUrl: "https://drive.google.com/file/d/1XtSgXulIlfB6IwhPgAXlhVaKW1qVQ_VG/view",
  },
  {
    id: "oci-ai-foundations-associate",
    name: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate",
    provider: "Oracle Cloud Infrastructure",
    category: "Cloud / AI",
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=C726BD9C67ED743668FF27C94D5239532967DFD3AEBA43EF6663144FCBF19264",
  },
];
