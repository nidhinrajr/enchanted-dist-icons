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
            d: 'M10.5 17.25H9V6.75H13.5C14.3284 6.75 15 7.42157 15 8.25V12C15 12.8284 14.3284 13.5 13.5 13.5H10.5V17.25ZM10.5 12H13.5V8.25H10.5V12Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('page--elements--paragraph', 24, content, attrs);
