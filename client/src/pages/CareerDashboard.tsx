import DashboardLayout from "@/components/layout/DashboardLayout";

import CareerScore from "@/components/dashboard/CareerScore";
import CareerTips from "@/components/dashboard/CareerTips";

const CareerDashboard = () => {

  const resumeScore = 88;

  const interviewScore = 84;

  const codingScore = 91;

  const overall = Math.round(
    (resumeScore + interviewScore + codingScore) / 3
  );

  return (

    <DashboardLayout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            Career Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Your complete AI career overview.
          </p>

        </div>

       <CareerScore
  score={{
    resume: resumeScore,
    interview: interviewScore,
    coding: codingScore,
    overall: Math.round(
      (resumeScore + interviewScore + codingScore) / 3
    ),
  }}
/>
        <CareerTips score={overall} />

      </div>

    </DashboardLayout>

  );

};

export default CareerDashboard;
