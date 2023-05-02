import {assign, defineElementNoInputs, html} from 'element-vir';
import {VirIcon} from '../vir-icon.element';
import {MyIcon} from './define-an-icon.example';

export const MyElement = defineElementNoInputs({
    tagName: 'my-element',
    renderCallback() {
        return html`
            <${VirIcon} ${assign(VirIcon, {icon: MyIcon})}><${VirIcon}></></>
        `;
    },
});
