import React from 'react';

function Backdrop({ onCancel }) {
	return <div className='backdrop' onClick={onCancel} />;
}

export default Backdrop;
