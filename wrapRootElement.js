"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRootElement = void 0;
var react_1 = __importDefault(require("react"));
var StyledThemeProvider_1 = require("./StyledThemeProvider");
var ThemeManager_1 = require("./ThemeManager");
var wrapRootElement = function (gatsbyRootProps, themeProps) {
    var _a = themeProps.dark, dark = _a === void 0 ? {} : _a, _b = themeProps.light, light = _b === void 0 ? {} : _b;
    return (react_1.default.createElement(ThemeManager_1.ThemeManagerProvider, null,
        react_1.default.createElement(StyledThemeProvider_1.StyledThemeProvider, { lightTheme: light, darkTheme: dark }, gatsbyRootProps.element)));
};
exports.wrapRootElement = wrapRootElement;
