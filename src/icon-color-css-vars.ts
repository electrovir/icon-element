import {defineCssVars} from 'lit-css-vars';

const genericIconColorCssVar = defineCssVars({
    /**
     * Specifies the icon color as a whole. This will color both the icon stroke and icon fill
     * colors unless those respective CSS vars are specifically overridden. This CSS var value
     * defaults to "currentColor", so in most cases you don't even need to override this variable,
     * you just need to change the icon's "color" property.
     */
    'vir-icon-color': 'currentColor',
});

const specificIconCssVars = defineCssVars({
    /** To be used for coloring an icon's stroke. */
    'vir-icon-stroke-color': genericIconColorCssVar['vir-icon-color'].value,
    /** To be used for coloring an icon's fill. */
    'vir-icon-fill-color': genericIconColorCssVar['vir-icon-color'].value,
});

export const virIconColorCssVars = {...genericIconColorCssVar, ...specificIconCssVars};
