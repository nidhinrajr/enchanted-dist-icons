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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var SvgConnections = function (props) {
    return (React.createElement("svg", __assign({ id: "connections_svg__Layer_1", x: 0, y: 0, width: 24, height: 24, viewBox: "0 0 24 24", xmlSpace: "preserve" }, props),
        React.createElement("style", null, '.connections_svg__st0{fill-rule:evenodd;clip-rule:evenodd;fill:#8d8d8d}'),
        React.createElement("path", { className: "connections_svg__st0", d: "M20.77 9.65l-1.69-5.18-5.05 7.3z" }),
        React.createElement("linearGradient", { id: "connections_svg__SVGID_1_", gradientUnits: "userSpaceOnUse", x1: 101.067, y1: 8.787, x2: 108.934, y2: 8.787, gradientTransform: "matrix(1 0 -.4132 1 -92.34 0)" },
            React.createElement("stop", { offset: 0.124, stopColor: "#652d90" }),
            React.createElement("stop", { offset: 0.138, stopColor: "#6a2c8d" }),
            React.createElement("stop", { offset: 0.268, stopColor: "#912678" }),
            React.createElement("stop", { offset: 0.402, stopColor: "#b22166" }),
            React.createElement("stop", { offset: 0.539, stopColor: "#cc1d58" }),
            React.createElement("stop", { offset: 0.681, stopColor: "#de1a4e" }),
            React.createElement("stop", { offset: 0.831, stopColor: "#e91948" }),
            React.createElement("stop", { offset: 1, stopColor: "#ec1846" })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", fill: "url(#connections_svg__SVGID_1_)", d: "M10.43 5.38L3.69 12.2l9.19-3.21z" }),
        React.createElement("linearGradient", { id: "connections_svg__SVGID_2_", gradientUnits: "userSpaceOnUse", x1: 104.125, y1: 11.058, x2: 106.048, y2: 17.122, gradientTransform: "matrix(1 0 -.4132 1 -92.34 0)" },
            React.createElement("stop", { offset: 0.124, stopColor: "#652d90" }),
            React.createElement("stop", { offset: 0.138, stopColor: "#6a2c8d" }),
            React.createElement("stop", { offset: 0.268, stopColor: "#912678" }),
            React.createElement("stop", { offset: 0.402, stopColor: "#b22166" }),
            React.createElement("stop", { offset: 0.539, stopColor: "#cc1d58" }),
            React.createElement("stop", { offset: 0.681, stopColor: "#de1a4e" }),
            React.createElement("stop", { offset: 0.831, stopColor: "#e91948" }),
            React.createElement("stop", { offset: 1, stopColor: "#ec1846" })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", fill: "url(#connections_svg__SVGID_2_)", d: "M3.98 13.51l1.04 5.67 5.15-7.67z" }),
        React.createElement("linearGradient", { id: "connections_svg__SVGID_3_", gradientUnits: "userSpaceOnUse", x1: 106.837, y1: 16.68, x2: 113.686, y2: 16.68, gradientTransform: "matrix(1 0 -.4132 1 -92.34 0)" },
            React.createElement("stop", { offset: 0.124, stopColor: "#652d90" }),
            React.createElement("stop", { offset: 0.138, stopColor: "#6a2c8d" }),
            React.createElement("stop", { offset: 0.268, stopColor: "#912678" }),
            React.createElement("stop", { offset: 0.402, stopColor: "#b22166" }),
            React.createElement("stop", { offset: 0.539, stopColor: "#cc1d58" }),
            React.createElement("stop", { offset: 0.681, stopColor: "#de1a4e" }),
            React.createElement("stop", { offset: 0.831, stopColor: "#e91948" }),
            React.createElement("stop", { offset: 1, stopColor: "#ec1846" })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", fill: "url(#connections_svg__SVGID_3_)", d: "M9.86 14.16l-3.29 5.03 6.84.01z" }),
        React.createElement("path", { className: "connections_svg__st0", d: "M13.38 19.2l6.55-6.12-8.92 2.8z" }),
        React.createElement("linearGradient", { id: "connections_svg__SVGID_4_", gradientUnits: "userSpaceOnUse", x1: -516.687, y1: -888.212, x2: -514.597, y2: -881.621, gradientTransform: "matrix(-.8403 .8243 -.6501 -.5257 -992.89 -33.474)" },
            React.createElement("stop", { offset: 0.124, stopColor: "#652d90" }),
            React.createElement("stop", { offset: 0.138, stopColor: "#6a2c8d" }),
            React.createElement("stop", { offset: 0.268, stopColor: "#912678" }),
            React.createElement("stop", { offset: 0.402, stopColor: "#b22166" }),
            React.createElement("stop", { offset: 0.539, stopColor: "#cc1d58" }),
            React.createElement("stop", { offset: 0.681, stopColor: "#de1a4e" }),
            React.createElement("stop", { offset: 0.831, stopColor: "#e91948" }),
            React.createElement("stop", { offset: 1, stopColor: "#ec1846" })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", fill: "url(#connections_svg__SVGID_4_)", d: "M19.06 4.47l-7.51-.07 3.84 5.35z" })));
};
exports.default = SvgConnections;
