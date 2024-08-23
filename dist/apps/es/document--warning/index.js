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
            d: "M6 21.0001H10.5V22.5001H6C5.60218 22.5001 5.22067 22.342 4.93936 22.0607C4.65806 21.7794 4.5 21.3979 4.5 21.0001V3.00006C4.5 2.60224 4.65806 2.22071 4.93936 1.9394C5.22067 1.6581 5.60218\n        1.50006 6 1.50006H13.5C13.5986 1.49742 13.6965 1.51616 13.7872 1.555C13.8778 1.59384 13.9589 1.65186 14.025 1.72507L19.275 6.97507C19.3482 7.04113 19.4062 7.12226 19.4451 7.21289C19.4839\n        7.30352 19.5026 7.40149 19.5 7.50006V10.5001H18V9.00006H13.5C13.1022 9.00006 12.7207 8.84203 12.4394 8.56072C12.1581 8.27942 12 7.89789 12 7.50006V3.00006H6V21.0001ZM17.7 7.50006L13.5\n        3.30006V7.50006H17.7Z",
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
            d: "M17.25 22.4996C16.2116 22.4996 15.1966 22.1917 14.3333 21.6149C13.4699 21.038 12.797 20.218 12.3996 19.2587C12.0023 18.2994 11.8983 17.2438 12.1009 16.2254C12.3035 15.207 12.8035 14.2716\n        13.5377 13.5373C14.2719 12.8031 15.2074 12.3031 16.2258 12.1005C17.2442 11.8979 18.2998 12.0019 19.2591 12.3993C20.2184 12.7966 21.0383 13.4696 21.6152 14.3329C22.1921 15.1963 22.5 16.2113\n        22.5 17.2496C22.5 18.642 21.9469 19.9774 20.9623 20.9619C19.9778 21.9465 18.6424 22.4996 17.25 22.4996ZM16.6875 14.2496H17.8125V17.9996H16.6875V14.2496ZM17.25 20.1925C17.1017 20.1925 16.9567\n        20.1486 16.8333 20.0661C16.71 19.9837 16.6139 19.8666 16.5571 19.7296C16.5003 19.5925 16.4855 19.4417 16.5144 19.2962C16.5434 19.1507 16.6148 19.0171 16.7197 18.9122C16.8246 18.8073 16.9582\n        18.7359 17.1037 18.707C17.2492 18.678 17.4 18.6929 17.537 18.7496C17.6741 18.8064 17.7912 18.9025 17.8736 19.0259C17.956 19.1492 18 19.2942 18 19.4425C18 19.6415 17.921 19.8322 17.7803\n        19.9729C17.6397 20.1135 17.4489 20.1925 17.25 20.1925Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('document--warning', 24, content, attrs);
