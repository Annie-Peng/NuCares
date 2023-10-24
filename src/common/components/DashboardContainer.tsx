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
    <div className="rounded-15 bg-white flex flex-col relative h-full">
      <h3 className="text-20 rounded-t-15 text-center py-20 text-white bg-primary-400 font-bold lg:text-18 lg:py-12">
        {title}
      </h3>
      <div className="p-20 h-full">{children}</div>
    </div>
  );
};

export default DashboardContainer;
