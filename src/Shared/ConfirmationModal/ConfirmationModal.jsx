import React from 'react';

const ConfirmationModal = ({ title, message, closeModal, modaldata, deleteproducts, successbutton }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}!</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => deleteproducts(modaldata)} htmlFor="confirmation-modal" className="btn btn-primary">{successbutton}</label>
                        <button className='btn btn-accent' onClick={closeModal}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;