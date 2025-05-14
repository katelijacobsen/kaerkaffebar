import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, d as renderComponent, r as renderTemplate, f as renderSlot, s as spreadAttributes } from '../chunks/astro/server_qgRo0D9e.mjs';
import 'kleur/colors';
import { c as createSvgComponent, a as $$Button, $ as $$Layout } from '../chunks/Layout_CqdmUrCU.mjs';
import { V as VegetarianIcon, a as VeganIcon } from '../chunks/vegan-icon_D8wItopm.mjs';
import 'clsx';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image, a as $$Picture } from '../chunks/_astro_assets_FtoU_R99.mjs';
import { P as PearAndBlueberries } from '../chunks/pear-and-blueberyy_CyK5qh01.mjs';
export { r as renderers } from '../chunks/internal_BsTt5pTQ.mjs';

const Milk = createSvgComponent({"meta":{"src":"/_astro/milk.CBKyzj2m.svg","width":800,"height":800,"format":"svg"},"attributes":{"fill":"#000000","height":"800px","width":"800px","id":"Capa_1","viewBox":"0 0 485 485","xml:space":"preserve"},"children":"\r\n<g>\r\n\t<path d=\"M369.656,80.516V0H115.343v80.516L46.87,171.905V485h391.26V171.905L369.656,80.516z M278.679,161.901H91.852\r\n\t\tl45.996-61.389h186.827L278.679,161.901z M339.656,30v40.511H145.343V30H339.656z M76.87,191.901h194.313V455H76.87V191.901z\r\n\t\t M408.13,455H301.183V181.897l53.473-71.37l53.474,71.369V455z\" />\r\n</g>\r\n"});

const Gluten = createSvgComponent({"meta":{"src":"/_astro/gluten-icon.D1vPqrQu.svg","width":800,"height":800,"format":"svg"},"attributes":{"width":"800px","height":"800px","viewBox":"0 0 24 24","id":"Layer_1","data-name":"Layer 1"},"children":"<defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.89px;}</style></defs><path class=\"cls-1\" d=\"M9.17,3.55h1.89a3.78,3.78,0,0,1,3.78,3.78V9.22a0,0,0,0,1,0,0H12.94A3.78,3.78,0,0,1,9.17,5.44V3.55A0,0,0,0,1,9.17,3.55Z\" transform=\"translate(8.03 -6.62) rotate(45)\" /><path class=\"cls-1\" d=\"M12,8.27h1.89A3.78,3.78,0,0,1,17.66,12v1.89a0,0,0,0,1,0,0H15.78A3.78,3.78,0,0,1,12,10.16V8.27A0,0,0,0,1,12,8.27Z\" transform=\"translate(25.94 -3.73) rotate(90)\" /><path class=\"cls-1\" d=\"M6.34,8.27H8.22A3.78,3.78,0,0,1,12,12v1.89a0,0,0,0,1,0,0H10.11a3.78,3.78,0,0,1-3.78-3.78V8.27A0,0,0,0,1,6.34,8.27Z\" /><path class=\"cls-1\" d=\"M12,13.94h1.89a3.78,3.78,0,0,1,3.78,3.78V19.6a0,0,0,0,1,0,0H15.78A3.78,3.78,0,0,1,12,15.83V13.94A0,0,0,0,1,12,13.94Z\" transform=\"translate(31.6 1.94) rotate(90)\" /><path class=\"cls-1\" d=\"M6.34,13.94H8.22A3.78,3.78,0,0,1,12,17.71V19.6a0,0,0,0,1,0,0H10.11a3.78,3.78,0,0,1-3.78-3.78V13.94A0,0,0,0,1,6.34,13.94Z\" /><line class=\"cls-1\" x1=\"12\" y1=\"23.38\" x2=\"12\" y2=\"10.16\" />"});

