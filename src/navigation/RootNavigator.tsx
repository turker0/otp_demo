import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { ComponentActivityIndicatorScreen } from '../screens/examples/components/ComponentActivityIndicatorScreen';
import { ComponentButtonScreen } from '../screens/examples/components/ComponentButtonScreen';
import { ComponentFlatListScreen } from '../screens/examples/components/ComponentFlatListScreen';
import { ComponentImageBackgroundScreen } from '../screens/examples/components/ComponentImageBackgroundScreen';
import { ComponentImageScreen } from '../screens/examples/components/ComponentImageScreen';
import { ComponentKeyboardAvoidingScreen } from '../screens/examples/components/ComponentKeyboardAvoidingScreen';
import { ComponentModalScreen } from '../screens/examples/components/ComponentModalScreen';
import { ComponentPressableScreen } from '../screens/examples/components/ComponentPressableScreen';
import { ComponentRefreshControlScreen } from '../screens/examples/components/ComponentRefreshControlScreen';
import { ComponentScrollViewScreen } from '../screens/examples/components/ComponentScrollViewScreen';
import { ComponentSectionListScreen } from '../screens/examples/components/ComponentSectionListScreen';
import { ComponentStatusBarScreen } from '../screens/examples/components/ComponentStatusBarScreen';
import { ComponentSwitchScreen } from '../screens/examples/components/ComponentSwitchScreen';
import { ComponentTextInputScreen } from '../screens/examples/components/ComponentTextInputScreen';
import { ComponentTextScreen } from '../screens/examples/components/ComponentTextScreen';
import { ComponentTouchableOpacityScreen } from '../screens/examples/components/ComponentTouchableOpacityScreen';
import { ComponentViewScreen } from '../screens/examples/components/ComponentViewScreen';
import { LibraryKeyboardScreen } from '../screens/examples/libraries/LibraryKeyboardScreen';
import { LibrarySafeAreaScreen } from '../screens/examples/libraries/LibrarySafeAreaScreen';
import { StylingColorsBordersScreen } from '../screens/examples/styling/StylingColorsBordersScreen';
import { StylingFlexScreen } from '../screens/examples/styling/StylingFlexScreen';
import { StylingOpacityOverflowScreen } from '../screens/examples/styling/StylingOpacityOverflowScreen';
import { StylingPositionScreen } from '../screens/examples/styling/StylingPositionScreen';
import { StylingSizeTransformScreen } from '../screens/examples/styling/StylingSizeTransformScreen';
import { StylingSpacingScreen } from '../screens/examples/styling/StylingSpacingScreen';
import { StylingTypographyScreen } from '../screens/examples/styling/StylingTypographyScreen';
import { Advanced1ChatListScreen } from '../screens/homework/advanced/Advanced1ChatListScreen';
import { Advanced2SpotifyPlayerScreen } from '../screens/homework/advanced/Advanced2SpotifyPlayerScreen';
import { Advanced3TwitterFeedScreen } from '../screens/homework/advanced/Advanced3TwitterFeedScreen';
import { Beginner1LoginScreen } from '../screens/homework/beginner/Beginner1LoginScreen';
import { Beginner2SettingsScreen } from '../screens/homework/beginner/Beginner2SettingsScreen';
import { Beginner3TodoScreen } from '../screens/homework/beginner/Beginner3TodoScreen';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { StackDemoNavigator } from './demos/StackDemoNavigator';
import { TabDemoNavigator } from './demos/TabDemoNavigator';
import type { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.accent,
    background: '#f8fafc',
    card: '#ffffff',
    text: '#0f172a',
    border: '#e2e8f0',
    notification: colors.accentMuted,
  },
};

const AppDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: colors.accent,
    background: colors.background,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
    notification: colors.accentMuted,
  },
};

