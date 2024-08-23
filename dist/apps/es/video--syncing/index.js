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
    viewBox: '0 0 16 16',
    width: 16,
    height: 16,
};
var content = [
    {
        elem: 'path',
        attrs: {
            d: "M7 13H10.5C10.77 13 11.02 12.89 11.21 12.71C11.4 12.53 11.5 12.27 11.5 12V9.97L14.21 11.9\n          C14.28 11.95 14.37 11.98 14.46 11.99C14.55 11.99 14.64 11.98 14.72 11.94C14.8 11.9 14.87 11.83\n          14.92 11.76C14.97 11.68 14.99 11.59 14.99 11.5V4.5C14.99 4.41 14.96 4.32 14.92 4.24C14.87 4.16\n          14.8 4.1 14.72 4.06C14.64 4.02 14.55 4 14.46 4.01C14.37 4.01 14.28 4.05 14.21 4.1L11.5 6.04\n          V4C11.5 3.73 11.39 3.48 11.21 3.29C11.02 3.1 10.77 3 10.5 3H2C1.73 3 1.48 3.11 1.29 3.29C1.1\n          3.48 1 3.73 1 4V7H2V4H10.5V7C10.5 7.09 10.53 7.18 10.57 7.26C10.62 7.34 10.69 7.4 10.77 7.44\n          C10.85 7.48 10.94 7.5 11.03 7.49C11.12 7.49 11.21 7.45 11.28 7.4L13.99 5.46V10.53L11.28 8.6\n          C11.21 8.55 11.12 8.52 11.03 8.51C10.94 8.51 10.85 8.52 10.77 8.56C10.69 8.6 10.62 8.67 10.57\n          8.74C10.52 8.82 10.5 8.91 10.5 9V12H7V13Z",
            fill: 'currentColor',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: "M5.5 11.33C5.3 11.64 4.9 12.06 4.17 12.06C3.4 12.06 2.92 11.64 2.66 11.33H3.63V10.36H1V\n          12.99H1.97V12.04C2.37 12.5 3.08 13.06 4.18 13.06C5.65 13.06 6.4 11.95 6.61 11.33H5.5Z",
            fill: 'currentColor',
        },
    },
    {
        elem: 'path',
        attrs: {
            d: "M2.49989 9.23C2.69989 8.92 3.09989 8.5 3.82989 8.5\n          C4.59989 8.5 5.07989 8.92 5.33989 9.23H4.36989V10.2H6.99989\n          V7.57H6.02989V8.52C5.62989 8.06 4.91989 7.5 3.81989 7.5\n          C2.35989 7.5 1.59989 8.61 1.38989 9.23H2.49989Z",
            fill: 'currentColor',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('video--syncing', 16, content, attrs);
