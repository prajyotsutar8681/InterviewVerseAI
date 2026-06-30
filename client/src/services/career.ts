export interface CareerRoadmap {
  readinessScore: number;

  missingSkills: string[];

  roadmap: string[];

  projects: string[];

  resources: string[];

  interviewTips: string[];

  summary: string;
}

export const generateCareerRoadmap = async (
  company: string,
  role: string,
  level: string,
  resume?: string
): Promise<CareerRoadmap> => {

  const response = await fetch(
    "http://localhost:5000/api/ai/career/roadmap",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        targetRole: role,
        currentSkills: resume ?? "Not Provided",
        experience: level,
        timeline: company,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate career roadmap.");
  }

  return response.json();
};