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
            d: "M13.5 11.25C13.914 11.25 14.25 11.586 14.25 12V13.1895L16.08 12.0405C16.2675 11.9235 16.5 12.072 16.5 12.309V16.191C16.5 16.428 16.2675 16.5765 16.08 16.4595L14.25 15.3105V16.5C14.25\n        16.914 13.914 17.25 13.5 17.25H8.25C7.836 17.25 7.5 16.914 7.5 16.5V12C7.5 11.586 7.836 11.25 8.25 11.25H13.5Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: "M19.5 3H16.5V1.5H15V3H9V1.5H7.5V3H4.5C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3ZM19.5\n        19.5H4.5V9H19.5V19.5ZM7.5 4.5V6H9V4.5H15V6H16.5V4.5H19.5V7.5H4.5V4.5H7.5Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('calendar--meeting', 24, content, attrs);
