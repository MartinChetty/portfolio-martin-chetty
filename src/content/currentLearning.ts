import type { LearningArea } from "@/content/types";

export const currentLearning: readonly LearningArea[] = [
  {
    id: "linux-administration",
    label: "Linux Administration",
    focus:
      "Linux fundamentals, administration, shell, permissions, processes, services, and system management.",
    featured: true,
  },
  {
    id: "docker",
    label: "Docker",
    focus:
      "Containers, images, Dockerfiles, networking, volumes, and containerized application workflows.",
  },
  {
    id: "aws",
    label: "AWS",
    focus: "Cloud fundamentals, core AWS services, deployment, and cloud infrastructure.",
  },
  {
    id: "fastapi",
    label: "FastAPI",
    focus: "Building Python APIs and backend services.",
  },
  {
    id: "devops",
    label: "DevOps",
    focus: "CI/CD, automation, infrastructure workflows, and deployment practices.",
  },
  {
    id: "network-automation",
    label: "Network Automation",
    focus: "Python-based network automation, APIs, Cisco platforms, and infrastructure automation.",
    featured: true,
  },
];
