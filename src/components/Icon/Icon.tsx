import Icons from "../../assets/sprite.svg";

interface IconProps {
  id: string;
  size: string;
  className: string;
}

export const Icon = ({ id, size, className }: IconProps) => {
  return (
    <svg width={size} height={size} className={className}>
      <use href={Icons + "#icon-" + id}></use>
    </svg>
  );
};
