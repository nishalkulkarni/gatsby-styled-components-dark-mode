import React, { ReactNode } from "react";
interface Props {
    children: ReactNode;
    darkTheme: Record<string, unknown>;
    lightTheme: Record<string, unknown>;
}
export declare const StyledThemeProvider: (props: Props) => React.JSX.Element;
export {};
