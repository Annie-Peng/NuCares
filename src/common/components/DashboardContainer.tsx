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
    <div className="rounded-15 lg:bg-white flex flex-col relative h-full">
      <h3 className="text-20 text-center py-20 text-white bg-primary-400 font-bold lg:text-18 lg:py-12 lg:rounded-t-15">
        {title}
      </h3>
      <div className="p-20 h-full container relative">{children}</div>
    </div>
  );
};

export default DashboardContainer;
