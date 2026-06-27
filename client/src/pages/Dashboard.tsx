import DashboardLayout from "@/components/layout/DashboardLayout";

import WelcomeCard from "@/components/dashboard/WelcomeCard";
import QuickActions from "@/components/dashboard/QuickActions";
import ProgressCards from "@/components/dashboard/ProgressCard";
import RecentActivity from "@/components/dashboard/RecentActivity";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        <WelcomeCard />

        <QuickActions />

        <ProgressCards />

        <RecentActivity />

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;