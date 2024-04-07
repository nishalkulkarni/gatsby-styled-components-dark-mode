export declare const useStyledDarkMode: () => {
    isDark: boolean | undefined;
    changeThemeSetting: (setting: import("./ThemeManager").ThemeSetting) => void;
    toggleDark: (value?: boolean | undefined) => void;
    themeSetting: import("./ThemeManager").ThemeSetting;
};
