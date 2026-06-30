import { askGemini } from "../services/gemini.js";

export const generateCodingQuestion = async (req, res) => {
  try {
    const { company, difficulty, language, round } = req.body;

    let topic = "";

    switch (company) {
      case "Google":
        topic =
          round === 1
            ? "Arrays and Strings"
            : round === 2
            ? "Trees and Graphs"
            : "Dynamic Programming";
        break;

      case "Amazon":
        topic =
          round === 1
            ? "Hash Maps"
            : round === 2
            ? "Graphs"
            : "System Design Basics";
        break;

      case "Microsoft":
        topic =
          round === 1
            ? "Strings"
            : round === 2
            ? "Binary Trees"
            : "Recursion";
        break;

      case "Meta":
        topic =
          round === 1
            ? "Arrays"
            : round === 2
            ? "Backtracking"
            : "Graphs";
        break;

      default:
        topic =
          round === 1
            ? "Arrays"
            : round === 2
            ? "Trees"
            : "Dynamic Programming";
    }

    const prompt = `
You are a Senior ${company} Interviewer.

Generate ONE realistic coding interview question.

Round:
${round}

Topic:
${topic}

Difficulty:
${difficulty}

Programming Language:
${language}

Return ONLY JSON.

{
"title":"",
"company":"${company}",
"difficulty":"${difficulty}",
"description":"",
"input":"",
"output":"",
"explanation":"",
"constraints":["","",""],
"hints":["","",""],
"expectedComplexity":"O(n)"
}
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

export const reviewCode = async (req, res) => {
  try {
    const { question, code, language } = req.body;

    const prompt = `
You are a Senior Software Engineer.

Question:

${question}

Language:

${language}

Candidate Code:

${code}

Return ONLY JSON.

{
"overallScore":90,
"correctness":"",
"logic":"",
"timeComplexity":"O(n)",
"spaceComplexity":"O(1)",
"bugs":[""],
"edgeCases":[""],
"improvements":[""],
"optimalSolution":"",
"summary":""
}
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