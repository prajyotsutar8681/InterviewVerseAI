import { askGemini } from "../services/gemini.js";

export const analyzeResume = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    const hasJobDescription =
      jobDescription &&
      jobDescription.trim().length > 0;

    const prompt = `
You are an ATS Resume Expert and Career Coach.

Analyze the following resume.

${
  hasJobDescription
    ? `
Also compare the resume with this Job Description:

${jobDescription}
`
    : `
No Job Description is provided.

Perform a general ATS resume analysis only.
`
}

Return ONLY valid JSON in the following format:

{
  "atsScore":87,
  "jobMatch":82,
  "strengths":["...","...","..."],
  "weaknesses":["...","...","..."],
  "missingKeywords":["...","...","..."],
  "missingSkills":["...","...","..."],
  "suggestions":["...","...","..."],
  "interviewTips":["...","...","..."],
  "summary":"..."
}

IMPORTANT:

If NO Job Description is provided:

- Set "jobMatch" to null
- Return [] for "missingSkills"
- Return [] for "interviewTips"

Resume:

${resumeText}
`;

    const text = await askGemini(prompt);

    res.json(JSON.parse(text));

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
};