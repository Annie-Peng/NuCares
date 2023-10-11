const DashboardOuterContainer = ({ title, children }) => {
  return (
    <div className="rounded-15 bg-red-300 mt-18 flex flex-col relative">
      <h3 className="rounded-t-15 text-center py-8 bg-primary-500 text-18 font-bold">
        {title}
      </h3>
      <div className="p-20">{children}</div>
    </div>
  );
};

export default DashboardOuterContainer;
