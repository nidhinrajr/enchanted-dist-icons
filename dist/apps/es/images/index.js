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
            d: "M12 9C12.445 9 12.88 8.86804 13.25 8.6208C13.62 8.37357 13.9085 8.02217 14.0788 7.61103C14.249 7.1999 14.2936 6.7475 14.2068 6.31104C14.12 5.87459 13.9057 5.47367 13.591 5.15901C13.2763\n        4.84434 12.8754 4.63005 12.4389 4.54323C12.0025 4.45642 11.5501 4.50097 11.1389 4.67127C10.7278 4.84157 10.3764 5.12996 10.1292 5.49997C9.88198 5.86998 9.75 6.30499 9.75 6.75C9.75 7.34674\n        9.98704 7.91903 10.409 8.34099C10.831 8.76295 11.4033 9 12 9ZM12 6C12.1483 6 12.2933 6.04399 12.4167 6.1264C12.54 6.20881 12.6362 6.32594 12.6929 6.46299C12.7497 6.60003 12.7645 6.75083\n        12.7356 6.89632C12.7066 7.0418 12.6352 7.17544 12.5303 7.28033C12.4254 7.38522 12.2918 7.45665 12.1463 7.48558C12.0008 7.51452 11.85 7.49968 11.713 7.44291C11.5759 7.38614 11.4588 7.29001\n        11.3764 7.16668C11.294 7.04334 11.25 6.89833 11.25 6.75C11.25 6.55109 11.329 6.36032 11.4697 6.21967C11.6103 6.07902 11.8011 6 12 6Z",
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
            d: "M3 1.5H17.25C17.6478 1.5 18.0293 1.65803 18.3106 1.93934C18.5919 2.22064 18.75 2.60218 18.75 3V4.5H21C21.8284 4.5 22.5 5.17157 22.5 6V21C22.5 21.8284 21.8284 22.5 21 22.5H6C5.17157 22.5\n        4.5 21.8284 4.5 21V18.75H3C2.60218 18.75 2.22067 18.592 1.93936 18.3107C1.65806 18.0294 1.5 17.6478 1.5 17.25V3C1.5 2.60218 1.65806 2.22064 1.93936 1.93934C2.22067 1.65803 2.60218 1.5 3\n        1.5ZM6 18.75V21H21V6H18.75V17.25C18.75 17.6478 18.5919 18.0294 18.3106 18.3107C18.0293 18.592 17.6478 18.75 17.25 18.75H6ZM3 17.25H17.25V16.5L13.5 12.75L12.3075 13.9425C12.0264 14.2219\n        11.6463 14.3787 11.25 14.3787C10.8537 14.3787 10.4736 14.2219 10.1925 13.9425L6 9.75L3 12.75V17.25ZM14.5575 11.6925L17.25 14.3775V3H3V10.6275L4.94252 8.6925C5.22356 8.41312 5.60372 8.25631\n        6 8.25631C6.39628 8.25631 6.77644 8.41312 7.05748 8.6925L11.25 12.8775L12.4425 11.6925C12.7236 11.4131 13.1037 11.2563 13.5 11.2563C13.8963 11.2563 14.2764 11.4131 14.5575 11.6925Z",
            fill: 'currentColor',
            stroke: 'none',
            strokeLinejoin: 'round',
            strokeMiterlimit: 10,
            fillRule: 'evenodd',
            clipRule: 'evenodd',
        },
    },
];
exports.default = (0, utils_1.createSvgIcon)('images', 24, content, attrs);
