"use strict";
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
var Svg16 = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: 16, height: 16, fill: "none" }, props),
    React.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M7 13h3.5c.27 0 .52-.11.71-.29s.29-.44.29-.71V9.97l2.71 1.93c.07.05.16.08.25.09.09 0 .18-.01.26-.05s.15-.11.2-.18c.05-.08.07-.17.07-.26v-7c0-.09-.03-.18-.07-.26a.49.49 0 0 0-.46-.23c-.09 0-.18.04-.25.09L11.5 6.04V4c0-.27-.11-.52-.29-.71A1 1 0 0 0 10.5 3H2c-.27 0-.52.11-.71.29A1 1 0 0 0 1 4v3h1V4h8.5v3c0 .09.03.18.07.26a.49.49 0 0 0 .46.23c.09 0 .18-.04.25-.09l2.71-1.94v5.07L11.28 8.6a.54.54 0 0 0-.25-.09c-.09 0-.18.01-.26.05s-.15.11-.2.18c-.05.08-.07.17-.07.26v3H7z", clipRule: "evenodd" }),
    React.createElement("path", { fill: "#000", d: "m5.99 8.81-.7-.71-1.76 1.76L1.76 8.1l-.7.71 1.76 1.76-1.76 1.76.7.71 1.77-1.77 1.76 1.77.7-.71-1.76-1.76z" }))); };
exports.default = Svg16;
