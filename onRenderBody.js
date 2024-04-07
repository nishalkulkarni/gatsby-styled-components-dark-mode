"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onRenderBody = void 0;
var react_1 = __importDefault(require("react"));
var ThemeManager_1 = require("./ThemeManager");
var MagicScriptTag = function (props) {
    var codeToRunOnClient = "\n        (function() {\n            const themeFromLocalStorage = localStorage.getItem('".concat(ThemeManager_1.DarkThemeKey, "') || '").concat(ThemeManager_1.ThemeSetting.SYSTEM, "';\n            const systemDarkModeSetting = () => window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;\n            const isDarkModeActive = () => {\n                return !!systemDarkModeSetting()?.matches;\n            };\n            let colorMode;\n            switch (themeFromLocalStorage) {\n                case '").concat(ThemeManager_1.ThemeSetting.SYSTEM, "': {\n                  colorMode = isDarkModeActive() ? '").concat(ThemeManager_1.ThemeSetting.DARK, "' : '").concat(ThemeManager_1.ThemeSetting.LIGHT, "'\n                  break\n                }\n                case '").concat(ThemeManager_1.ThemeSetting.DARK, "':\n                case '").concat(ThemeManager_1.ThemeSetting.LIGHT, "':\n                  colorMode = themeFromLocalStorage\n                  break\n                default:\n                    colorMode = '").concat(ThemeManager_1.ThemeSetting.LIGHT, "'\n              }\n\n            const root = document.documentElement;\n\n            const iterate = (obj) => {\n                Object.keys(obj).forEach(key => {\n                    if (typeof obj[key] === 'object') {\n                        iterate(obj[key])\n                    } else {\n                        root.style.setProperty(\n                            \"--\" + key,\n                            obj[key]\n                        )\n                    }\n                })\n            }\n\n            const parsedTheme = JSON.parse('").concat(JSON.stringify(props.theme), "')\n            const theme = parsedTheme[colorMode]\n\n            iterate(theme)\n            root.style.setProperty('--initial-color-mode', colorMode);\n        })()\n    ");
    return react_1.default.createElement("script", { dangerouslySetInnerHTML: { __html: codeToRunOnClient } });
};
var onRenderBody = function (_a, theme) {
    var setPreBodyComponents = _a.setPreBodyComponents;
    setPreBodyComponents([
        react_1.default.createElement(MagicScriptTag, { key: "theme-injection", theme: theme }),
    ]);
};
exports.onRenderBody = onRenderBody;
