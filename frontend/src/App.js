import React, { useState } from 'react';
import './App.css';
import { Context } from './context';
import { ToastProvider } from 'react-toast-notifications';
import PoemsList from './components/PoemsList';
import Modal from './components/Modal';

function App() {
    const [modal, setModal] = useState({
        title: undefined,
        content: {},
        button: {
            text: undefined,
            serviceFunc: undefined
        }
    });

    const showAddModal = () => {
        setModal({
            title: 'Добавление стиха',
            content: {},
            button: {
                text: 'Добавить',
                serviceFunc: 'addPoem'
            }
        });
    };

    return (
        <Context.Provider value={{
            modalState: [modal, setModal]
        }}>
            <div className="App pb-5">
                <button className="btn btn-outline-success fixed-top m-4" data-bs-toggle="modal" data-bs-target="#mainModal" onClick={showAddModal}>Добавить стих</button>
                <h1 className="text-center mt-5 mb-4">Стихи Шекспира</h1>
                <PoemsList/>
                <ToastProvider>
                    <Modal/>
                </ToastProvider>
            </div>
        </Context.Provider>
        
    );
}
export default App;
