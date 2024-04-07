import React, { ReactNode } from "react";
export interface ThemeConfigProps {
    dark?: Record<string, unknown>;
    light?: Record<string, unknown>;
}
interface GatsbyRootProps {
    element: ReactNode;
}
export declare const wrapRootElement: (gatsbyRootProps: GatsbyRootProps, themeProps: ThemeConfigProps) => React.JSX.Element;
export {};
