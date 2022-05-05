import React, { useState } from 'react';

import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo({ id, text, onDeleteHandler }) {
	const [showModal, setShowModal] = useState(false);

	function openModalHandler() {
		setShowModal(true);
	}

	function closeModalHandler() {
		setShowModal(false);
	}

	function deleteHandler() {
		onDeleteHandler(id);
		setShowModal(false);
	}

	return (
		<div className='card' key={id}>
			<h2>{text}</h2>
			<div className='actions'>
				<button className='btn' onClick={openModalHandler}>
					Delete
				</button>
			</div>
			{showModal && (
				<Modal onConfirm={deleteHandler} onCancel={closeModalHandler} />
			)}
			{showModal && <Backdrop onCancel={closeModalHandler} />}
		</div>
	);
}

export default Todo;
