import { Modal } from "../../components";
import styles from "./cart.module.css";
import ItemList from "../../components/ItemList";

export type CartProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Cart({ isOpen, onClose }: CartProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      containerClassNames={styles.modal}
      buttonClassNames={styles.modalCloseBtn}
    >
      {/* Currently getting data from a constant but will eventually either need to make this dynamic */}
      <ItemList />
    </Modal>
  );
}
