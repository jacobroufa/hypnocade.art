import classNames from "classnames";
import { cloneElement, ComponentChildren, VNode } from "preact";

import './Panels.css';

type PanelsProps = {
    active: string;
    children: VNode<PanelProps>[];
};

type PanelProps = {
    active?: boolean;
    children: ComponentChildren;
    title: string;
}

export function Panels(props: PanelsProps) {
    const { active, children } = props;

    return (
        <div class="panels">
            {children.map(child => cloneElement(child, {
                active: active === child.props.title.toLowerCase(),
            }))}
        </div>
    );
}

export function Panel(props: PanelProps) {
    const { active, children } = props;

    return (
        <div class={classNames('panel', { active })}>{children}</div>
    );
}