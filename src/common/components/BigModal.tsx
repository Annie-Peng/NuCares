import { ReactNode } from "react";

interface BigModalProps {
  title: string;
  children: ReactNode;
}

const BigModal: React.FC<BigModalProps> = ({ title, children }) => {
  return (
    <div className="cusModalBg">
      <div className="cusModal min-h-[820px]">
        <h4 className="text-20 font-bold text-center">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default BigModal;
