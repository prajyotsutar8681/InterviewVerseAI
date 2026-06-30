import type { ButtonHTMLAttributes } from "react";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const PrimaryButton = ({
  children,
  className = "",
  ...props
}: Props) => {
  return (
    <button
      {...props}
      className={`rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;