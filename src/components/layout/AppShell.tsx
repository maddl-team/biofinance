"use client";

import { usePathname } from "next/navigation";

interface AppShellProps {
  children: React.ReactNode;
}

const AppShell: React.FC<AppShellProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div
      className={`min-h-screen flex flex-col font-sans text-neutral-dark ${
        isHomePage ? "bg-white" : "bg-neutral-bg"
      }`}
    >
      {children}
    </div>
  );
};

export default AppShell;
