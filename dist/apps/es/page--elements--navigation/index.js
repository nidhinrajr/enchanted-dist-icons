"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../../utils");
var attrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    width: 24,
    height: 24,
};
var content = [
    {
        elem: 'path',
        attrs: {
            d: 'M19.5 13.4999V14.9999H15V13.4999H19.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M19.5 11.2499V12.7499H15V11.2499H19.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M19.5 8.99994V10.4999H15V8.99994H19.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: "M21 5.99994C21.8284 5.99994 22.5 6.67151 22.5 7.49994V16.4999C22.5 17.3284 21.8284 17.9999 21 17.9999H3C2.17157 17.9999 1.5 17.3284 1.5 16.4999V7.49994C1.5 6.67151 2.17157 5.99994 3\n        5.99994H21ZM21 7.49994H3V16.4999H21V7.49994Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('page--elements--navigation', 24, content, attrs);
