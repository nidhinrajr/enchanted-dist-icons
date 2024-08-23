"use strict";
/* ======================================================================== *
 * Copyright 2024 HCL America Inc.                                          *
 * Licensed under the Apache License, Version 2.0 (the "License");          *
 * you may not use this file except in compliance with the License.         *
 * You may obtain a copy of the License at                                  *
 *                                                                          *
 * http://www.apache.org/licenses/LICENSE-2.0                               *
 *                                                                          *
 * Unless required by applicable law or agreed to in writing, software      *
 * distributed under the License is distributed on an "AS IS" BASIS,        *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. *
 * See the License for the specific language governing permissions and      *
 * limitations under the License.                                           *
 * ======================================================================== */
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
            d: "M3.75 2.25H20.25C20.6477 2.25054 21.0289 2.40874 21.3101 2.68993C21.5913 2.97112 21.7495 3.35234 21.75 3.75V20.25C21.7495 20.6477 21.5913 21.0289 21.3101 21.3101C21.0289 21.5913 20.6477\n        21.7495 20.25 21.75H12V20.25H20.25V3.75H3.75V12H2.25V3.75C2.25054 3.35234 2.40874 2.97112 2.68993 2.68993C2.97112 2.40874 3.35234 2.25054 3.75 2.25Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M18.75 16.5V18H12V16.5H18.75Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M18.75 12.75V14.25H12V12.75H18.75Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M17.25 6C18.0784 6 18.75 6.67157 18.75 7.5V9C18.75 9.82843 18.0784 10.5 17.25 10.5H6.75C5.92157 10.5 5.25 9.82843 5.25 9V7.5C5.25 6.67157 5.92157 6 6.75 6H17.25ZM17.25 7.5H6.75V9H17.25V7.5Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M3 15V16.5H6.4395L1.5 21.4395L2.5605 22.5L7.5 17.5605V21H9V15H3Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('content--reference', 24, content, attrs);
