import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './_popup.scss';


const Popup2 = ({handleClick, setInfo}) => {

    return (
        <Popup
            trigger={<button className="plus">+</button>}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <form onSubmit={e=>handleClick(e,close)}>
                        <label><input type="text" placeholder="Add Info" onChange={e => setInfo(e.target.value)}></input></label>
                        <button className="plus-modal">+</button>
                    </form>
                </div>
            )}
        </Popup>
    );
}
export default Popup2;