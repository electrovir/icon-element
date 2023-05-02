import {typedAssertInstanceOf} from '@augment-vir/browser-testing';
import {assert, fixture as renderFixture} from '@open-wc/testing';
import {assign, html} from 'element-vir';
import {setCssVarValue} from 'lit-css-vars';
import {virIconColorCssVars} from './icon-color-css-vars';
import {VirIcon} from './vir-icon.element';
import {Code24Icon} from './web-test.test-helper';

describe(VirIcon.tagName, () => {
    async function setupFixture() {
        const fixture = await renderFixture(
            html`
                <div><${VirIcon} ${assign(VirIcon, {icon: Code24Icon})}></${VirIcon}></div>
            `,
        );

        typedAssertInstanceOf(fixture, HTMLDivElement);

        const virIconInstance = fixture.querySelector(VirIcon.tagName);

        typedAssertInstanceOf(virIconInstance, VirIcon);

        return {wrapperDiv: fixture, virIconInstance};
    }

    enum GetColorType {
        Color = 'color',
        Fill = 'fill',
        Stroke = 'stroke',
    }

    function getColor(sourceElement: HTMLElement, colorType: GetColorType): string {
        return window.getComputedStyle(sourceElement).getPropertyValue(colorType);
    }

    describe('icon with stroke', () => {
        it('defaults to current color value', async () => {
            const {virIconInstance} = await setupFixture();

            // default color (black)
            assert.strictEqual(getColor(virIconInstance, GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Fill), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Stroke), 'rgb(0, 0, 0)');
        });

        it("tracks its parent's color value", async () => {
            const {virIconInstance, wrapperDiv} = await setupFixture();

            wrapperDiv.style.color = 'red';

            assert.strictEqual(getColor(virIconInstance, GetColorType.Color), 'rgb(255, 0, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Fill), 'rgb(255, 0, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Stroke), 'rgb(255, 0, 0)');
        });

        it('follows icon color CSS var', async () => {
            const {virIconInstance, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: virIconColorCssVars['vir-icon-color'],
                onElement: wrapperDiv,
                toValue: 'green',
            });

            assert.strictEqual(getColor(virIconInstance, GetColorType.Color), 'rgb(0, 128, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Fill), 'rgb(0, 128, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Stroke), 'rgb(0, 128, 0)');
        });

        it('follows stroke color CSS var', async () => {
            const {virIconInstance, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: virIconColorCssVars['vir-icon-stroke-color'],
                onElement: wrapperDiv,
                toValue: 'blue',
            });

            assert.strictEqual(getColor(virIconInstance, GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Fill), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Stroke), 'rgb(0, 0, 255)');
        });

        it('follows fill color CSS var', async () => {
            const {virIconInstance, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: virIconColorCssVars['vir-icon-fill-color'],
                onElement: wrapperDiv,
                toValue: 'white',
            });

            assert.strictEqual(getColor(virIconInstance, GetColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Fill), 'rgb(255, 255, 255)');
            assert.strictEqual(getColor(virIconInstance, GetColorType.Stroke), 'rgb(0, 0, 0)');
        });
    });
});
