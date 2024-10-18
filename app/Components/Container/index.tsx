import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen h-full bg-zinc-600 pt-[50px] lg:pt-[100px]">
      {children}
    </div>
  );
};

export default Container;
