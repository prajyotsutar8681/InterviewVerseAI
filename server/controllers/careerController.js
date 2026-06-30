import { askGemini } from "../services/gemini.js";

export const generateCareerRoadmap = async (req, res) => {
  try {
    const {
      targetRole,
      currentSkills,
      experience,
      timeline,
    } = req.body;

    const prompt = `
You are a Senior Career Coach.

Generate a personalized career roadmap.

Target Role:
${targetRole}

Current Skills:
${currentSkills}

Experience:
${experience}

Timeline:
${timeline}

Return ONLY valid JSON.

{
  "readinessScore":82,
  "missingSkills":[
    "",
    "",
    ""
  ],
  "roadmap":[
    "",
    "",
    ""
  ],
  "projects":[
    "",
    "",
    ""
  ],
  "resources":[
    "",
    "",
    ""
  ],
  "interviewTips":[
    "",
    "",
    ""
  ],
  "summary":""
}

IMPORTANT:
Return EXACTLY these keys.
Do NOT return overview.
Do NOT return learningPath.
Do NOT return tips.
Do NOT return certifications.
Return ONLY JSON.
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