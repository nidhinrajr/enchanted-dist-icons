import * as React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
export interface IIconContent {
    elem: string;
    attrs: any;
}
export interface IIconAttrs {
    xmlns: string;
    viewBox: string;
    width: number;
    height: number;
}
declare const createSvgIcon: (displayName: string, size: number, content: IIconContent[], attrs: IIconAttrs) => React.ComponentType<SvgIconProps<"svg", {}>>;
export { createSvgIcon, };
