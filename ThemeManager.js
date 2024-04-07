"use strict";
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
exports.ThemeManagerProvider = exports.ThemeManagerContext = exports.DarkThemeKey = exports.ThemeSetting = void 0;
var react_1 = __importStar(require("react"));
var ThemeSetting;
(function (ThemeSetting) {
    ThemeSetting["LIGHT"] = "light";
    ThemeSetting["DARK"] = "dark";
    ThemeSetting["SYSTEM"] = "system";
})(ThemeSetting = exports.ThemeSetting || (exports.ThemeSetting = {}));
exports.DarkThemeKey = "theme";
var defaultState = {
    isDark: undefined,
    didLoad: false,
    themeSetting: ThemeSetting.SYSTEM,
    toggleDark: function () { return undefined; },
    changeThemeSetting: function () { return undefined; },
};
exports.ThemeManagerContext = (0, react_1.createContext)(defaultState);
var systemDarkModeSetting = function () {
    return window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
};
var isDarkModeActive = function () {
    var _a;
    // Assume that dark mode is not active if there's no system dark mode setting available
    return !!((_a = systemDarkModeSetting()) === null || _a === void 0 ? void 0 : _a.matches);
};
var ThemeManagerProvider = function (props) {
    var _a = (0, react_1.useState)(ThemeSetting.SYSTEM), themeSetting = _a[0], setThemeSetting = _a[1];
    var _b = (0, react_1.useState)(false), didLoad = _b[0], setDidLoad = _b[1];
    var _c = react_1.default.useState(), isDark = _c[0], setIsDark = _c[1];
    react_1.default.useEffect(function () {
        var root = window.document.documentElement;
        var initialColorValue = root.style.getPropertyValue("--initial-color-mode");
        setIsDark(initialColorValue === ThemeSetting.DARK);
        setDidLoad(true);
    }, []);
    var toggleDark = function (value) {
        var newIsDark = value !== null && value !== void 0 ? value : !isDark;
        var theme = newIsDark ? ThemeSetting.DARK : ThemeSetting.LIGHT;
        setIsDark(newIsDark);
        setThemeSetting(theme);
        localStorage.setItem(exports.DarkThemeKey, theme);
    };
    var changeThemeSetting = function (setting) {
        switch (setting) {
            case ThemeSetting.SYSTEM: {
                setIsDark(isDarkModeActive());
                break;
            }
            case ThemeSetting.LIGHT:
            case ThemeSetting.DARK:
                setIsDark(setting === ThemeSetting.DARK);
                break;
        }
        setThemeSetting(setting);
        localStorage.setItem(exports.DarkThemeKey, setting);
    };
    return (react_1.default.createElement(exports.ThemeManagerContext.Provider, { value: {
            isDark: isDark,
            toggleDark: toggleDark,
            themeSetting: themeSetting,
            changeThemeSetting: changeThemeSetting,
            didLoad: didLoad,
        } }, props.children));
};
exports.ThemeManagerProvider = ThemeManagerProvider;
