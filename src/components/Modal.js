import React from 'react';
import './Modal.css';
import Button from 'react-bootstrap/Button';

const Modal = ({ closeModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="exit" onClick={() => closeModal(false)}>
          {' '}
          X{' '}
        </button>
        <div className="title">
          <h1>Do you want to continue?</h1>
        </div>
        <div className="body">
          <p>Time is limited. You should move to next page!</p>
        </div>
        <div className="footer">
          <Button
            variant="secondary"
            onClick={() => closeModal(false)}
            className="cancel"
          >
            Cancel
          </Button>
          <Button className="continue" variant="primary">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
