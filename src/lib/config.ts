/**
 * App configuration read from the public environment at bundle time. Expo
 * inlines EXPO_PUBLIC_* variables, so each read is a plain property access.
 */
export const config = {
  apiBaseUrl: process.env.EXPO_PUBLIC_API_BASE_URL ?? 'https://api.copperpotbowls.example',
  env: (process.env.EXPO_PUBLIC_ENV ?? 'development') as 'development' | 'staging' | 'production',
};

export const isProduction = () => config.env === 'production';
