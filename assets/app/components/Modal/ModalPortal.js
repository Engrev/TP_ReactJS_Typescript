import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { createPortal } from 'react-dom';
import { NewFolderModalContent } from './ModalContent';
import './modal.css';
export default function ModalPortal(props) {
    const modalName = props.modalName;
    const showModal = props.showModal;
    const setShowModal = props.setShowModal;
    let children;
    const container = document.body.querySelector('.ReactModalPortal') || document.body;
    switch (modalName) {
        case 'NewFolder':
            children = (_jsx(NewFolderModalContent, { onClose: () => setShowModal(false) }));
            break;
    }
    return _jsx(_Fragment, { children: showModal && createPortal(children, container) });
}
