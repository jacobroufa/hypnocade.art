import { useLayoutEffect, useState } from "preact/hooks";
import { useLocation } from "preact-iso";

import { Tab, Tabs } from "../../components/Tabs";
import { Panel, Panels } from "../../components/Panels";
import Gallery from "./Gallery";

export default function Hypno() {
    const [tab, setTab] = useState('gallery');
	const { path, query } = useLocation();
    const pathWithoutQuery = path.split('?')[0];

    useLayoutEffect(() => {
        const keys = Object.keys(query);
        const tab = keys.find(key => key === 'gallery' || key === 'controls');

        if (tab) {
            setTab(tab);
        }
    }, [query]);

    return (
        <div class="machine">
            <h1>Hypno</h1>
            <section>
                <p>Based on a video synthesizer, the premiere Hypnocade machine brings a more approachable form-factor and simplified control set than is offered in its stock form. With two sides to control and multiple feedback modes, there is a wide array of shape and color and interaction present as well as the possibility to have multiple facets of the machine play off itself. Whether you want to dive into a graceful, gentle movement or an intense psychedelic kaleidoscope, many things are possible.</p>
                <p>A defining factor of all Hypnocade machines is a custom circuit-bent glitch device that distorts and changes the picture in sometimes bizarre and unseemly ways, with the goal of adding textures and artifacts that compliment the otherwise digital scenery.</p>
                <p>The point of it all is to explore, find novel patterns and looks, and seek joy in the process of discovery.</p>
            </section>
            <Tabs active={tab} path={pathWithoutQuery}>
                <Tab title="Gallery" />
                <Tab title="Controls" />
            </Tabs>
            <Panels active={tab}>
                <Panel title="Gallery">
                    <Gallery />
                </Panel>
                <Panel title="Controls">
                    Controls
                </Panel>
            </Panels>
        </div>
    );
}