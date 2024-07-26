import { useState } from "react";

export const useModal = (): [boolean, () => void] => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log(isOpenModal);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return [isOpenModal, toggleModal];
};
