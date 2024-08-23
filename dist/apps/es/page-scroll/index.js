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
            d: "M12 21.0001H2.99999C2.79987 21.0121 2.59947 20.9816 2.41203 20.9105C2.22459 20.8393 2.05437 20.7293 1.91261 20.5875C1.77085 20.4457 1.66077 20.2755 1.58965 20.0881C1.51852 19.9006 1.48796 \n        19.7002 1.49999 19.5001V10.5001C1.48796 10.3 1.51852 10.0996 1.58965 9.91216C1.66077 9.72472 1.77085 9.5545 1.91261 9.41273C2.05437 9.27097 2.22459 9.16089 2.41203 9.08977C2.59947 9.01864 \n        2.79987 8.98808 2.99999 9.00011H12C12.2001 8.98808 12.4005 9.01864 12.5879 9.08977C12.7754 9.16089 12.9456 9.27097 13.0874 9.41273C13.2291 9.5545 13.3392 9.72472 13.4103 9.91216C13.4815 \n        10.0996 13.512 10.3 13.5 10.5001V19.5001C13.512 19.7002 13.4815 19.9006 13.4103 20.0881C13.3392 20.2755 13.2291 20.4457 13.0874 20.5875C12.9456 20.7293 12.7754 20.8393 12.5879 \n        20.9105C12.4005 20.9816 12.2001 21.0121 12 21.0001ZM2.99999 10.5001V19.5001H12V10.5001H2.99999Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: "M16.5 14.2501H15V7.50011H7.49999V6.00011H15C15.2001 5.98808 15.4005 6.01864 15.5879 6.08977C15.7754 6.16089 15.9456 6.27097 16.0874 6.41273C16.2291 6.5545 16.3392 6.72472 16.4103 \n        6.91216C16.4815 7.0996 16.512 7.29999 16.5 7.50011V14.2501Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: "M19.5 10.5001H18V4.50011H12V3.00011H18C18.2001 2.98808 18.4005 3.01864 18.5879 3.08977C18.7754 3.16089 18.9456 3.27097 19.0874 3.41273C19.2291 3.5545 19.3392 3.72472 19.4103 \n      3.91216C19.4815 4.0996 19.512 4.29999 19.5 4.50011V10.5001Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
    {
        elem: 'path',
        attrs: {
            d: 'M18 12.7501V14.2501H20.1L16.5 18.3001V16.5001H15V21.0001H19.5V19.5001H17.4L21 15.4501V17.2501H22.5V12.7501H18Z',
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('page-scroll', 24, content, attrs);
