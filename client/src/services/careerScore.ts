import { supabase } from "@/config/supabase";

export interface CareerScore {
  resume: number;
  interview: number;
  coding: number;
  overall: number;
}

const average = (values: number[]) => {
  if (!values.length) return 0;

  return Math.round(
    values.reduce((a, b) => a + b, 0) / values.length
  );
};

export const getCareerScore = async (): Promise<CareerScore> => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      resume: 0,
      interview: 0,
      coding: 0,
      overall: 0,
    };
  }

  const { data: resumeData } = await supabase
    .from("resume_history")
    .select("ats_score")
    .eq("user_id", user.id);

  const { data: interviewData } = await supabase
    .from("interview_history")
    .select("overall_score")
    .eq("user_id", user.id);

  const { data: codingData } = await supabase
    .from("coding_history")
    .select("final_score")
    .eq("user_id", user.id);

  const resume = average(
    resumeData?.map((x) => x.ats_score) ?? []
  );

  const interview = average(
    interviewData?.map((x) => x.overall_score) ?? []
  );

  const coding = average(
    codingData?.map((x) => x.final_score) ?? []
  );

  const overall = average([
    resume,
    interview,
    coding,
  ]);

  return {
    resume,
    interview,
    coding,
    overall,
  };
};