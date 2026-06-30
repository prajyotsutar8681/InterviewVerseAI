import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import DashboardLayout from "@/components/layout/DashboardLayout";

import WelcomeCard from "@/components/dashboard/WelcomeCard";
import QuickActions from "@/components/dashboard/QuickActions";
import ProgressCards from "@/components/dashboard/ProgressCard";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecentInterviews from "@/components/dashboard/RecentInterviews";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import StatsCards from "@/components/dashboard/StatsCards";

import { getInterviewHistory } from "@/services/interview";

import {
  getCareerScore,
  type CareerScore,
} from "@/services/careerScore";

const Dashboard = () => {
  const [history, setHistory] = useState<any[]>([]);
  const [careerScore, setCareerScore] =
    useState<CareerScore | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const interviewHistory =
          await getInterviewHistory();

        setHistory(interviewHistory);

        const score =
          await getCareerScore();

        setCareerScore(score);

      } catch (error) {
        console.error(
          "Dashboard Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return (
    <DashboardLayout>

      <motion.div
        initial={{
          opacity: 0,
          y: 25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="space-y-8"
      >

        <WelcomeCard />

        {careerScore && (

          <StatsCards
            resume={careerScore.resume}
            interview={careerScore.interview}
            coding={careerScore.coding}
            overall={careerScore.overall}
          />

        )}

        <PerformanceChart
          data={history}
        />

        <QuickActions />

        <ProgressCards />

        <RecentInterviews
          interviews={history.slice(0, 5)}
        />

        <RecentActivity />

        {loading && (

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center text-zinc-400">

            Loading dashboard...

          </div>

        )}

      </motion.div>

    </DashboardLayout>
  );
};

export default Dashboard;