import style from "./index.module.css";

interface SwitchProps {
  id: string;
  isChecked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ id, isChecked, onChange }: SwitchProps) => {
  return (
    <label htmlFor={id} className={style.switch}>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={isChecked}
        className={style.checkbox}
        onChange={onChange}
      />
      <span className={style.slider}></span>
    </label>
  );
};

export default Switch;
