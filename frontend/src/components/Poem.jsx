import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/css/poem.css';
import { Context } from '../context';

function Poem({poemId, title, text}) {
    [poemId] = useState(poemId);

    function updateRows() {
        return text ? text.split('$').map((row, i) => row.length > 0 ? React.createElement('p', { key: `poemRow${i}` }, row) : React.createElement('br', { key: `poemRow${i}` })) : [];
    }
    const [rows, setRows] = useState(updateRows()); 
    useEffect(() => {
        setRows(updateRows());
    }, [text]);

    const { modalState } = useContext(Context);
    const [, setModal] = modalState;

    const showEditModal = () => {
        setModal({
            title: `Редактирование стиха с id ${poemId}`,
            content: {
                id: poemId,
                title,
                text
            },
            button: {
                text: 'Изменить',
                serviceFunc: 'updatePoem'
            }
        });
    };

    const showDeleteModal = () => {
        setModal({
            title: `Удаление стиха с id ${poemId}`,
            content: {
                id: poemId
            },
            button: {
                text: 'Удалить',
                serviceFunc: 'deletePoem'
            }
        });
    };

    return (
        <div id={poemId+''} className="card poem col shadow-sm">
            <div className="card-body">
                <h3 className="card-title">{ title }</h3>
                <div className="card-text">{ rows }</div>
                <div className="controls">
                    <button className="btn btn-outline-danger me-2 mt-2" data-bs-toggle="modal" data-bs-target="#mainModal" onClick={showDeleteModal}>Удалить</button>
                    <button className="btn btn-outline-warning mt-2" data-bs-toggle="modal" data-bs-target="#mainModal" onClick={showEditModal}>Изменить</button>
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