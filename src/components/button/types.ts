// ABOUTME: Type definitions for Button component
// ABOUTME: Defines button variants and their CSS class mappings

export const ButtonVariants = ["default", "transparent", "contained"] as const;

export type ButtonVariant = (typeof ButtonVariants)[number];
