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
            d: 'M18 17.25H13.5V15.75H18V12.75H13.5V6.75H19.5V8.25H15V11.25H18C18.8284 11.25 19.5 11.9216 19.5 12.75V15.75C19.5 16.5784 18.8284 17.25 18 17.25Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M9 6.75V11.25H6V6.75H4.5V17.25H6V12.75H9V17.25H10.5V6.75H9Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('page--elements--h5', 24, content, attrs);
