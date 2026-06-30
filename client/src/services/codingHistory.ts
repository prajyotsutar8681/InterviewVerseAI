import { supabase } from "@/config/supabase";

export const saveCodingInterview = async (
  company: string,
  difficulty: string,
  language: string,
  finalScore: number,
  roundScores: number[],
  recommendation: string
) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { error } = await supabase
    .from("coding_history")
    .insert({
      user_id: user.id,
      company,
      difficulty,
      language,
      final_score: finalScore,
      round_scores: roundScores,
      recommendation,
    });

  if (error) {
    throw error;
  }
};

export const getCodingHistory = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("coding_history")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", {
      ascending: false,
    });

  if (error) throw error;

  return data;
};