import Image from "next/legacy/image";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/showModal";
import useResize from "../../hooks/useResize";

interface MiniModalProps {
  children: ReactNode;
  modal: string;
}

const MiniModal: React.FC<MiniModalProps> = ({ children, modal }) => {
  const dispatch = useDispatch();
  const isMobile = useResize();

  return (
    <div className="cusModalBg z-30">
      <div className="cusModal p-32">
        <div className="w-[278px] max-h-[320px] overflow-y-scroll lg:w-[756px] no-scrollbar text-center">
          {children}
          <button
            className="absolute -top-[15px] -right-[15px] lg:-top-[25px] lg:-right-[25px]"
            onClick={() => dispatch(closeModal(modal))}
          >
            <Image
              src="/images/dashboard/cross-btn.svg"
              layout="fixed"
              width={isMobile ? 30 : 50}
              height={isMobile ? 30 : 50}
              alt="close"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniModal;