const Nuts = createSvgComponent({"meta":{"src":"/_astro/nuts-icon.Cqp2TOP_.svg","width":800,"height":800,"format":"svg"},"attributes":{"height":"800px","width":"800px","id":"_x32_","viewBox":"0 0 512 512","xml:space":"preserve"},"children":"\r\n<style type=\"text/css\">\r\n\t.st0{fill:#000000;}\r\n</style>\r\n<g>\r\n\t<path class=\"st0\" d=\"M481.091,68.928c-40.235-45.742-93.628-58.255-154.403-36.173l9.588,26.396l-9.592-26.396h-0.008\r\n\t\tc-5.463,1.994-11.059,4.277-16.644,6.827c-51.833,23.594-75.274,69.033-92.39,102.205c-5.092,9.88-12.016,23.312-15.796,26.87\r\n\t\tc-10.663,4.959-20.811,8.902-31.541,13.068c-27.815,10.778-56.572,21.934-93.724,50.732C25.446,272.09,0.4,322.014,0.002,385.08\r\n\t\tc-0.215,34.29,14.232,63.629,40.688,82.642c26.354,18.939,75.515,35.417,160.04,6.382c1.278-0.445,2.538-0.89,3.792-1.342\r\n\t\tc73.725-26.781,106.24-82.072,123.707-111.78c3.536-6.004,7.539-12.817,9.444-14.981c5.892-6.679,20.748-14.603,39.538-24.639\r\n\t\tc18.235-9.733,40.924-21.845,68.225-39.339c35.981-23.046,59.07-59.048,65.038-101.374\r\n\t\tC516.331,138.999,505.071,96.183,481.091,68.928z M430.286,258.37c-59.419,38.064-97.041,50.19-113.672,69.048\r\n\t\tc-16.415,18.606-38.838,88.854-121.684,118.942c-1.097,0.408-2.202,0.793-3.325,1.171c-108.175,37.174-163.88-4.506-163.517-62.273\r\n\t\tc0.323-51.154,19.065-94.443,65.702-130.594c48.155-37.33,80.752-42.148,120.868-60.991\r\n\t\tc27.004-12.675,37.404-96.837,107.015-128.526c5.004-2.283,9.866-4.277,14.592-5.99c61.064-22.186,99.506,0.771,123.73,28.324\r\n\t\tC492.729,124.685,499.556,213.998,430.286,258.37z\" />\r\n\t<path class=\"st0\" d=\"M406.884,129.458c-2.386,4.263-0.874,9.644,3.373,12.031c4.254,2.386,9.628,0.874,12.022-3.38\r\n\t\tc2.558-4.544,4.544-8.532,6.049-11.779c1.498-3.239,2.543-5.76,3.136-7.22c1.868-4.507-0.289-9.666-4.796-11.519\r\n\t\tc-4.507-1.868-9.666,0.282-11.519,4.796c-0.6,1.438-1.498,3.618-2.839,6.508C410.976,121.787,409.197,125.36,406.884,129.458z\" />\r\n\t<path class=\"st0\" d=\"M202.676,327.966c3.202,3.677,8.776,4.055,12.456,0.845c10.738-9.354,21.4-18.902,31.815-28.316\r\n\t\tc3.618-3.268,3.899-8.85,0.63-12.467c-3.272-3.625-8.85-3.899-12.471-0.63c-10.374,9.369-20.963,18.842-31.585,28.116\r\n\t\tC199.848,318.715,199.47,324.297,202.676,327.966z\" />\r\n\t<path class=\"st0\" d=\"M304.884,224.925c-9.921,8.413-20.691,17.998-32.051,28.242c-3.618,3.262-3.903,8.85-0.634,12.468\r\n\t\tc3.266,3.617,8.847,3.906,12.464,0.637c11.3-10.199,21.948-19.658,31.64-27.878c3.718-3.158,4.177-8.724,1.027-12.446\r\n\t\tC314.176,222.234,308.605,221.774,304.884,224.925z\" />\r\n\t<path class=\"st0\" d=\"M164.791,347.935c-11.493,9.126-22.775,17.546-33.56,24.832c-4.043,2.736-5.11,8.214-2.38,12.253\r\n\t\tc2.728,4.047,8.217,5.107,12.261,2.38c11.286-7.621,22.898-16.3,34.654-25.64c3.821-3.016,4.458-8.576,1.423-12.402\r\n\t\tC174.157,345.541,168.6,344.904,164.791,347.935z\" />\r\n\t<path class=\"st0\" d=\"M377.672,168.056c-8.517,8.673-18.791,17.545-31.185,26.018c-4.025,2.75-5.059,8.25-2.301,12.268\r\n\t\tc2.746,4.025,8.246,5.056,12.264,2.313c13.372-9.154,24.55-18.784,33.816-28.234c3.424-3.469,3.372-9.058-0.112-12.482\r\n\t\tC386.685,164.528,381.089,164.579,377.672,168.056z\" />\r\n\t<path class=\"st0\" d=\"M88.694,395.976l-0.534,0.193c-6.163,2.246-11.801,3.618-16.704,4.092c-4.852,0.467-8.402,4.781-7.935,9.636\r\n\t\tc0.47,4.856,4.788,8.406,9.64,7.939c6.816-0.674,13.813-2.446,21.03-5.063l0.612-0.229c4.573-1.683,6.916-6.761,5.229-11.334\r\n\t\tC98.345,396.629,93.267,394.294,88.694,395.976z\" />\r\n\t<path class=\"st0\" d=\"M217.164,389.246c-2.294,1.854-4.648,3.625-7.064,5.315c-6.234,4.374-12.46,8.198-18.594,11.549\r\n\t\tc-3.702,2.016-5.063,6.649-3.043,10.348c2.017,3.691,6.649,5.048,10.348,3.039c6.612-3.618,13.324-7.732,20.04-12.446\r\n\t\tc2.709-1.898,5.329-3.876,7.876-5.93c3.28-2.632,3.798-7.427,1.156-10.712C225.247,387.126,220.444,386.607,217.164,389.246z\" />\r\n\t<path class=\"st0\" d=\"M155.988,421.238c-11.453,3.624-21.756,5.789-30.124,7.138c-4.155,0.682-6.983,4.596-6.312,8.747\r\n\t\tc0.678,4.166,4.588,6.983,8.751,6.316c8.951-1.453,19.998-3.773,32.293-7.672c4.014-1.275,6.237-5.552,4.963-9.57\r\n\t\tC164.287,422.187,160.002,419.963,155.988,421.238z\" />\r\n\t<path class=\"st0\" d=\"M272.41,333.8c-3.569-2.238-8.272-1.156-10.508,2.409c-5.3,8.458-11.24,17.19-17.927,25.604\r\n\t\tc-2.62,3.284-2.072,8.087,1.226,10.711c3.295,2.616,8.094,2.075,10.712-1.23c7.142-8.984,13.394-18.183,18.91-26.982\r\n\t\tC277.057,340.746,275.975,336.039,272.41,333.8z\" />\r\n\t<path class=\"st0\" d=\"M305.251,275.486c-6.604,4.529-12.142,9.132-16.07,14.692c-2.309,3.291-4.652,7.175-7.201,11.571\r\n\t\tc-2.113,3.64-0.868,8.302,2.772,10.407c3.647,2.112,8.309,0.874,10.422-2.765c2.446-4.232,4.637-7.827,6.494-10.459\r\n\t\tc2.135-3.098,6.349-6.894,12.175-10.838c3.476-2.379,4.378-7.116,2.009-10.592C313.479,274.018,308.738,273.121,305.251,275.486z\" />\r\n\t<path class=\"st0\" d=\"M423.429,199.218v-0.007c-5.344,7.628-12.075,14.766-20.6,20.74l-0.044,0.037\r\n\t\tc-3.439,2.417-4.285,7.168-1.868,10.614c2.424,3.447,7.175,4.285,10.63,1.876l0.044-0.045\r\n\t\tc10.126-7.093,18.102-15.581,24.328-24.476c2.409-3.447,1.579-8.198-1.876-10.622C430.597,194.926,425.838,195.764,423.429,199.218\r\n\t\tz\" />\r\n\t<path class=\"st0\" d=\"M451.086,127.909c-4.218,0.023-7.606,3.454-7.584,7.657c0.008,0.378-0.059,13.342-4.544,29.688\r\n\t\tc-1.112,4.054,1.282,8.25,5.344,9.362c4.055,1.111,8.242-1.283,9.362-5.338c5.152-18.842,5.077-33.334,5.085-33.793\r\n\t\tC458.728,131.275,455.295,127.887,451.086,127.909z\" />\r\n\t<path class=\"st0\" d=\"M369.288,240.513c-9.636,5.293-19.214,10.199-28.25,14.847c-3.744,1.935-5.214,6.531-3.284,10.281\r\n\t\tc1.927,3.736,6.53,5.212,10.274,3.277c9.014-4.64,18.71-9.606,28.598-15.04c3.691-2.03,5.041-6.664,3.01-10.355\r\n\t\tC377.612,239.831,372.979,238.482,369.288,240.513z\" />\r\n\t<path class=\"st0\" d=\"M338.192,103.218c-3.461-3.425-9.058-3.388-12.482,0.081c-10.148,10.267-18.59,21.564-25.881,32.972\r\n\t\tc-2.624,4.114-1.419,9.577,2.687,12.193c4.11,2.624,9.57,1.423,12.198-2.683c6.8-10.652,14.52-20.925,23.553-30.073\r\n\t\tC341.694,112.239,341.658,106.65,338.192,103.218z\" />\r\n\t<path class=\"st0\" d=\"M374.699,89.935c2.713-1.23,5.522-2.387,8.413-3.439c7.205-2.61,14.988-4.648,23.468-5.974\r\n\t\tc4.811-0.749,8.109-5.271,7.353-10.088c-0.756-4.818-5.278-8.11-10.095-7.354c-9.57,1.505-18.465,3.825-26.745,6.827\r\n\t\tc-3.328,1.208-6.56,2.535-9.688,3.951c-4.44,2.024-6.404,7.257-4.388,11.698C365.033,89.986,370.266,91.944,374.699,89.935z\" />\r\n\t<path class=\"st0\" d=\"M271.809,223.606c7.161-9.777,13.302-22.423,20.266-36.381c2.172-4.366,0.393-9.659-3.973-11.83\r\n\t\tc-4.366-2.179-9.662-0.393-11.842,3.973c-6.92,13.966-12.987,26.108-18.672,33.779c-2.887,3.921-2.046,9.444,1.879,12.342\r\n\t\tC263.396,228.372,268.918,227.541,271.809,223.606z\" />\r\n\t<path class=\"st0\" d=\"M85.358,347.238c3.258-3.632,2.962-9.213-0.663-12.467c-3.624-3.262-9.21-2.972-12.468,0.652\r\n\t\tc-10.655,11.89-19.009,23.928-23.524,36.336c-1.652,4.581,0.726,9.644,5.311,11.304c4.582,1.646,9.644-0.72,11.301-5.308\r\n\t\tC68.584,368.602,75.614,358.039,85.358,347.238z\" />\r\n\t<path class=\"st0\" d=\"M192.143,267.554c12.768-7.22,24.795-13.439,35.047-18.257c4.41-2.068,6.308-7.323,4.236-11.742\r\n\t\tc-2.075-4.41-7.331-6.308-11.745-4.239c-10.733,5.048-23.101,11.445-36.232,18.88c-4.244,2.402-5.738,7.782-3.332,12.03\r\n\t\tC182.518,268.466,187.903,269.963,192.143,267.554z\" />\r\n\t<path class=\"st0\" d=\"M151.667,292.497c4.051-2.713,5.137-8.198,2.42-12.252c-2.709-4.048-8.195-5.13-12.249-2.424\r\n\t\tc-11.334,7.606-22.53,15.663-33.072,24.009c-3.825,3.032-4.469,8.584-1.438,12.409c3.024,3.81,8.58,4.462,12.402,1.431\r\n\t\tC129.833,307.67,140.667,299.865,151.667,292.497z\" />\r\n</g>\r\n"});

