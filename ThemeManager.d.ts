import React, { ReactNode } from "react";
interface Props {
    children: ReactNode;
}
export declare enum ThemeSetting {
    LIGHT = "light",
    DARK = "dark",
    SYSTEM = "system"
}
export declare const DarkThemeKey = "theme";
interface ThemeManager {
    isDark?: boolean;
    themeSetting: ThemeSetting;
    toggleDark(value?: boolean): void;
    changeThemeSetting: (setting: ThemeSetting) => void;
    didLoad: boolean;
}
export declare const ThemeManagerContext: React.Context<ThemeManager>;
export declare const ThemeManagerProvider: (props: Props) => React.JSX.Element;
export {};
