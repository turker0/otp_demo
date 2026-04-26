export type BeginnerTokens = {
  colors: {
    background: string;
    surface: string;
    surfaceVariant: string;
    onBackground: string;
    onSurface: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    primary: string;
    primaryContainer: string;
    onPrimary: string;
    secondaryContainer: string;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    full: number;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  typography: {
    bodySm: { fontSize: number; lineHeight: number };
    bodyMd: { fontSize: number; lineHeight: number };
    bodyLg: { fontSize: number; lineHeight: number };
    labelSm: { fontSize: number; lineHeight: number };
    h3: { fontSize: number; lineHeight: number };
    h2: { fontSize: number; lineHeight: number };
    h1: { fontSize: number; lineHeight: number };
    display: { fontSize: number; lineHeight: number };
  };
  magicNumbers: {
    screenPadding: number;
    inputHeight: number;
    inputRadius: number;
    buttonHeight: number;
    buttonRadius: number;
    avatarSize: number;
    iconSize: number;
  };
};

/**
 * Base tokens extracted from Google Stitch Tailwind config in your homework HTML.
 * These are intended as "magic number hints" for beginner assignments.
 */
export const STITCH_BASE_TOKENS: BeginnerTokens = {
  colors: {
    background: '#f7f9ff',
    surface: '#f7f9ff',
    surfaceVariant: '#dee3ea',
    onBackground: '#171c21',
    onSurface: '#171c21',
    onSurfaceVariant: '#3f4851',
    outline: '#6f7883',
    outlineVariant: '#bfc7d3',
    primary: '#00629d',
    primaryContainer: '#1d9bf0',
    onPrimary: '#ffffff',
    secondaryContainer: '#fc8b2f',
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
  typography: {
    bodySm: { fontSize: 13, lineHeight: 18 },
    bodyMd: { fontSize: 15, lineHeight: 20 },
    bodyLg: { fontSize: 16, lineHeight: 24 },
    labelSm: { fontSize: 12, lineHeight: 14 },
    h3: { fontSize: 17, lineHeight: 22 },
    h2: { fontSize: 20, lineHeight: 24 },
    h1: { fontSize: 23, lineHeight: 28 },
    display: { fontSize: 30, lineHeight: 36 },
  },
  magicNumbers: {
    screenPadding: 16,
    inputHeight: 52,
    inputRadius: 10,
    buttonHeight: 52,
    buttonRadius: 26,
    avatarSize: 44,
    iconSize: 20,
  },
};

