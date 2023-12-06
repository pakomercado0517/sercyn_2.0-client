import { useState } from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  // Modal styles
  const customStyles = {
    content: {
      top: "2%",
      left: "18%",
      right: "18%",
      bottom: "10%",
      transform: "translate(3%, 3%)",
      borderRadius: "20px",
    },
  };
  return { handleOpenModal, handleCloseModal, isOpen, customStyles };
}
