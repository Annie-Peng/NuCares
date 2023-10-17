import { ReactNode } from "react";

interface NormalModalProps {
  title: string;
  children: ReactNode;
}
const NormalModal: React.FC<NormalModalProps> = ({ title, children }) => {
  return (
    <div className="cusModalBg">
      <div className="cusModal min-h-[693px]">
        <h4 className="text-20 font-bold text-center">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default NormalModal;
