import {TemplateResult, templateToString} from 'element-vir';

export type IconSvg = {
    name: string;
    templateString: string;
};

export function defineIconSvg({
    name,
    svgTemplate,
}: {
    name: string;
    svgTemplate: string | TemplateResult;
}): IconSvg {
    const iconSvg: IconSvg = {
        name,
        templateString:
            typeof svgTemplate === 'string' ? svgTemplate : templateToString(svgTemplate),
    };

    return iconSvg;
}
