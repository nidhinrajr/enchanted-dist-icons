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
        elem: 'path',
        attrs: {
            d: "M25 12H20v2h5a1.0008 1.0008 0 011 1v2H22a3.0033 3.0033 0 00-3 3v1a3.0033 3.0033 0 003 3h6V15A3.0033 3.0033 0 0025 12zM22 22a1.0008 1.0008 0 01-1-1V20a1.0008 1.0008 0 011-1h4v3zM16 24h2L12\n         7H10L4 24H6l1.6936-5h6.6135zM8.3711 17l2.4966-7.3711.2668.0005L13.63 17z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('letter--Aa--large', 32, content, attrs);
