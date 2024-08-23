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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSvgIcon = void 0;
var React = __importStar(require("react"));
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var createElements = function (id, content) {
    var elements = content.map(function (item, index) {
        var props = __assign(__assign({}, item.attrs), { key: "".concat(id, "-").concat(index) });
        // the attribute 'fill-rule' are nor supported, remove this attribute form the properties
        Object.keys(props).forEach(function (key) {
            if (key === 'fill-rule') {
                delete props['fill-rule']; // eslint-disable-line
            }
        });
        return React.createElement(item.elem, props);
    });
    return (React.createElement(React.Fragment, { key: id }, elements));
};
var createSvgIcon = function (displayName, size, content, attrs) {
    var Component = React.memo(
    // eslint-why - because ref is a unknown type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    React.forwardRef(function (props, ref) {
        return (
        // eslint-why Syntax is necessary for implementation
        // eslint-disable-next-line react/jsx-props-no-spreading
        React.createElement(SvgIcon_1.default, __assign({}, props, { "data-mui-test": "".concat(displayName, "Icon"), ref: ref, viewBox: attrs.viewBox }), createElements("".concat(displayName, "Icon").concat(size), content)));
    }));
    return Component;
};
exports.createSvgIcon = createSvgIcon;
