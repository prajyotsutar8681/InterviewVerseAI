import { supabase } from "@/config/supabase";
import type { ResumeAnalysis } from "./gemini";

export const saveResumeAnalysis = async (
  fileName: string,
  analysis: ResumeAnalysis
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not logged in.");
  }

  const { error } = await supabase
    .from("resume_history")
    .insert({
      user_id: user.id,

      file_name: fileName,

      ats_score: analysis.atsScore,

      job_match: analysis.jobMatch,

      strengths: analysis.strengths,

      weaknesses: analysis.weaknesses,

      missing_keywords: analysis.missingKeywords,

      missing_skills: analysis.missingSkills,

      suggestions: analysis.suggestions,

      interview_tips: analysis.interviewTips,

      summary: analysis.summary,
    });

  if (error) throw error;
};

export const getResumeHistory = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("resume_history")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
};