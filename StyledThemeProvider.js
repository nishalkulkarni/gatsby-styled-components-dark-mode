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
exports.StyledThemeProvider = void 0;
var react_1 = __importStar(require("react"));
var styled_components_1 = require("styled-components");
var ThemeManager_1 = require("./ThemeManager");
var StyledThemeProvider = function (props) {
    var children = props.children, darkTheme = props.darkTheme, lightTheme = props.lightTheme;
    var _a = (0, react_1.useContext)(ThemeManager_1.ThemeManagerContext), isDark = _a.isDark, didLoad = _a.didLoad;
    var currentTheme = isDark ? darkTheme : lightTheme;
    var theme = __assign({ isDark: isDark }, (didLoad ? currentTheme : transformTheme(currentTheme)));
    return (react_1.default.createElement(styled_components_1.ThemeProvider, { theme: theme },
        react_1.default.createElement(react_1.default.Fragment, null, children)));
};
exports.StyledThemeProvider = StyledThemeProvider;
var transformTheme = function (theme) {
    var newTheme = {};
    Object.keys(theme).forEach(function (key) {
        var value = theme[key];
        if (typeof value === "object" && !!value) {
            newTheme[key] = transformTheme(value);
        }
        else {
            newTheme[key] = "var(--".concat(key, ")");
        }
    });
    return newTheme;
};