const Fish = createSvgComponent({"meta":{"src":"/_astro/fish-icon.Cz00QtJq.svg","width":800,"height":800,"format":"svg"},"attributes":{"fill":"#000000","height":"800px","width":"800px","id":"Layer_1","viewBox":"0 0 512 512","xml:space":"preserve"},"children":"\r\n<g>\r\n\t<g>\r\n\t\t<circle cx=\"382.425\" cy=\"76.873\" r=\"15.32\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M507.955,48.307l-2.887-12.639l-28.014-0.72l-0.72-28.014l-12.639-2.887c-30.661-7.003-73.918-4.824-115.713,5.827\r\n\t\t\tC316.85,17.808,274.012,33.68,234.923,65.13c-38.325,0.988-95.202,26.734-125.59,57.123c-8.174,8.174-12.167,18.625-11.548,30.226\r\n\t\t\tc0.806,15.114,9.614,32.138,26.178,50.599c3.253,3.626,6.479,6.937,9.445,9.842c-10.075,31.318-13.655,61.082-12.597,86.835\r\n\t\t\tc-45.114-3.278-95.008,13.067-112.657,33.091c-7.758,8.801-10.121,19.246-6.481,28.656c6.859,17.729,25.719,21.114,43.96,24.388\r\n\t\t\tc18.712,3.359,39.923,7.165,56.617,23.86s20.501,37.904,23.86,56.617c3.273,18.24,6.659,37.101,24.387,43.96\r\n\t\t\tc2.898,1.121,5.895,1.673,8.913,1.673c6.777,0,13.654-2.785,19.744-8.154c20.024-17.65,36.37-67.539,33.091-112.657\r\n\t\t\tc2.877,0.118,5.804,0.179,8.778,0.179c23.646-0.001,50.242-3.829,78.063-12.779c3.017,3.1,6.503,6.509,10.332,9.944\r\n\t\t\tc18.46,16.564,35.485,25.372,50.599,26.178c0.78,0.042,1.555,0.062,2.324,0.062c10.671,0,20.278-3.988,27.902-11.612\r\n\t\t\tc30.691-30.69,56.648-88.396,57.148-126.723c31.111-38.916,46.845-81.459,54.735-112.42\r\n\t\t\tC512.778,122.225,514.957,78.968,507.955,48.307z M131.127,150.704c-0.114-2.119,0.363-3.386,1.816-4.84\r\n\t\t\tc14.007-14.005,35.948-27.303,57.754-36.228c-18.71,22.738-33.088,46.028-43.801,68.977\r\n\t\t\tC138.403,168.723,131.525,158.163,131.127,150.704z M366.633,379.554c-1.452,1.452-2.721,1.923-4.829,1.817\r\n\t\t\tc-7.555-0.395-18.375-7.536-28.442-16.258c23.307-10.876,46.965-25.528,70.04-44.663\r\n\t\t\tC394.479,342.697,380.929,365.258,366.633,379.554z M469.772,155.773c-3.087,12.113-7.514,26.206-13.825,41.109\r\n\t\t\tc-35.728-4.401-68.985-20.566-94.623-46.206c-18.17-18.17-31.41-39.668-39.353-63.897L290.244,97.18\r\n\t\t\tc9.59,29.254,25.561,55.196,47.471,77.106c28.113,28.113,63.825,46.774,102.465,53.925c-9.252,15.633-20.821,31.28-35.281,45.739\r\n\t\t\tc-32.395,32.394-70.483,56.882-110.148,70.817c-34.333,12.061-69.698,16.056-99.583,11.245l-24.943-4.013l6.087,24.519\r\n\t\t\tc4.586,18.472,3.767,42.384-2.246,65.601c-3.882,14.993-8.761,25.242-12.55,31.162c-0.951-3.935-1.82-8.786-2.543-12.814\r\n\t\t\tc-3.804-21.197-9.015-50.229-33.114-74.328s-53.131-29.31-74.328-33.114c-4.028-0.723-8.878-1.594-12.814-2.543\r\n\t\t\tc5.92-3.789,16.169-8.668,31.162-12.55c23.217-6.014,47.128-6.833,65.601-2.246L160,341.773l-4.013-24.943\r\n\t\t\tc-4.809-29.884-0.815-65.25,11.245-99.583c13.934-39.665,38.422-77.753,70.817-110.148c38.55-38.55,85.543-56.556,118.179-64.875\r\n\t\t\tc35.454-9.036,66.423-10.097,87.414-7.716l0.848,32.997l32.997,0.848C479.869,89.352,478.807,120.32,469.772,155.773z\" />\r\n\t</g>\r\n</g>\r\n<g>\r\n\t<g>\r\n\t\t<path d=\"M125.859,386.142L125.859,386.142L125.859,386.142z\" />\r\n\t</g>\r\n</g>\r\n"});

