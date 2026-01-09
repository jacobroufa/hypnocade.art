import { ComponentChildren, JSX } from 'preact';
import { useCallback, useEffect, useRef } from 'preact/hooks';

import './Modal.css';

type ModalProps = {
    active: boolean;
    children: ComponentChildren;
    closeModal: () => void;
    description: JSX.Element | string;
    first?: boolean;
    last?: boolean;
};

export default function Modal({ active, children, closeModal, description, first, last }: ModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (active) {
            modalRef.current.showModal();
        } else {
            modalRef.current.close();
        }
    }, [active]);

    const checkCloseModal = useCallback((event: MouseEvent) => {
        if (event.target === modalRef.current) {
            closeModal();
        }
    }, []);

    return (
        <dialog ref={modalRef} class="modal-content" onClick={checkCloseModal} onClose={closeModal}>
            {children}
            {!first && <button class="prev" onClick={closeModal}>&lt;</button>}
            {!last && <button class="next" onClick={closeModal}>&gt;</button>}
            {description && <div class="description">{description}</div>}
        </dialog>
    );
}