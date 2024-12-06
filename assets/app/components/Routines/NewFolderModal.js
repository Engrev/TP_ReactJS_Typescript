import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Alert from '../Alert';
import Modal from '../Modal';
const FOLDERS_URL = `${process.env.REACT_APP_API_URL}/folders`;
/**
 * NewFolderModal component handles the creation of a new folder. It presents a form for user input
 * and handles the submission process including displaying any errors that might occur.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.onClose - Callback function to handle the modal close action.
 * @param {Function} props.onSave - Callback function to handle saving data after successful submission.
 *
 * @return {JSX.Element} The render output of the NewFolderModal component.
 */
export default function NewFolderModal({ onClose, onSave }) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        // @ts-ignore
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        //console.log('BODY_DATA', data)
        fetch(FOLDERS_URL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((json) => {
            onSave(json);
        })
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    };
    return (_jsxs(Modal, { onClose: onClose, children: [error &&
                // @ts-ignore
                _jsx(Alert, { type: "danger", children: error.toString() }), _jsxs("form", { action: "", className: "ReactModal_Content", onSubmit: handleSubmit, children: [_jsx("p", { children: "Create New Folder" }), _jsx("input", { type: "text", name: "title", placeholder: "Folder Title", required: true, autoComplete: "off" }), _jsxs("div", { className: "row mt-3", children: [_jsx("div", { className: "col-12 col-lg-6 mb-3 mb-lg-0", children: _jsx("button", { type: "button", className: "btn btn-secondary d-block w-100", disabled: loading, onClick: onClose, children: "Cancel" }) }), _jsx("div", { className: "col-12 col-lg-6", children: _jsx("button", { type: "submit", className: "btn btn-primary d-block w-100", disabled: loading, children: "Create Folder" }) })] })] })] }));
}
