import { closeModal } from "@/common/redux/features/showModal";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

interface TimerModalProps {
  modal: string;
  data: {
    message: string;
    timer: number;
  };
}
const TimerModal: FC<TimerModalProps> = ({ data, modal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(closeModal(modal));
    }, data.timer);
  });

  return (
    <div className="cusModalBg z-20">
      <div className="cusModal p-32">
        <div className="w-[278px] max-h-[320px] overflow-y-scroll lg:w-[756px] text-center no-scrollbar">
          {data.message}
        </div>
      </div>
    </div>
  );
};

export default TimerModal;
