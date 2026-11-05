import type { Project } from "@/content/types";

export const projects: readonly Project[] = [
  {
    id: "ai-document-qa-system",
    name: "AI Document Q&A System",
    description:
      "A document-based Retrieval-Augmented Generation (RAG) application for context-aware question answering using uploaded documents.",
    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Groq LLMs",
      "Streamlit",
      "Retrieval-Augmented Generation (RAG)",
    ],
    highlights: [
      "Developed a document-based Retrieval-Augmented Generation (RAG) application using Python, LangChain, FAISS, and Groq LLMs.",
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
    name: "AI Email Agent (Prototype)",
    description:
      "A prototype human-in-the-loop email agent. Its email tools are mocked, so it does not read or send real emails.",
    technologies: ["Python", "LangChain", "LangGraph", "Ollama (Llama 3.1)", "Streamlit"],
    highlights: [
      "Built a prototype agent using LangChain's agent API and a local Llama 3.1 model through Ollama, with mocked read-email and send-email tools that do not access or send real emails.",
      "Added human-in-the-loop approval: the agent pauses before any send action so the user can approve, reject or edit it in a Streamlit interface.",
      "Used a LangGraph in-memory checkpointer so the agent resumes after each approval decision.",
    ],
    details: {
      problem: "Explore how an AI agent can be kept under human control before it takes an action such as sending an email.",
      architecture: [
        "User request",
        "LangChain agent (Llama 3.1 via Ollama)",
        "Approval interrupt: approve, reject or edit",
        "Mocked email tool (no real email)",
      ],
      capabilities: [
        "Human-in-the-loop approval",
        "Approve, reject or edit actions",
        "Agent resume after each decision",
        "Mocked email tools (prototype only)",
      ],
      engineeringFocus: [
        "Agent interrupt and resume",
        "Human oversight of agent actions",
        "Local LLM integration",
      ],
    },
  },
];