export function RootNavigator() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <NavigationContainer theme={isDark ? AppDarkTheme : AppLightTheme}>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: isDark ? colors.surface : '#ffffff' },
          headerTintColor: isDark ? colors.text : '#0f172a',
          headerTitleStyle: { fontWeight: '700' },
          contentStyle: {
            backgroundColor: isDark ? colors.background : '#f8fafc',
          },
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'RN Curriculum Demo' }}
        />
        <Stack.Screen name="CmpText" component={ComponentTextScreen} options={{ title: 'Text' }} />
        <Stack.Screen name="CmpView" component={ComponentViewScreen} options={{ title: 'View' }} />
        <Stack.Screen
          name="CmpImage"
          component={ComponentImageScreen}
          options={{ title: 'Image' }}
        />
        <Stack.Screen
          name="CmpImageBackground"
          component={ComponentImageBackgroundScreen}
          options={{ title: 'ImageBackground' }}
        />
        <Stack.Screen name="CmpButton" component={ComponentButtonScreen} options={{ title: 'Button' }} />
        <Stack.Screen
          name="CmpPressable"
          component={ComponentPressableScreen}
          options={{ title: 'Pressable' }}
        />
        <Stack.Screen
          name="CmpTouchableOpacity"
          component={ComponentTouchableOpacityScreen}
          options={{ title: 'TouchableOpacity' }}
        />
        <Stack.Screen
          name="CmpTextInput"
          component={ComponentTextInputScreen}
          options={{ title: 'TextInput' }}
        />
        <Stack.Screen
          name="CmpScrollView"
          component={ComponentScrollViewScreen}
          options={{ title: 'ScrollView' }}
        />
        <Stack.Screen
          name="CmpRefreshControl"
          component={ComponentRefreshControlScreen}
          options={{ title: 'RefreshControl' }}
        />
        <Stack.Screen
          name="CmpFlatList"
          component={ComponentFlatListScreen}
          options={{ title: 'FlatList' }}
        />
        <Stack.Screen
          name="CmpSectionList"
          component={ComponentSectionListScreen}
          options={{ title: 'SectionList' }}
        />
        <Stack.Screen name="CmpSwitch" component={ComponentSwitchScreen} options={{ title: 'Switch' }} />
        <Stack.Screen
          name="CmpActivityIndicator"
          component={ComponentActivityIndicatorScreen}
          options={{ title: 'ActivityIndicator' }}
        />
        <Stack.Screen name="CmpModal" component={ComponentModalScreen} options={{ title: 'Modal' }} />
        <Stack.Screen
          name="CmpKeyboardAvoiding"
          component={ComponentKeyboardAvoidingScreen}
          options={{ title: 'KeyboardAvoidingView' }}
        />
        <Stack.Screen
          name="CmpStatusBar"
          component={ComponentStatusBarScreen}
          options={{ title: 'StatusBar' }}
        />
        <Stack.Screen
          name="StyFlex"
          component={StylingFlexScreen}
          options={{ title: 'Flex & layout' }}
        />
        <Stack.Screen
          name="StySpacing"
          component={StylingSpacingScreen}
          options={{ title: 'Margin & padding' }}
        />
        <Stack.Screen
          name="StyColorsBorders"
          component={StylingColorsBordersScreen}
          options={{ title: 'Colors & borders' }}
        />
        <Stack.Screen
          name="StyTypography"
          component={StylingTypographyScreen}
          options={{ title: 'Typography' }}
        />
        <Stack.Screen
          name="StyPosition"
          component={StylingPositionScreen}
          options={{ title: 'Position & z-index' }}
        />
        <Stack.Screen
          name="StySizeTransform"
          component={StylingSizeTransformScreen}
          options={{ title: 'Size & transform' }}
        />
        <Stack.Screen
          name="StyOpacityOverflow"
          component={StylingOpacityOverflowScreen}
          options={{ title: 'Opacity & overflow' }}
        />
        <Stack.Screen
          name="LibSafeArea"
          component={LibrarySafeAreaScreen}
          options={{ title: 'Safe Area Context' }}
        />
        <Stack.Screen
          name="LibKeyboard"
          component={LibraryKeyboardScreen}
          options={{ title: 'Keyboard Controller' }}
        />
        <Stack.Screen
          name="LibNavStack"
          component={StackDemoNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LibNavTabs"
          component={TabDemoNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HwBeginner1"
          component={Beginner1LoginScreen}
          options={{ title: 'Beginner #1' }}
        />
        <Stack.Screen
          name="HwBeginner2"
          component={Beginner2SettingsScreen}
          options={{ title: 'Beginner #2' }}
        />
        <Stack.Screen
          name="HwBeginner3"
          component={Beginner3TodoScreen}
          options={{ title: 'Beginner #3' }}
        />
        <Stack.Screen
          name="HwAdvanced1"
          component={Advanced1ChatListScreen}
          options={{ title: 'Advanced #1' }}
        />
        <Stack.Screen
          name="HwAdvanced2"
          component={Advanced2SpotifyPlayerScreen}
          options={{ title: 'Advanced #2' }}
        />
        <Stack.Screen
          name="HwAdvanced3"
          component={Advanced3TwitterFeedScreen}
          options={{ title: 'Advanced #3' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
