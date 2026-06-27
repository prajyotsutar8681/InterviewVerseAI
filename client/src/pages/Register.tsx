import AuthLayout from "@/components/common/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Start your AI-powered interview preparation journey."
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;