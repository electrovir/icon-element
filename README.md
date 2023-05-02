# vir-icon-element

An [`element-vir`](https://npmjs.com/element-vir) element for displaying reusable icon SVG template strings. Includes an easy SVG wrapper definer.

# Installation

```bash
npm i @electrovir/icon-element
```

# Usage

## Define an icon

Use `defineIconSvg` to define an SVG Icon:

<!-- example-link: src/readme-examples/define-an-icon.example.ts -->

```TypeScript
import {html} from 'element-vir';
import {defineIconSvg} from '@electrovir/icon-element';
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
```

## Using a defined icon

Then pass that defined icon to an instance of `VirIcon`:

<!-- example-link: src/readme-examples/use-an-icon.example.ts -->

```TypeScript
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
```
