import Image from "next/image";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/features/showModal";

interface MiniModalProps {
  children: ReactNode;
  modal: string;
}

const MiniModal: React.FC<MiniModalProps> = ({ children, modal }) => {
  const dispatch = useDispatch();

  return (
    <div className="cusModalBg z-10">
      <div className="cusModal py-32 min-h-[300px]">{children}</div>
      <button
        className="absolute -top-[25px] -right-[25px]"
        onClick={() => dispatch(closeModal(modal))}
      >
        <Image
          src="/images/dashboard/cross-btn.svg"
          width={50}
          height={50}
          alt="close"
        />
      </button>
    </div>
  );
};

export default MiniModal;
