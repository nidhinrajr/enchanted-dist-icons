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
            d: "M3.75,12 C3.74904193,15.6521356 6.1499677,18.8700601 9.65114591,19.9092166 C13.1523241,20.9483732 16.92002,19.5613077\n         18.911625,16.5 L18.911625,16.5 L15,16.5 L15,15 L21,15 L21,21 L19.5,21 L19.5,18.236325 C16.8726494,21.3927196\n          12.5496296,22.5652371 8.68747602,21.1689678 C4.82532244,19.7726986 2.25151667,16.1067987 2.25,12 L2.25,12 Z M4.5,5.763675\n           C7.12735056,2.60728035 11.4503704,1.43476288 15.312524,2.83103215 C19.1746776,4.22730143 21.7484833,7.89320127 21.75,12 L21.75,12 L20.25,12 C20.2509581,8.34786442\n            17.8500323,5.12993991 14.3488541,4.09078336 C10.8476759,3.05162681 7.07998004,4.43869234 5.088375,7.5 L5.088375,7.5 L9,7.5 L9,9 L3,9 L3,3 L4.5,3 Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'polygon',
        attrs: {
            points: '17.5 9.05 16.45 8 10.75 13.7 8.05 11 7 12.05 10.75 15.8',
            fill: 'currentColor',
            stroke: 'none',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('status-success', 24, content, attrs);
