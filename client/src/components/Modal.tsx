import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  containerClassNames?: string;
  buttonClassNames?: string;
};

export default function Modal({
  onClose,
  isOpen,
  containerClassNames,
  buttonClassNames,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const { current: el } = modalRef;

    if (!el) return;

    if (isOpen) {
      el.showModal();
    } else {
      el.close();
    }
  }, [isOpen]);
  return (
    <dialog ref={modalRef} className={containerClassNames}>
      <button onClick={onClose} className={buttonClassNames}>
        X
      </button>
      {children}
    </dialog>
  );
}
