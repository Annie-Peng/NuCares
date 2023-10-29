import { ReactNode } from "react";

interface MiniModalProps {
  children: ReactNode;
}

const MiniModal: React.FC<MiniModalProps> = ({ children }) => {
  return (
    <div className="cusModalBg">
      <div className="cusModal py-32 min-h-[300px]">{children}</div>
    </div>
  );
};

export default MiniModal;
