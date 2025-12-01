import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

export const GlobalStyles = () => {
  const scheme = useColorScheme();

  useEffect(() => {
    // Placeholder for global listeners (e.g., orientation, accessibility)
  }, []);

  return <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />;
};
