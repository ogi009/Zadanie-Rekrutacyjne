import React, {useState} from 'react';
import PopupSmall from "../PopupSmall/PopupSmall";
import Popup2 from "../Popup/PopuUp";
import './_main.scss';

const Main = () => {

    const [cell, setCell] = useState(["Income Yearly 45k USD+"]);
    const [info, setInfo] = useState('');

    const [cellSmall, setCellSmall] = useState(["Black", "Hispanic"]);
    const [smallInfo, setSmallInfo] = useState('');

    const cellRemove = (e) => {
        e.target.parentElement.parentElement.remove()
    }
    const smallCellRemove = (e) => {
        e.target.parentElement.parentElement.parentElement.remove()
    }
    const handleClickCell = (e, close) => {
        e.preventDefault();
        setCell(prev => [...prev, info]);
        setInfo('');
        close();
    }
    const handleClickSmallCell = (e, close) => {
        e.preventDefault();
        setCellSmall(prev => [...prev, smallInfo]);
        setSmallInfo('');
        close();
    }

    return (
        <main>
            <section>
                <div className="container">
                    <div className="content">
                        <div className="people">People</div>
                        <div className="border">
                            <div className="cell">
                                <p>Age 40+</p>
                                <button onClick={cellRemove}><i className="fas fa-minus-circle"></i></button>
                            </div>
                            <div className="cell cell-flex">
                                <div className="cell-small">
                                    <p>Ethnicity</p>
                                    <button onClick={smallCellRemove}><i className="fas fa-minus-circle"></i>
                                    </button>
                                </div>
                                <div className="border-small">
                                    {cellSmall.map((race, i) =>
                                        <div className="cell-smaller" key={i}>
                                            <p>{race}</p>
                                            <button onClick={cellRemove}>
                                                <i className="fas fa-minus-circle"></i>
                                            </button>
                                        </div>)}
                                    <PopupSmall cell={cellSmall} handleClick={handleClickSmallCell} info={smallInfo}
                                                setInfo={setSmallInfo}/>
                                </div>
                            </div>
                            {cell.map((info, i) =>
                                <div className={"cell"} key={i}>
                                    <p>{info}</p>
                                    <button onClick={cellRemove}><i className="fas fa-minus-circle"></i></button>
                                </div>
                            )}
                        </div>
                        <Popup2 cell={cell} handleClick={handleClickCell} info={info} setInfo={setInfo}/>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;