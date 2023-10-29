import { ReactNode } from "react";

interface TitleModalProps {
  title: string;
  children: ReactNode;
  width: string;
}

const TitleModal: React.FC<TitleModalProps> = ({ title, children, width }) => {
  return (
    <div className="cusModalBg">
      <div className={`cusModal w-[${width}]`}>
        <h4 className="cusPrimaryTitle">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default TitleModal;
