import { ReactNode } from "react";

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-10 lg:grid lg:grid-cols-4 lg:place-items-center lg:gap-10 ">
      {children}
    </div>
  );
};

export default CardContainer;
