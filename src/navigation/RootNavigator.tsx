import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OnboardingOne } from '../screens/onboarding/OnboardingOne';
import { OnboardingTwo } from '../screens/onboarding/OnboardingTwo';
import { OnboardingThree } from '../screens/onboarding/OnboardingThree';
import { MainTabs } from './MainTabs';
import { ActivityListScreen } from '../screens/activity/ActivityListScreen';
import { ActivityDetailScreen } from '../screens/activity/ActivityDetailScreen';
import { ActivityRunnerScreen } from '../screens/activity/ActivityRunnerScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { useAsyncStorageState } from '../hooks/useAsyncStorageState';
import { createTheme, ThemeMode } from '../theme/theme';
import { ThemeProvider } from 'styled-components/native';
import { GlobalStyles } from '../theme/GlobalStyles';

export type RootStackParamList = {
  OnboardingOne: undefined;
  OnboardingTwo: undefined;
  OnboardingThree: undefined;
  Main: undefined;
  ActivityList: { categoryId: string };
  ActivityDetail: { activityId: string };
  ActivityRunner: { activityId: string };
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const { value: themeMode } = useAsyncStorageState<ThemeMode>('theme', 'light');
  const theme = createTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer theme={themeMode === 'dark' ? DarkTheme : DefaultTheme}>
        <GlobalStyles />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="OnboardingOne" component={OnboardingOne} />
          <Stack.Screen name="OnboardingTwo" component={OnboardingTwo} />
          <Stack.Screen name="OnboardingThree" component={OnboardingThree} />
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="ActivityList" component={ActivityListScreen} />
          <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} />
          <Stack.Screen name="ActivityRunner" component={ActivityRunnerScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};
