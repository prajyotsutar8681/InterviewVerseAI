import { askGemini } from "../services/gemini.js";

export const analyzeResume = async (req, res) => {
  try {
    const { resumeText, jobDescription } = req.body;

    if (!resumeText || resumeText.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Resume text is required.",
      });
    }

    const hasJobDescription =
      jobDescription && jobDescription.trim().length > 0;

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

Return ONLY JSON.
Do not include markdown.
Do not wrap the response inside \`\`\`.

Resume:

${resumeText}
`;

    const text = await askGemini(prompt);

    let result;

    try {
      result = JSON.parse(text);
    } catch {
      return res.status(500).json({
        success: false,
        message:
          "AI returned an unexpected response. Please try again.",
      });
    }

    return res.status(200).json(result);
  } catch (err) {
    console.error("Resume Analyzer Error:", err);

    // Gemini busy
    if (err.status === 503) {
      return res.status(503).json({
        success: false,
        message:
          "AI service is currently experiencing high demand. Please try again in a few minutes.",
      });
    }

    // Quota exceeded
    if (err.status === 429) {
      return res.status(429).json({
        success: false,
        message:
          "Daily AI quota exceeded. Please try again later.",
      });
    }

    // Invalid API key
    if (err.status === 401) {
      return res.status(401).json({
        success: false,
        message:
          "Invalid Gemini API key.",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while analyzing your resume.",
    });
  }
};