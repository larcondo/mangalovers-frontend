import style from "./index.module.css";

interface SuccessPopupProps {
  message: string;
  onClose: () => void;
}

const SuccessPopup = ({ message, onClose }: SuccessPopupProps) => {
  if (!message) return null;

  return (
    <div className={style.successPopup}>
      <span className={style.message}>{message}</span>
      <button type="button" onClick={onClose} className={style.closeButton}>
        X
      </button>
    </div>
  );
};

export default SuccessPopup;
