import {css, defineElement, unsafeHTML} from 'element-vir';
import {virIconColorCssVars} from './icon-color-css-vars';
import {IconSvg} from './icon-svg';

export const VirIcon = defineElement<{
    icon: IconSvg | undefined;
    /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
    fitContainer?: boolean | undefined;
}>()({
    tagName: 'vir-icon',
    hostClasses: {
        /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
        'vir-icon-fit-icon': ({inputs}) => !!inputs.fitContainer,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: block;
            color: ${virIconColorCssVars['vir-icon-color'].value};
            fill: ${virIconColorCssVars['vir-icon-fill-color'].value};
            stroke: ${virIconColorCssVars['vir-icon-stroke-color'].value};
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${hostClasses['vir-icon-fit-icon'].name} svg {
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback: ({inputs}) => {
        if (!inputs.icon) {
            return '';
        }

        return unsafeHTML(inputs.icon.templateString);
    },
});
