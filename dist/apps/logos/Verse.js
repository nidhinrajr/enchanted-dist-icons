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
var SvgVerse = function (props) {
    return (React.createElement("svg", __assign({ width: 24, height: 24, viewBox: "0 0 24 24" }, props),
        React.createElement("defs", null,
            React.createElement("linearGradient", { x1: "0%", y1: "49.995%", x2: "100.004%", y2: "49.995%", id: "verse_svg__b" },
                React.createElement("stop", { stopColor: "#BDD62F", offset: "0%" }),
                React.createElement("stop", { stopColor: "#00AFBC", offset: "100%" })),
            React.createElement("path", { id: "verse_svg__a", d: "M12.49.485L0 11.344l5.843-.014L9.02 8.19 12.491.485z" })),
        React.createElement("g", { fill: "none", fillRule: "evenodd" },
            React.createElement("path", { fill: "#8D8D8D", d: "M16.49 4l-3.471 7.705.03 4.506 4.533 4.304z" }),
            React.createElement("g", { transform: "translate(4 3.515)" },
                React.createElement("mask", { id: "verse_svg__c", fill: "#fff" },
                    React.createElement("use", { xlinkHref: "#verse_svg__a" })),
                React.createElement("path", { fill: "url(#verse_svg__b)", mask: "url(#verse_svg__c)", d: "M12.49.485L0 11.344l5.843-.014L9.02 8.19 12.491.485z" })))));
};
exports.default = SvgVerse;
