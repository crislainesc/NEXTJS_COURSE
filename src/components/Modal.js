import React from 'react';

function Modal({ onConfirm, onCancel }) {
	return (
		<div className='modal'>
			<p>Are you sure?</p>
			<button className='btn btn--alt' onClick={onConfirm}>Confirm</button>
			<button className='btn' onClick={onCancel}>Cancel</button>
		</div>
	);
}

export default Modal;
