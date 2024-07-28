import { useState } from "react";

export const useModal = (): [boolean, () => void] => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return [isOpenModal, toggleModal];
};
