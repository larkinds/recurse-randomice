import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({
  onClose,
  isOpen,
  children,
  className,
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
    <dialog ref={modalRef} className={className}>
      <button onClick={onClose}>Close</button>
      {children}
    </dialog>
  );
}
