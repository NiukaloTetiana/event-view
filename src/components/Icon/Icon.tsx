import Icons from "../../assets/sprite.svg";

export const Icon = ({ id, size, className }) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};
