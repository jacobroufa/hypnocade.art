import Image from "../../../components/Image";

import _1 from "../../../assets/hypno/1.jpeg";
import _2 from "../../../assets/hypno/2.jpeg";
import _3 from "../../../assets/hypno/3.jpeg";
import _4 from "../../../assets/hypno/4.jpeg";
import _5 from "../../../assets/hypno/5.jpeg";
import _6 from "../../../assets/hypno/6.jpeg";
import _7 from "../../../assets/hypno/7.jpeg";
import _8 from "../../../assets/hypno/8.jpeg";
import _9 from "../../../assets/hypno/9.jpeg";
import _10 from "../../../assets/hypno/10.jpeg";
import _11 from "../../../assets/hypno/11.jpeg";
import _12 from "../../../assets/hypno/12.jpeg";
import _1_thumb from "../../../assets/hypno/thumbs/1.jpeg";
import _2_thumb from "../../../assets/hypno/thumbs/2.jpeg";
import _3_thumb from "../../../assets/hypno/thumbs/3.jpeg";
import _4_thumb from "../../../assets/hypno/thumbs/4.jpeg";
import _5_thumb from "../../../assets/hypno/thumbs/5.jpeg";
import _6_thumb from "../../../assets/hypno/thumbs/6.jpeg";
import _7_thumb from "../../../assets/hypno/thumbs/7.jpeg";
import _8_thumb from "../../../assets/hypno/thumbs/8.jpeg";
import _9_thumb from "../../../assets/hypno/thumbs/9.jpeg";
import _10_thumb from "../../../assets/hypno/thumbs/10.jpeg";
import _11_thumb from "../../../assets/hypno/thumbs/11.jpeg";
import _12_thumb from "../../../assets/hypno/thumbs/12.jpeg";

import "./style.css";

export default function Gallery() {
    return (
        <div class="gallery">
            <Image alt="Original Stern cabinet" src={_1} thumb={_1_thumb} first
                description="Before the build, we had dreams. Our first Hypnocade machine was built using a Stern cabinet that was already stripped out for parts." />
            <Image alt="Controller mock-up in CAD" src={_2} thumb={_2_thumb}
                description="Using TinkerCAD (and later, OnShape) we designed our CPO layout as the first stage of the build, placing user interactions as our highest priority." />
            <Image alt="First cabinet side painted" src={_3} thumb={_3_thumb}
                description={<>Cabinet paint work was done in collaboration with <a href="https://jennymmathews.com/" target="_blank">Jenny Mathews</a>.</>} />
            <Image alt="Right rear cabinet view after paint" src={_4} thumb={_4_thumb}
                description={<>Cabinet paint work was done in collaboration with <a href="https://jennymmathews.com/" target="_blank">Jenny Mathews</a>.</>} />
            <Image alt="Left rear cabinet view after paint" src={_5} thumb={_5_thumb}
                description={<>Cabinet paint work was done in collaboration with <a href="https://jennymmathews.com/" target="_blank">Jenny Mathews</a>.</>} />
            <Image alt="Cabinet mock-up with monitor mounted and initial cut CPO and marquee" src={_6} thumb={_6_thumb}
                description="Build photo showing progress of the monitor mounted along with the first versions of the cut CPO and marquee." />
            <Image alt="Marquee lighting mock-up with internals in progress" src={_7} thumb={_7_thumb}
                description="Our marquee lighting mock-up was done after the acrylic was mounted behind the painted metal marquee face." />
            <Image alt="Final CPO cut and partially populated" src={_8} thumb={_8_thumb}
                description="After getting the CPO recut, formed, and painted we were able to begin placing our controls. Controller wiring work was done separately on a mock-up on the workbench." />
            <Image alt="Fully assembled and working Hypnocade" src={_9} thumb={_9_thumb}
                description="After the finished assembly was complete, of course we had to play test it in the garage!" />
            <Image alt="First installation at Rockford Fall Art Scene 2024" src={_10} thumb={_10_thumb}
                description={<>Our first installation and completion target for the original Hypnocade was at <a href="https://www.facebook.com/habitatforart" target="_blank">Mainfraim</a> in Rockford, IL, during the Fall 2024 Art Scene.</>} />
            <Image alt="Being played at Fall Art Scene 2024" src={_11} thumb={_11_thumb}
                description="During Rockford's Fall 2024 Art Scene, a visitor to the gallery plays with Hypnocade for the first time." />
            <Image alt="Being played at Somnium 2024" src={_12} thumb={_12_thumb} last
                description={<>Our second installation came just a week after the first, at the <a href="https://mentesextremofilas.com/somnium" target="_blank">Somnium multimedia art festival</a> at Sinnissippi Park in Rockford, IL.</>} />
        </div>
    );
}