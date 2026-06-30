
export const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";
console.log("VITE_API_URL =", import.meta.env.VITE_API_URL);
console.log("API_URL =", API_URL);
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
    `${API_URL}/api/ai/career/roadmap`,   // ✅ FIXED
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