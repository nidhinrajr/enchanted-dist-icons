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
    viewBox: '0 0 32 32',
    width: 32,
    height: 32,
};
var content = [
    {
        elem: 'circle',
        attrs: {
            cx: '16',
            cy: '16',
            fill: 'currentColor',
            r: '14',
        },
    },
    {
        elem: 'line',
        attrs: {
            stroke: '#fff',
            strokeWidth: '4',
            x1: '7',
            x2: '25',
            y1: '16',
            y2: '16',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('user-status--in-a-meeting', 32, content, attrs);
