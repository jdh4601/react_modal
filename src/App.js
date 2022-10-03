import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css';
import Modal from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <div className="App">
      <h1>Click modal button</h1>
      <div className="buttons d-grid gap-2">
        <Button
          variant="primary"
          className="modalBtn"
          size="lg"
          onClick={openModalHandler}
        >
          Modal
        </Button>
      </div>
      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
}

export default App;
