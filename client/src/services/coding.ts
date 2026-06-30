export interface CodingQuestion {
  title: string;
  company: string;
  difficulty: string;

  description: string;

  input: string;

  output: string;

  explanation: string;

  constraints: string[];

  hints: string[];

  expectedComplexity: string;
}

export interface CodeReview {
  overallScore: number;

  correctness: string;

  logic: string;

  timeComplexity: string;

  spaceComplexity: string;

  bugs: string[];

  edgeCases: string[];

  improvements: string[];

  optimalSolution: string;

  summary: string;
}

/* ==========================================================
   Generate Coding Question
========================================================== */

export const generateCodingQuestion = async (
  company: string,
  difficulty: string,
  language: string,
  round: number
): Promise<CodingQuestion> => {

  const response = await fetch(
    "http://localhost:5000/api/ai/coding/question",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        company,
        difficulty,
        language,
        round,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate coding interview.");
  }

  return response.json();
};

/* ==========================================================
   AI Code Review
========================================================== */

export const reviewCode = async (
  question: string,
  code: string,
  language: string
): Promise<CodeReview> => {

  const response = await fetch(
    "http://localhost:5000/api/ai/coding/review",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        question,
        code,
        language,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to review code.");
  }

  return response.json();
};