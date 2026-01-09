import classNames from "classnames";
import { cloneElement, VNode } from "preact";
import { useLocation } from "preact-iso";

import './Tabs.css';

type TabsProps = {
    active: string;
    children: VNode<TabProps>[];
    path: string;
};

type TabProps = {
    active?: boolean;
    setTab?: () => void;
    title: string;
}

export function Tabs(props: TabsProps) {
    const { active, children, path } = props;
    const { route } = useLocation();

    return (
        <nav class="tabs">
            <ul>{children.map(child => {
                const title = child.props.title.toLowerCase();

                return cloneElement(child, {
                    active: active === title,
                    setTab: () => route(`${path}?${title}`, true),
                });
            })}</ul>
        </nav>
    );
}

export function Tab(props: TabProps) {
    const { active, setTab, title } = props;

    return (
        <li class={classNames('tab', { active })} onClick={setTab}>{title}</li>
    );
}