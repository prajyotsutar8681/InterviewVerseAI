import { supabase } from "@/config/supabase";
import type {
  InterviewConfig,
  InterviewEvaluation,
} from "./gemini";

export const saveInterview = async (
  config: InterviewConfig,
  result: InterviewEvaluation
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) throw new Error("User not found");

  const { error } = await supabase
    .from("interview_history")
    .insert({
      user_id: user.id,
      interview_type: config.type,
      company: config.company,
      difficulty: config.difficulty,
      overall_score: result.overallScore,
      communication: result.communication,
      technical_knowledge: result.technicalKnowledge,
      confidence: result.confidence,
      summary: result.summary,
      strengths: result.strengths,
      improvements: result.improvements,
    });

  if (error) throw error;
};

export const getInterviewHistory = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("interview_history")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
};