import React, { useContext, useEffect, useRef } from 'react';
import { Context } from '../context';
import { useToasts } from 'react-toast-notifications';
import PoemService from '../services/Poem';

function Modal() {
    const {modalState} = useContext(Context);
    const [modal] = modalState;

    const { addToast } = useToasts();
    PoemService.addToast = addToast;

    const content = {
        title: useRef(),
        text: useRef()
    };
    
    const request = () => {
        if (modal.button.text.includes('Добав'))
            modal.button.serviceFuncArgs = [{
                title: content.title.current.value,
                text: content.text.current.value.replace(/\n|\r/g, '$')
            }];
        else
        if (modal.button.text.includes('Измен'))
            modal.button.serviceFuncArgs = [
                {
                    title: content.title.current.value,
                    text: content.text.current.value.replace(/\n|\r/g, '$')
                },
                modal.content.id
            ];
        else
        if (modal.button.text.includes('Удал'))
            modal.button.serviceFuncArgs = [modal.content.id];

        PoemService[modal.button.serviceFunc](...(modal.button.serviceFuncArgs || []));
    };

    useEffect(() => {
        if (!(modal.button.text && modal.button.text.includes('Удал'))) {
            content.title.current.value = modal.content.title || '';
            content.text.current.value = modal.content.text ? modal.content.text.replace(/\044/g, '\n') : '';
        }
    }, [modal]);

    return (
        <div className="modal fade" id="mainModal" tabIndex="-1" aria-labelledby="mainModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="mainModalLabel">{ modal.title }</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            modal.button.text && modal.button.text.includes('Удал') 
                                ?
                                <p>Вы действительно хотите удалить стих ?</p>
                                :
                                <div id={ modal.content.id }>
                                    <div className="mb-3">
                                        <label htmlFor="titleInput" className="form-label">Заголовок</label>
                                        <input ref={content.title} type="text" className="form-control" id="titleInput" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="textInput" className="form-label">Текст</label>
                                        <textarea ref={content.text} className="form-control" id="textInput" rows="10"></textarea>
                                    </div>
                                </div>
                        }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={request}>{ modal.button.text }</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Modal;