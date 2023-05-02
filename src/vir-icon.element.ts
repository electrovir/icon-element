import {css, defineElement, unsafeHTML} from 'element-vir';
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
    styles: ({hostClassSelectors}) => css`
        :host {
            display: block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${hostClassSelectors['vir-icon-fit-icon']} svg {
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
