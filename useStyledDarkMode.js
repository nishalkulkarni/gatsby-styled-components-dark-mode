"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStyledDarkMode = void 0;
var react_1 = require("react");
var ThemeManager_1 = require("./ThemeManager");
var useStyledDarkMode = function () {
    var _a = (0, react_1.useContext)(ThemeManager_1.ThemeManagerContext), isDark = _a.isDark, changeThemeSetting = _a.changeThemeSetting, toggleDark = _a.toggleDark, themeSetting = _a.themeSetting;
    return {
        isDark: isDark,
        changeThemeSetting: changeThemeSetting,
        toggleDark: toggleDark,
        themeSetting: themeSetting,
    };
};
exports.useStyledDarkMode = useStyledDarkMode;
