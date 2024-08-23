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
var SvgSametime = function (props) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { x1: "0%", y1: "50.001%", x2: "100.001%", y2: "50.001%", id: "sametime_svg__b" },
                React.createElement("stop", { stopColor: "#EB1746", offset: "0%" }),
                React.createElement("stop", { stopColor: "#F48212", offset: "100%" })),
            React.createElement("path", { id: "sametime_svg__a", d: "M6.6.584L2.994 8.611 0 11h11.159l1.586-3.519H7.164L10.269.584z" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { fill: "#8D8D8D", d: "M13.81 5l-1.54 3.448h5.58l-3.104 6.898 5.57-.012-1.464-1.514L22.814 5z" }),
            React.createElement("g", { transform: "translate(2 7.867)" },
                React.createElement("mask", { id: "sametime_svg__c", fill: "#fff" },
                    React.createElement("use", { xlinkHref: "#sametime_svg__a" })),
                React.createElement("path", { fill: "url(#sametime_svg__b)", mask: "url(#sametime_svg__c)", d: "M6.6.584L2.994 8.611 0 11h11.159l1.586-3.519H7.164L10.269.584z" })))));
};
exports.default = SvgSametime;
