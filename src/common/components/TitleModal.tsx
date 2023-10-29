import Image from "next/image";
import { ReactNode } from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/features/showModal";

interface TitleModalProps {
  title: string;
  children: ReactNode;
  width: string;
  modal: string;
}

const TitleModal: React.FC<TitleModalProps> = ({
  title,
  children,
  width,
  modal,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="cusModalBg z-10">
      <div className={`cusModal w-[${width}]`}>
        <h4 className="cusPrimaryTitle">{title}</h4>
        {children}
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
    </div>
  );
};

export default TitleModal;
