import { JSX } from "preact";
import { useState } from "preact/hooks";

import Modal from "./Modal";

import "./Image.css";

type ImageProps = {
    alt: string;
    description?: JSX.Element | string;
    first?: boolean;
    last?: boolean;
    src: string;
    thumb?: string;
};

export default function Image(props: ImageProps) {
    const { alt, description, first, last, src, thumb } = props;

    if (!thumb) {
        return (
            <img src={src} alt={alt} loading="lazy" />
        );
    }

    const [modalShown, showModal] = useState(false);

    return (
        <>
            <img class="thumb" src={thumb} alt={alt} onClick={() => showModal(true)} />
            <Modal active={modalShown} closeModal={() => showModal(false)} description={description} first={first} last={last}>
                <Image alt={alt} src={src} />
            </Modal>
        </>
    );
}