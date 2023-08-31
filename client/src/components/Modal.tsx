import { useEffect, useRef } from "react";

export default function Modal({ onClose, isOpen, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const { current: el } = modalRef;
    if (isOpen) {
      el.showModal();
    } else {
      el.close();
    }
  }, [isOpen]);
  return (
    <dialog ref={modalRef}>
      <button onClick={onClose}>Close</button>
      {children}
    </dialog>
  );
}
