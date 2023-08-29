import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const { current: el } = modalRef;
    if (open) {
      el.showModal();
    } else {
      el.close();
    }
  }, [open]);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Test button</button>
      <dialog ref={modalRef}>
        <button onClick={() => setOpen(false)}>Close</button>
        <div>test</div>
      </dialog>
    </div>
  );
}

export default App;
