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
            d: "M6 21H9V22.5H6C5.60218 22.5 5.22067 22.342 4.93936 22.0607C4.65806 21.7794 4.5 21.3978 4.5 21V3C4.5 2.60218 4.65806 2.22065 4.93936 1.93934C5.22067 1.65804 5.60218 1.5 6 1.5H13.5C13.5986\n        1.49736 13.6965 1.5161 13.7872 1.55494C13.8778 1.59378 13.9589 1.6518 14.025 1.725L19.275 6.975C19.3482 7.04107 19.4062 7.1222 19.4451 7.21283C19.4839 7.30346 19.5026 7.40143 19.5\n        7.5V10.5H18V9H13.5C13.1022 9 12.7207 8.84197 12.4394 8.56066C12.1581 8.27936 12 7.89783 12 7.5V3H6V21ZM17.7 7.5L13.5 3.3V7.5H17.7Z",
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
            d: "M20.0325 12.2174L22.2825 14.4674C22.3528 14.5371 22.4086 14.6201 22.4467 14.7115C22.4847 14.8029 22.5043 14.9009 22.5043 14.9999C22.5043 15.0989 22.4847 15.1969 22.4467 15.2883C22.4086\n        15.3797 22.3528 15.4627 22.2825 15.5324L15.3075 22.4999H12V19.1924L18.9675 12.2174C19.0372 12.1471 19.1202 12.0913 19.2116 12.0532C19.303 12.0151 19.401 11.9955 19.5 11.9955C19.599 11.9955\n        19.697 12.0151 19.7884 12.0532C19.8798 12.0913 19.9628 12.1471 20.0325 12.2174ZM13.5 20.9999H14.6925L18.4425 17.2499L17.25 16.0574L13.5 19.8074V20.9999ZM18.3075 14.9999L19.5 16.1924L20.6925\n        14.9999L19.5 13.8074L18.3075 14.9999Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('document--draft', 24, content, attrs);
