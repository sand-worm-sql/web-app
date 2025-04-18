import type { ThemeVars } from "@mysten/dapp-kit";

export const darkTheme: ThemeVars = {
  blurs: {
    modalOverlay: "blur(0)",
  },
  backgroundColors: {
    primaryButton: "#F6F7F9",
    primaryButtonHover: "#ffffff10",
    outlineButtonHover: "#F4F4F5",
    modalOverlay: "rgba(24 36 53 / 20%)",
    modalPrimary: "black",
    modalSecondary: "#111",
    iconButton: "transparent",
    iconButtonHover: "#ffffff10",
    dropdownMenu: "#FFFFFF",
    dropdownMenuSeparator: "#F3F6F8",
    walletItemSelected: "#ffffff20",
    walletItemHover: "#3C424226",
  },
  borderColors: {
    outlineButton: "#E4E4E7",
  },
  colors: {
    primaryButton: "#373737",
    outlineButton: "#373737",
    iconButton: "#000000",
    body: "#fff",
    bodyMuted: "#ffffffcc",
    bodyDanger: "#FF794B",
  },
  radii: {
    small: "6px",
    medium: "8px",
    large: "12px",
    xlarge: "16px",
  },
  shadows: {
    primaryButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    walletItemSelected: "0px 2px 6px rgba(0, 0, 0, 0.05)",
  },
  fontWeights: {
    normal: "400",
    medium: "500",
    bold: "500",
  },
  fontSizes: {
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
  },
  typography: {
    fontFamily:
      '"DM Mono", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontStyle: "normal",
    lineHeight: "1.3",
    letterSpacing: "1",
  },
};
