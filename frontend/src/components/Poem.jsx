import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/poem.css';

function Poem({poemId, title, text}) {
    [poemId] = useState(poemId);

    function deletePoem() {
        console.log(`deleting poem with id ${poemId}`);
    }

    function updatePoem() {
        console.log(`updating poem with id ${poemId}`);
    }

    const [rows] = useState(text.split('$').map((row, i) => row.length > 0 ? React.createElement('p', { key: `poemRow${i}` }, row) : React.createElement('br', { key: `poemRow${i}` }))); 

    return (
        <div id={poemId+''} className="card poem col">
            <div className="card-body">
                <h3 className="card-title">{ title }</h3>
                <div className="card-text">{ rows }</div>
                <div className="controls">
                    <button className="btn btn-outline-danger me-2 mt-2" onClick={deletePoem}>Удалить</button>
                    <button className="btn btn-outline-warning mt-2" onClick={updatePoem}>Изменить</button>
                </div>
            </div>
        </div>
    );
}

Poem.propTypes = () => ({
    id: PropTypes.number,
    title: PropTypes.string,
    text: PropTypes.string
});

export default Poem;