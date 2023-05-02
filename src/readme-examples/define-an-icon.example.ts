import {html} from 'element-vir';
import {defineIconSvg} from '..';
import {virIconColorCssVars} from '../icon-color-css-vars';

export const MyIcon = defineIconSvg({
    name: 'MyIcon',
    svgTemplate: html`
        <!-- SVG goes here -->
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            viewBox="0 0 24 24"
            stroke=${virIconColorCssVars['vir-icon-stroke-color'].value}
            stroke-width="2px"
            fill="none"
            width="24"
            height="24"
        >
            <path d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `,
});
