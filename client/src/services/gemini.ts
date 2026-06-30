import { API_URL } from "@/config/api";


/* ==========================================================
   Interfaces
========================================================== */

export interface InterviewConfig {
  type: string;
  company: string;
  difficulty: string;
  questions: number;
}

export interface InterviewQuestion {
  id: number;
  question: string;
}

export interface InterviewEvaluation {
  overallScore: number;
  communication: number;
  technicalKnowledge: number;
  confidence: number;
  strengths: string[];
  improvements: string[];
  summary: string;
}

export interface ResumeAnalysis {
  atsScore: number;
  jobMatch: number | null;
  strengths: string[];
  weaknesses: string[];
  missingKeywords: string[];
  missingSkills: string[];
  suggestions: string[];
  interviewTips: string[];
  summary: string;
}

/* ==========================================================
   Generate Interview Questions
========================================================== */

export const generateInterviewQuestions = async (
  config: InterviewConfig
): Promise<InterviewQuestion[]> => {
  const response = await fetch(
    `${API_URL}/api/ai/interview/questions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        config,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate interview.");
  }

  return response.json();
};

/* ==========================================================
   Evaluate Interview
========================================================== */

export const evaluateInterview = async (
  questions: InterviewQuestion[],
  answers: string[]
): Promise<InterviewEvaluation> => {
  const response = await fetch(
    `${API_URL}/api/ai/interview/evaluate`
    ,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questions,
        answers,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Interview evaluation failed.");
  }

  return response.json();
};

/* ==========================================================
   Resume Analyzer
========================================================== */

export const analyzeResume = async (
  resumeText: string,
  jobDescription?: string
): Promise<ResumeAnalysis> => {
  const response = await fetch(
    `${API_URL}/api/ai/resume`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        resumeText,
        jobDescription,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Resume analysis failed.");
  }

  return response.json();
};