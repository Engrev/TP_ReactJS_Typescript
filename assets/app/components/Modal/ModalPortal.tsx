import { createPortal } from 'react-dom'
import { NewFolderModalContent } from './ModalContent'
import './modal.css'

export default function ModalPortal(props: any) {
    const modalName: string = props.modalName
    const showModal: boolean = props.showModal
    const setShowModal: React.Dispatch<React.SetStateAction<boolean>> =
        props.setShowModal
    let children: React.ReactNode
    const container: Element | DocumentFragment =
        document.body.querySelector('.ReactModalPortal') || document.body

    switch (modalName) {
        case 'NewFolder':
            children = (
                <NewFolderModalContent onClose={() => setShowModal(false)} />
            )
            break
    }

    return <>{showModal && createPortal(children, container)}</>
}