const $$Astro$4 = createAstro();
const $$Checkbox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Checkbox;
  const { Diet, Icon } = Astro2.props;
  const id = `checkbox-${Diet}`;
  return renderTemplate`${maybeRenderHead()}<div> <input name="diet" type="checkbox"${addAttribute(id, "id")} class="hidden peer"${addAttribute(Diet, "value")}> <label${addAttribute(id, "for")} class="inline-flex items-center gap-2 p-button border-2 border-accent bg-white rounded-full cursor-pointer text-accent peer-checked:text-primary peer-checked:bg-accent"> ${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "width": 18, "height": 18, "fill": "currentColor" })}`} <span>${Diet}</span> </label> </div>`;
}, "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/components/arrangement/Checkbox.astro", void 0);

const $$Astro$3 = createAstro();
const $$RadioButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$RadioButton;
  const { Occasion } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <input type="radio"${addAttribute(Occasion, "id")} name="occasion"${addAttribute(Occasion, "value")} class="w-[1rem] h-[1rem] accent-bright-bg text-highlight bg-white border-4 border-highlight focus:ring-highlight cursor-pointer"> <label${addAttribute(Occasion, "for")} class=""> ${Occasion} </label> </div>`;
}, "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/components/arrangement/RadioButton.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$PopUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PopUp;
  const { id, textStyle, show } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- class="sticky top-[30vw] right-[5vw] left-[5vw] z-50 bg-highlight p-large flex flex-col gap-large pin-skadow rounded-default" --><!-- Spread operat\xF8r -->', "<div", "", "", "> <div", "> <!-- Skifte indhold ud for arrangement & runningclub --> ", ' </div> <div class="flex justify-center mt-auto p-medium"> ', ' </div> </div> <script lang="javascript">\n  function openPopUp(id) {\n    document.getElementById(id)?.classList.remove("hidden");\n    //document.body.classList.add("overflow-hidden");\n  }\n\n  function closingPopUp(id) {\n    document.getElementById(id)?.classList.add("hidden");\n    document.body.classList.remove("overflow-hidden");\n  }\n\n  //  window.openPopUp = openPopUp;\n  //  window.closingPopUp = closingPopUp;\n\n  // Event listener for at lukke pop-up ved at klikke p\xE5 vores Button komponent\n  document.addEventListener("DOMContentLoaded", () => {\n    // v\xE6lger alle knapper med vores attribute. Vi bruger btn som parameter i vores callback\n    // og tilf\xF8jer en event listener til hver knap\n    document.querySelectorAll("[data-open-popup]").forEach((btn) => {\n      btn.addEventListener("click", () => {\n        const popupId = btn.getAttribute("data-open-popup");\n        openPopUp(popupId);\n      });\n    });\n  });\n\n  // Event listener for at lukke pop-up ved at klikke p\xE5 vores Button komponent\n  document.addEventListener("DOMContentLoaded", () => {\n    // v\xE6lger alle knapper med vores attribute. Vi bruger btn som parameter i vores callback\n    // og tilf\xF8jer en event listener til hver knap\n    document.querySelectorAll("[data-close-popup]").forEach((btn) => {\n      btn.addEventListener("click", () => {\n        const popupId = btn.getAttribute("data-close-popup");\n        closingPopUp(popupId);\n      });\n    });\n  });\n<\/script>'])), maybeRenderHead(), spreadAttributes(Astro2.props), addAttribute(id, "id"), addAttribute(`${show ? "" : "hidden"} w-[90%] lg:w-[60%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-60 bg-highlight p-large flex-col gap-large pin-skadow rounded-default overflow-y-auto`, "class"), addAttribute(`${textStyle}`, "class"), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Button", $$Button, { "showArrow": false, "type": "button", "closePopUp": id }, { "default": ($$result2) => renderTemplate`Luk` }));
}, "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/components/PopUp.astro", void 0);

