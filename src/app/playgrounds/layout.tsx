import React, { ReactNode } from "react";
import MyComponent from "@/app/playgrounds/useRef";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400">
      <div className="container py-10">
        <MyComponent />
        {children}
      </div>
    </main>
  );
};

export default Layout;
