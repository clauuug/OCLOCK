import { colors } from './colors';
import { typography } from './typography';

export type ThemeMode = 'light' | 'dark';

export const createTheme = (mode: ThemeMode = 'light') => {
  const isDark = mode === 'dark';
  return {
    colors: {
      ...colors,
      background: isDark ? colors.neutral.black : colors.neutral.background,
      card: isDark ? '#111826' : colors.neutral.white,
      text: isDark ? colors.neutral.white : colors.neutral.text,
      muted: isDark ? '#6B7280' : colors.neutral.border,
    },
    typography,
    mode,
    spacing: (factor: number) => factor * 8,
    shadow: {
      default: {
        shadowColor: '#000',
        shadowOpacity: 0.06,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
      },
    },
    radii: {
      sm: 8,
      md: 12,
      lg: 18,
      xl: 24,
    },
  } as const;
};

export type AppTheme = ReturnType<typeof createTheme>;
