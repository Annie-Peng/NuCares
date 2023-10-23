import { ReactNode } from "react";

interface DashboardOuterContainerProps {
  title: string;
  children: ReactNode;
}

const DashboardContainer: React.FC<DashboardOuterContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div className="rounded-15 bg-red-300 flex flex-col relative h-full">
      <h3 className="rounded-t-15 text-center py-8 bg-primary-500 text-18 font-bold">
        {title}
      </h3>
      <div className="p-20 h-full">{children}</div>
    </div>
  );
};

export default DashboardContainer;