const $$Astro$1 = createAstro();
const $$Form = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  const requestSuccess = Astro2.url.searchParams.get("requestSend") || false;
  return renderTemplate`${maybeRenderHead()}<article> <!--On Success Message --> ${renderComponent($$result, "PopUp", $$PopUp, { "show": requestSuccess, "id": "success-popup", "textStyle": "text-center" }, { "default": ($$result2) => renderTemplate` <h3>Tak for din forespørgsel hos Kær Kaffebar</h3> <p>
Vi glæder os til at byde dig velkommen. Du vil høre fra os tilbage
        hurtigst muligt.
</p> ` })} <form method="POST" action="/api/request" class="bg-primary-2 rounded-md p-large flex flex-col gap-large pin-skadow"> <h3>
Udfyld formular og send forespørgelse til enten arrangement, event eller
      catering
</h3> <div class="flex flex-col gap-default"> <label class="flex flex-col mb-smal font-bold gap-small">
Fulde Navn
<input required type="text" name="fullName" required class="border-2 border-faded-highlight rounded-sm p-2 bg-white"> </label> <label class="flex flex-col mb-smal font-bold gap-small">
Email
<input required type="email" name="email" required class="border-2 border-faded-highlight rounded-sm p-2 bg-white"> </label> <label class="flex flex-col mb-smal font-bold gap-small">
Telefonnummer
<input required type="number" pattern="[0-9]*" name="phoneNumber" required class="[appearance:textfield] border-2 border-faded-highlight rounded-sm p-2 bg-white"> </label> </div> <fieldset class="flex flex-wrap flex-col gap-default"> <legend class="text-header-3">Anledning</legend> ${renderComponent($$result, "RadioButton", $$RadioButton, { "Occasion": "Arrangement" })} ${renderComponent($$result, "RadioButton", $$RadioButton, { "Occasion": "Catering" })} ${renderComponent($$result, "RadioButton", $$RadioButton, { "Occasion": "Event" })} ${renderComponent($$result, "RadioButton", $$RadioButton, { "Occasion": "Kage og bestilling" })} </fieldset> <div class="flex flex-col gap-default"> <label class="inline-flex flex-col mb-smal font-bold">
Tid
<input type="time" id="time" name="time" min="10:00" max="16:00" class="border-2 border-faded-highlight rounded-sm p-2 bg-white" required> </label> <label class="inline-flex flex-col mb-smal font-bold">
Dato
<input type="date" id="date" name="date" min="2025-12-29" class="border-2 border-faded-highlight rounded-sm p-2 bg-white" required> </label> </div> <fieldset class="flex flex-wrap items-end gap-default self-stretch content-end"> <legend class="text-header-3 my-default">Allergier og ønsker til menuen</legend> ${renderComponent($$result, "Checkbox", $$Checkbox, { "Diet": "Laktose", "Icon": Milk })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "Diet": "Gluten", "Icon": Gluten })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "Diet": "N\xF8dder", "Icon": Nuts })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "Diet": "Fisk", "Icon": Fish })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "Diet": "Vegetarisk", "Icon": VegetarianIcon })} ${renderComponent($$result, "Checkbox", $$Checkbox, { "Diet": "Vegansk", "Icon": VeganIcon })} </fieldset> <fieldset class="flex flex-col mb-smal font-bold gap-default"> <legend>Kommentar</legend> <textarea name="comment" rows="4" cols="20" class="border-2 border-faded-highlight rounded-sm p-2 bg-white" placeholder="Skriv dine kommentarer her..."></textarea> </fieldset> <p>
Obs: Hvis du har nogen spørgsmål eller bekymringer <br> så kontakt os på
      81 61 09 00
</p> ${renderComponent($$result, "Button", $$Button, { "type": "submit", "showArrow": false, "variant": "primary" }, { "default": ($$result2) => renderTemplate` Send ` })} </form> </article>`;
}, "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/components/arrangement/Form.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    title,
    subtitle,
    description,
    image,
    bgColor,
    border,
    borderColor,
    fontColor,
    imagePosition,
    imageOpacity,
    imageSize,
    popUpTitle,
    details
  } = Astro2.props;
  const popUpId = `popup-${popUpTitle}`;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "PopUp", $$PopUp, { "id": popUpId, "show": false }, { "default": ($$result2) => renderTemplate` <div class="flex flex-col gap-default overflow-y-auto max-h-[50dvh]"> <h3>${popUpTitle}</h3> <p> ${details} </p> </div> ` })} <article${addAttribute(`relative ${bgColor} ${border} ${borderColor} ${fontColor} p-card rounded-md gap-default inline-flex flexwrap flex-col overflow-hidden `, "class")}> <div${addAttribute(`absolute z-0 opacity-[40%] ${imagePosition} ${imageOpacity} ${imageSize}`, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": image, "alt": "white colored illustration with outlined flowing teapot with three teacups", "class": "w-[50%] h-[50%] object-fit", "width": 512, "height": 200, "loading": "lazy" })} </div> <div class="relative z-10 text-left flex flex-col gap-medium me-16"> <h2 class="font-header">${title}</h2> <h3>${subtitle}</h3> <p>${description}</p> </div> <div class="relative z-10 flex justify-end"> ${renderComponent($$result, "Button", $$Button, { "type": "button", "variant": title === "Event" ? "primaryOutline" : "primary", "data-open-popup": popUpId, "element": false }, { "default": ($$result2) => renderTemplate`Læs mere` })} </div> </article> </div>`;
}, "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/components/arrangement/Card.astro", void 0);

