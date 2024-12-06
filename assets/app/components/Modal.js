import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';
/**
 * Renders a modal dialog using the HTMLDialogElement interface.
 *
 * @param {object} props - The properties passed to the Modal component.
 * @param {React.ReactNode} props.children - The content to be displayed within the modal.
 * @param {Function} props.onClose - A callback function that is invoked when the dialog is closed.
 *
 * @return {React.ReactPortal} A React portal containing a dialog element rendered to the body.
 */
export default function Modal({ children, onClose }) {
    const dialogRef = useRef(null);
    useEffect(() => {
        // @ts-ignore
        dialogRef.current.showModal();
    }, []);
    const handleClose = (e) => {
        e.preventDefault();
        onClose?.();
    };
    return createPortal(_jsx("dialog", { ref: dialogRef, onCancel: handleClose, onClose: handleClose, children: children }), document.body);
}
