import {assign, css, defineElementNoInputs, html} from 'element-vir';
import {virIconColorCssVars} from './icon-color-css-vars';
import {defineIconSvg} from './icon-svg';
import {VirIcon} from './vir-icon.element';

export const Code24Icon = defineIconSvg({
    name: 'Code24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5"
            viewBox="0 0 24 24"
            stroke-width="2px"
            fill="none"
            width="24"
            height="24"
        >
            <path d="m7 7-5 5 5 5M17 7l5 5-5 5m-6 0 2-10" />
        </svg>
    `,
});

export const WebTestApp = defineElementNoInputs({
    tagName: 'vir-web-test-app',
    styles: css`
        :host {
            display: block;
            padding: 64px;
        }

        .colored {
            color: red;
        }

        .colored-var {
            ${virIconColorCssVars['vir-icon-color'].name}: green;
        }

        .colored-stroke-var {
            ${virIconColorCssVars['vir-icon-stroke-color'].name}: blue;
        }

        .big-size {
            height: 100px;
            width: 100px;
        }
    `,
    renderCallback() {
        return html`
            black
            <${VirIcon} ${assign(VirIcon, {icon: Code24Icon})}></${VirIcon}>
            <div class="colored">
                red
                <${VirIcon} ${assign(VirIcon, {icon: Code24Icon})}></${VirIcon}>
            </div>
            <div class="colored-var">
                green
                <${VirIcon} ${assign(VirIcon, {icon: Code24Icon})}></${VirIcon}>
            </div>
            <div class="colored-stroke-var">
                blue
                <${VirIcon} ${assign(VirIcon, {icon: Code24Icon})}></${VirIcon}>
            </div>
            <div class="big-size">
                resized
                <${VirIcon} ${assign(VirIcon, {icon: Code24Icon, fitContainer: true})}></${VirIcon}>
            </div>
        `;
    },
});