const Teapot = new Proxy({"src":"/_astro/teapot-with-three-cups.4TCixnYx.webp","width":1516,"height":2172,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/assets/illustrations/white/teapot-with-three-cups.webp";
							}
							
							return target[name];
						}
					});

const Cutlery = new Proxy({"src":"/_astro/bestik.BEJp3iDo.avif","width":243,"height":304,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/assets/illustrations/white/bestik.avif";
							}
							
							return target[name];
						}
					});

const Citroner = new Proxy({"src":"/_astro/citroner.BXHuyldc.avif","width":1668,"height":1524,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/assets/illustrations/brown/citroner.avif";
							}
							
							return target[name];
						}
					});

const Croissant = new Proxy({"src":"/_astro/croissant.CLReU15t.avif","width":1714,"height":1869,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/assets/illustrations/brown/croissant.avif";
							}
							
							return target[name];
						}
					});

const smallCakes = new Proxy({"src":"/_astro/smallCakes.B6e5IVwu.avif","width":616,"height":540,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/assets/img/smallCakes.avif";
							}
							
							return target[name];
						}
					});

const prerender = false;
const $$Arrangement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="m-margin mb-section relative"> <article class="mb-section inline-flex flex-col lg:flex-row gap-large"> <div> <h1 class="text-header-1 leading-height-header-1">
Arrangementer & events hos Kær Kaffebar
</h1> <p>
Skab uforglemmelige øjeblikke ved at <bold class="font-bold">
afholde dit næste arrangement i de stemningsfulde lokaler hos Kær
            Kaffebar!
