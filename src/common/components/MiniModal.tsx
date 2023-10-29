import { ReactNode } from "react";

interface MiniModalProps {
  children: ReactNode;
}

const MiniModal: React.FC<MiniModalProps> = ({ children }) => {
  return (
    <div className="cusModalBg">
      <div className="cusModal min-h-[200px]">{children}</div>
    </div>
  );
};

export default MiniModal;
