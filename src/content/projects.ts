import type { Project } from "@/content/types";

export const projects: readonly Project[] = [
  {
    id: "ai-document-qa-system",
    name: "AI Document Q&A System",
    description:
      "A production-style Retrieval-Augmented Generation (RAG) application for context-aware answers from uploaded documents.",
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Groq LLMs",
      "Streamlit",
      "Retrieval-Augmented Generation (RAG)",
    ],
    highlights: [
      "Developed a production-style Retrieval-Augmented Generation (RAG) application using Python, LangChain, FAISS, and Groq LLMs.",
      "Implemented multi-format document ingestion, vector-based retrieval, and semantic search to provide context-aware answers from uploaded documents.",
      "Built an interactive Streamlit interface with source attribution, confidence scoring, and document-based question answering.",
    ],
    details: {
      problem:
        "Users need context-aware answers from their own documents without manually searching through them.",
      architecture: [
        "Document ingestion",
        "Text extraction / OCR",
        "Configurable chunking",
        "Embeddings",
        "FAISS vector retrieval",
        "Context assembly",
        "Groq LLM response generation",
      ],
      capabilities: [
        "Multi-format ingestion: PDF, TXT, MD, CSV, JSON, PNG/JPG OCR, ZIP",
        "Configurable chunking",
        "Vector search and context-aware answers",
        "Source snippets / citations",
        "CLI + Streamlit interfaces",
      ],
      engineeringFocus: [
        "Retrieval quality",
        "Modular ingestion",
        "Context management",
        "Practical RAG workflow design",
      ],
    },
  },
  {
    id: "agentic-chatbot",
    name: "Agentic Chatbot",
    description:
      "An agentic chatbot supporting intelligent conversational workflows, web search, and AI-powered news summarization.",
    technologies: ["Python", "LangGraph", "LangChain", "Streamlit", "Tavily", "Groq LLMs"],
    highlights: [
      "Developed an agentic AI chatbot using LangGraph, LangChain, and Streamlit to support intelligent conversational workflows.",
      "Integrated web search capabilities and AI-powered news summarization using Tavily and Groq LLMs.",
      "Designed modular graph-based workflows to enable multi-step reasoning and dynamic task execution.",
    ],
    details: {
      problem:
        "Support intelligent conversational workflows that can search the web and summarize information.",
      architecture: [
        "User input",
        "LangGraph workflow",
        "Reasoning and search steps",
        "Tavily web search",
        "Response / summarization",
      ],
      capabilities: [
        "Agentic conversational workflow",
        "Web search",
        "AI news summarization",
        "Modular LangGraph workflow",
        "Streamlit interface",
      ],
      engineeringFocus: [
        "Graph-based agent orchestration",
        "Tool integration",
        "Modular workflow design",
      ],
    },
  },
  {
    id: "ai-india-travel-planner",
    name: "AI India Travel Planner",
    description:
      "An AI-powered travel planning assistant for personalized itineraries, hotel recommendations, and conversational trip planning.",
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "Groq LLaMA 3.3 70B",
      "Streamlit",
      "RapidAPI / travel APIs",
    ],
    highlights: [
      "Built an AI-powered travel planning assistant using LangGraph, LLMs, and real-world travel APIs.",
      "Implemented personalized itinerary generation, hotel recommendations, and conversational trip planning based on user preferences.",
      "Developed an interactive Streamlit application with memory-enabled conversations and multi-agent workflow orchestration.",
    ],
    details: {
      problem:
        "Help users plan personalized trips with destination exploration, itineraries, and hotel recommendations.",
      architecture: [
        "User preferences",
        "LangGraph / LangChain workflow",
        "LLM reasoning",
        "Travel APIs",
        "Personalized itinerary",
      ],
      capabilities: [
        "Personalized itineraries",
        "Destination exploration",
        "Hotel recommendations",
        "Conversational trip planning",
        "User preference / memory support",
        "Travel API integration",
      ],
      engineeringFocus: [
        "Agentic workflow orchestration",
        "API integration",
        "Personalized context / memory",
      ],
    },
  },
  {
    id: "ai-email-agent",
    name: "AI Email Agent",
    description:
      "An AI-powered email assistant that generates and refines professional email responses.",
    technologies: ["Python", "Large Language Models", "Prompt Engineering", "Workflow Automation"],
    highlights: [
      "Developed an AI-powered email assistant using Large Language Models (LLMs) to generate professional email responses.",
      "Implemented prompt engineering and workflow automation for personalized email drafting and refinement.",
      "Improved productivity by automating repetitive email composition and communication tasks.",
    ],
    details: {
      problem: "Help users draft and refine professional email responses efficiently.",
      architecture: [
        "User input",
        "Prompt / workflow processing",
        "Large Language Model",
        "Draft / refined professional response",
      ],
      capabilities: [
        "Professional email drafting",
        "Email refinement",
        "Prompt engineering",
        "LLM-powered workflow automation",
      ],
      engineeringFocus: [
        "Prompt design",
        "LLM workflow integration",
        "Reliable response refinement",
      ],
    },
  },
];
