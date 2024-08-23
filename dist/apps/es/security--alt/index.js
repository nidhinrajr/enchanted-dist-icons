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
            d: 'M12 1.5L3 6V13.5C3 18.4695 7.0305 22.5 12 22.5C16.9695 22.5 21 18.4695 21 13.5V6L12 1.5ZM4.5 13.5V6.927L12 3.177V21C7.8645 21 4.5 17.6355 4.5 13.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('security--alt', 24, content, attrs);
