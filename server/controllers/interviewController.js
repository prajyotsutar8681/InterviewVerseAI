import { askGemini } from "../services/gemini.js";

export const generateInterviewQuestions = async (req, res) => {
  try {
    const { config } = req.body;

    const prompt = `
You are an expert interviewer.

Generate ${config.questions} interview questions.

Interview Type: ${config.type}

Company: ${config.company}

Difficulty: ${config.difficulty}

Return ONLY valid JSON.

[
  {
    "id": 1,
    "question": "Tell me about yourself."
  }
]

Rules:
- Return ONLY JSON
- No markdown
- No explanations
`;

    const text = await askGemini(prompt);

    res.json(JSON.parse(text));

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const evaluateInterview = async (req, res) => {
  try {
    const { questions, answers } = req.body;

    const interviewData = questions
      .map(
        (q, index) => `
Question ${index + 1}

${q.question}

Answer

${answers[index] || "No Answer"}
`
      )
      .join("\n");

    const prompt = `
You are an expert technical interviewer.

Evaluate this interview.

${interviewData}

Return ONLY valid JSON.

{
  "overallScore":90,
  "communication":92,
  "technicalKnowledge":88,
  "confidence":91,
  "strengths":["...","...","..."],
  "improvements":["...","...","..."],
  "summary":"..."
}

Rules:
- Return ONLY JSON
- No markdown
- No explanations
`;

    const text = await askGemini(prompt);

    res.json(JSON.parse(text));

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};