import { useState } from 'react'
import Alert from '../Alert'
import Modal from '../Modal'

interface NewFolderModalInterface {
    onClose: () => void;
    onSave: (fromEntries: { [p: string]: string | File }) => void;
}

const FOLDERS_URL = `${process.env.REACT_APP_API_URL}/folders`

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
export default function NewFolderModal({ onClose, onSave }: NewFolderModalInterface) {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null)
        setLoading(true)
        // @ts-ignore
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
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
            onSave(json)
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    }

    return (
        <Modal onClose={onClose}>
            {error &&
                // @ts-ignore
                <Alert type="danger">{error.toString()}</Alert>
            }
            <form
                action=""
                className="ReactModal_Content"
                onSubmit={handleSubmit}
            >
                <p>Create New Folder</p>
                <input
                    type="text"
                    name="title"
                    placeholder="Folder Title"
                    required={true}
                    autoComplete="off"
                />
                <div className="row mt-3">
                    <div className="col-12 col-lg-6 mb-3 mb-lg-0">
                        <button type="button" className="btn btn-secondary d-block w-100" disabled={loading} onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                    <div className="col-12 col-lg-6">
                        <button type="submit" className="btn btn-primary d-block w-100" disabled={loading}>
                            Create Folder
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    )
}
