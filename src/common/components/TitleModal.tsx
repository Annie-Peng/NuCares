import Image from "next/image";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/features/showModal";
import useResize from "../hooks/useResize";

interface TitleModalProps {
  title: string;
  children: ReactNode;
  modal: string;
}

const TitleModal: React.FC<TitleModalProps> = ({ title, children, modal }) => {
  const dispatch = useDispatch();
  const isMobile = useResize();
  return (
    <div className="cusModalBg z-20">
      <div className="cusModal">
        <div className="w-[278px] max-h-[320px] overflow-y-scroll lg:max-h-[850px] lg:w-[720px]">
          <h4 className="cusPrimaryTitle">{title}</h4>
          {children}
          <button
            className="absolute -top-[15px] -right-[15px] lg:-top-[25px] lg:-right-[25px]"
            onClick={() => dispatch(closeModal(modal))}
          >
            <Image
              src="/images/dashboard/cross-btn.svg"
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

export default TitleModal;
