import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../theme';
import { ComponentActionSheetIOSScreen } from '../screens/examples/components/ComponentActionSheetIOSScreen';
import { ComponentActivityIndicatorScreen } from '../screens/examples/components/ComponentActivityIndicatorScreen';
import { ComponentAlertScreen } from '../screens/examples/components/ComponentAlertScreen';
import { ComponentAnimatedScreen } from '../screens/examples/components/ComponentAnimatedScreen';
import { ComponentBackHandlerScreen } from '../screens/examples/components/ComponentBackHandlerScreen';
import { ComponentButtonScreen } from '../screens/examples/components/ComponentButtonScreen';
import { ComponentDimensionsScreen } from '../screens/examples/components/ComponentDimensionsScreen';
import { ComponentDrawerLayoutAndroidScreen } from '../screens/examples/components/ComponentDrawerLayoutAndroidScreen';
import { ComponentFlatListScreen } from '../screens/examples/components/ComponentFlatListScreen';
import { ComponentImageBackgroundScreen } from '../screens/examples/components/ComponentImageBackgroundScreen';
import { ComponentImageScreen } from '../screens/examples/components/ComponentImageScreen';
import { ComponentKeyboardAvoidingScreen } from '../screens/examples/components/ComponentKeyboardAvoidingScreen';
import { ComponentLinkingScreen } from '../screens/examples/components/ComponentLinkingScreen';
import { ComponentModalScreen } from '../screens/examples/components/ComponentModalScreen';
import { ComponentPermissionsAndroidScreen } from '../screens/examples/components/ComponentPermissionsAndroidScreen';
import { ComponentPixelRatioScreen } from '../screens/examples/components/ComponentPixelRatioScreen';
import { ComponentPressableScreen } from '../screens/examples/components/ComponentPressableScreen';
import { ComponentRefreshControlScreen } from '../screens/examples/components/ComponentRefreshControlScreen';
import { ComponentSafeAreaViewScreen } from '../screens/examples/components/ComponentSafeAreaViewScreen';
import { ComponentScrollViewScreen } from '../screens/examples/components/ComponentScrollViewScreen';
import { ComponentSectionListScreen } from '../screens/examples/components/ComponentSectionListScreen';
import { ComponentStatusBarScreen } from '../screens/examples/components/ComponentStatusBarScreen';
import { ComponentStyleSheetScreen } from '../screens/examples/components/ComponentStyleSheetScreen';
import { ComponentSwitchScreen } from '../screens/examples/components/ComponentSwitchScreen';
import { ComponentTextInputScreen } from '../screens/examples/components/ComponentTextInputScreen';
import { ComponentTextScreen } from '../screens/examples/components/ComponentTextScreen';
import { ComponentToastAndroidScreen } from '../screens/examples/components/ComponentToastAndroidScreen';
import { ComponentTouchableHighlightScreen } from '../screens/examples/components/ComponentTouchableHighlightScreen';
import { ComponentTouchableOpacityScreen } from '../screens/examples/components/ComponentTouchableOpacityScreen';
import { ComponentTouchableWithoutFeedbackScreen } from '../screens/examples/components/ComponentTouchableWithoutFeedbackScreen';
import { ComponentViewScreen } from '../screens/examples/components/ComponentViewScreen';
import { LibraryFlashListScreen } from '../screens/examples/libraries/LibraryFlashListScreen';
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
import { DrawerDemoNavigator } from './demos/DrawerDemoNavigator';
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
        {/* 1. Core / Layout */}
        <Stack.Screen name="CmpView" component={ComponentViewScreen} options={{ title: 'View' }} />
        <Stack.Screen
          name="CmpSafeAreaView"
          component={ComponentSafeAreaViewScreen}
          options={{ title: 'SafeAreaView' }}
        />
        <Stack.Screen
          name="CmpScrollView"
          component={ComponentScrollViewScreen}
          options={{ title: 'ScrollView' }}
        />
        <Stack.Screen
          name="CmpKeyboardAvoiding"
          component={ComponentKeyboardAvoidingScreen}
          options={{ title: 'KeyboardAvoidingView' }}
        />
        {/* 2. Text & Media */}
        <Stack.Screen name="CmpText" component={ComponentTextScreen} options={{ title: 'Text' }} />
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
        {/* 3. Input */}
        <Stack.Screen
          name="CmpTextInput"
          component={ComponentTextInputScreen}
          options={{ title: 'TextInput' }}
        />
        <Stack.Screen name="CmpSwitch" component={ComponentSwitchScreen} options={{ title: 'Switch' }} />
        {/* 4. Pressable / Touchable */}
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
          name="CmpTouchableHighlight"
          component={ComponentTouchableHighlightScreen}
          options={{ title: 'TouchableHighlight' }}
        />
        <Stack.Screen
          name="CmpTouchableWithoutFeedback"
          component={ComponentTouchableWithoutFeedbackScreen}
          options={{ title: 'TouchableWithoutFeedback' }}
        />
        <Stack.Screen name="CmpButton" component={ComponentButtonScreen} options={{ title: 'Button' }} />
        {/* 5. List Views */}
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
        {/* 6. Feedback & Status */}
        <Stack.Screen
          name="CmpActivityIndicator"
          component={ComponentActivityIndicatorScreen}
          options={{ title: 'ActivityIndicator' }}
        />
        <Stack.Screen
          name="CmpRefreshControl"
          component={ComponentRefreshControlScreen}
          options={{ title: 'RefreshControl' }}
        />
        <Stack.Screen name="CmpAlert" component={ComponentAlertScreen} options={{ title: 'Alert' }} />
        <Stack.Screen
          name="CmpStatusBar"
          component={ComponentStatusBarScreen}
          options={{ title: 'StatusBar' }}
        />
        {/* 7. Overlay */}
        <Stack.Screen name="CmpModal" component={ComponentModalScreen} options={{ title: 'Modal' }} />
        {/* 8. Styling & Layout Utilities */}
        <Stack.Screen
          name="CmpStyleSheet"
          component={ComponentStyleSheetScreen}
          options={{ title: 'StyleSheet' }}
        />
        <Stack.Screen
          name="CmpDimensions"
          component={ComponentDimensionsScreen}
          options={{ title: 'Dimensions' }}
        />
        <Stack.Screen
          name="CmpPixelRatio"
          component={ComponentPixelRatioScreen}
          options={{ title: 'PixelRatio' }}
        />
        {/* 9. Animation */}
        <Stack.Screen
          name="CmpAnimated"
          component={ComponentAnimatedScreen}
          options={{ title: 'Animated' }}
        />
        {/* 10. System / Navigation */}
        <Stack.Screen
          name="CmpLinking"
          component={ComponentLinkingScreen}
          options={{ title: 'Linking' }}
        />
        <Stack.Screen
          name="CmpBackHandler"
          component={ComponentBackHandlerScreen}
          options={{ title: 'BackHandler' }}
        />
        {/* 11. Platform-Specific */}
        <Stack.Screen
          name="CmpDrawerLayoutAndroid"
          component={ComponentDrawerLayoutAndroidScreen}
          options={{ title: 'DrawerLayoutAndroid' }}
        />
        <Stack.Screen
          name="CmpPermissionsAndroid"
          component={ComponentPermissionsAndroidScreen}
          options={{ title: 'PermissionsAndroid' }}
        />
        <Stack.Screen
          name="CmpToastAndroid"
          component={ComponentToastAndroidScreen}
          options={{ title: 'ToastAndroid' }}
        />
        <Stack.Screen
          name="CmpActionSheetIOS"
          component={ComponentActionSheetIOSScreen}
          options={{ title: 'ActionSheetIOS' }}
        />
        {/* Styling */}
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
        {/* Libraries */}
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
          name="LibNavDrawer"
          component={DrawerDemoNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LibFlashList"
          component={LibraryFlashListScreen}
          options={{ title: 'FlashList' }}
        />
        {/* Homework */}
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