</bold> </p> <br> <bold class="font-bold">
Vi stiller gerne vores hyggelige og indbydende rammer til rådighed
</bold> for alt fra fødselsdagsfester og firmaarrangementer til PR-events
        og meget mere –<bold class="font-bold">
du skal blot sende os en forespørgsel, så tager vi den derfra.
</bold> </div> <div class="flex flex-col gap-large"> <video muted loop autoplay class="rounded-full w-[100%] lg:w-[80%] h-[50%]"> <source src="/video/arrangement-og-event-video.mp4" type="video/mp4">
Your browser does not support the video tag.
</video> <div class="flex items-start gap-large"> ${renderComponent($$result2, "Picture", $$Picture, { "src": PearAndBlueberries, "formats": ["avif", "webp"], "alt": "Illustration of a pear and blueberries", "width": 200, "height": 200 })} ${renderComponent($$result2, "Picture", $$Picture, { "src": smallCakes, "formats": ["avif", "webp"], "alt": "Picture of small cakes", "width": 300, "height": 300 })} </div> </div> </article> <div class="flex flex-col lg:flex-row lg:items-start lg:gap-extra-large"> <section class="lg:flex-1 flex flex-wrap flex-col gap-extra-large mb-section"> ${renderComponent($$result2, "Card", $$Card, { "image": Teapot, "imageSize": "w-full h-auto", "imagePosition": "my-[-10%] mx-[50%]", "bgColor": "bg-neutral-3", "fontColor": "text-neutral-1", "title": "Arrangement", "subtitle": "Hold dit n\xE6ste arrangement hos os", "description": "Sm\xE5 selskaber i hyggelige rammer \u2013 perfekt til f\xF8dselsdage, babyshowers og bogklubber.", "popUpTitle": "Arrangement", "details": "Hvis du leder efter det ideelle sted til dit n\xE6ste arrangement, beh\xF8ver du ikke lede l\xE6ngere end K\xE6r Kaffebar. Send en foresp\xF8rgelse om arrangement her og s\xE5 vil vi kontakte dig ang\xE5ende flere detaljer. Lad os sammen skabe et mindev\xE6rdigt arrangement, som dine g\xE6ster vil tale om i lang tid fremover!" })} ${renderComponent($$result2, "Card", $$Card, { "image": Cutlery, "imageSize": "w-[50%] h-auto", "imagePosition": "my-[-10%] mx-[75%] rotate-[-30deg]", "bgColor": "bg-accent", "fontColor": "text-primary", "title": "Event", "subtitle": "Planl\xE6g et unikt event p\xE5 K\xE6r Kaffebar", "description": "Workshops, pop-ups eller private aftenarrangementer? Vi hj\xE6lper dig med at skabe stemningen", "popUpTitle": "Event", "details": "Hos K\xE6r Kaffebar tilbyder vi den perfekte ramme for dit n\xE6ste PR-event. Vores hyggelige og stemningsfulde caf\xE9 i hjertet af Valby er ideel til at skabe en intim og im\xF8dekommende atmosf\xE6re, hvor din virksomheds budskab kan komme til sin ret. Med vores flotte indretning, udend\xF8rs siddepladser i solen og l\xE6kre udvalg af \xF8kologisk kaffe, friskpresset juice, og hjemmelavede specialiteter, kan du give dine g\xE6ster en uforglemmelig oplevelse. Uanset om det drejer sig om en produktlancering, en netv\xE6rksbegivenhed eller andet, kan vi skr\xE6ddersy arrangementet til dine behov. Vi tilbyder muligheden for at reservere hele caf\xE9en og vores dedikerede personale s\xF8rger for, at alt forl\xF8ber glat. Vi kan desuden arrangere specialmenuer, der passer til dit event, med tanke for dit brands identitet." })} ${renderComponent($$result2, "Card", $$Card, { "image": Citroner, "imageSize": "w-[70%] h-auto", "imagePosition": "my-[2%] mx-[40%] rotate-[140deg]", "bgColor": "bg-neutral-2", "fontColor": "text-neutral-1", "title": "Catering", "subtitle": "Catering med k\xE6rlighed og kvalitet", "description": "Bestil morgenmad, frokost eller kagebord til din n\xE6ste sammenkomst \u2013 lavet med omtanke.", "popUpTitle": "Catering", "details": "Lad os tage os af maden \u2013 s\xE5 du kan tage dig af g\xE6sterne. Hos K\xE6r Kaffebar tilbyder vi catering til b\xE5de private og professionelle arrangementer, store som sm\xE5. Uanset om du planl\xE6gger en f\xF8dselsdag, et firmaevent, en reception eller et m\xF8de, st\xE5r vi klar med smagfulde l\xF8sninger, der passer perfekt til anledningen. Vi laver alt fra friskbagte kager og br\xF8d til lette anretninger, brunch, frokost og specialkaffe. Vores retter er lavet med k\xE6rlighed og omtanke \u2013 og vi bruger kun friske, \xF8kologiske r\xE5varer, hvor det er muligt. Har du s\xE6rlige \xF8nsker eller behov? Vi skr\xE6ddersyr gerne en menu, der matcher dine pr\xE6ferencer og dit arrangement \u2013 b\xE5de i smag og stil." })} ${renderComponent($$result2, "Card", $$Card, { "image": Croissant, "imageSize": "w-[50%] h-auto", "imagePosition": "my-[-4%] mx-[70%] rotate-[-10deg]", "bgColor": "bg-primary", "fontColor": "text-neutral-1", "border": "border-2", "borderColor": "border-faded-highlight", "title": "Kage og bestilling", "subtitle": "Bestil hjemmelavede kager til enhver lejlighed", "description": "Bryllup, f\xF8dselsdage eller bare fordi - vi bager med smag og stil", "popUpTitle": "Kage og bestilling", "details": "Skal der lidt ekstra s\xF8dt p\xE5 bordet? Bestil en eller flere af vores popul\xE6re hjemmebagte kager til din fest eller fejring. Vi bager efter s\xE6son og tilbyder alt fra klassiske favoritter til unikke specialiteter." })} </section> <section class="flex-1 relative"> ${renderComponent($$result2, "Form", $$Form, {})} </section> </div> </main> ` })}`;
}, "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/arrangement.astro", void 0);

const $$file = "C:/Users/katja/Desktop/MMDE/kaerkaffebar/src/pages/arrangement.astro";
const $$url = "/arrangement";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Arrangement,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
