import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  // 1. Core / Layout
  CmpView: undefined;
  CmpSafeAreaView: undefined;
  CmpScrollView: undefined;
  CmpKeyboardAvoiding: undefined;
  // 2. Text & Media
  CmpText: undefined;
  CmpImage: undefined;
  CmpImageBackground: undefined;
  // 3. Input
  CmpTextInput: undefined;
  CmpSwitch: undefined;
  // 4. Pressable / Touchable
  CmpPressable: undefined;
  CmpTouchableOpacity: undefined;
  CmpTouchableHighlight: undefined;
  CmpTouchableWithoutFeedback: undefined;
  CmpButton: undefined;
  // 5. List Views
  CmpFlatList: undefined;
  CmpSectionList: undefined;
  // 6. Feedback & Status
  CmpActivityIndicator: undefined;
  CmpRefreshControl: undefined;
  CmpAlert: undefined;
  CmpStatusBar: undefined;
  // 7. Overlay
  CmpModal: undefined;
  // 8. Styling & Layout Utilities
  CmpStyleSheet: undefined;
  CmpDimensions: undefined;
  CmpPixelRatio: undefined;
  // 9. Animation
  CmpAnimated: undefined;
  // 10. System / Navigation
  CmpLinking: undefined;
  CmpBackHandler: undefined;
  // 11. Platform-Specific
  CmpDrawerLayoutAndroid: undefined;
  CmpPermissionsAndroid: undefined;
  CmpToastAndroid: undefined;
  CmpActionSheetIOS: undefined;
  // Styling
  StyFlex: undefined;
  StySpacing: undefined;
  StyColorsBorders: undefined;
  StyTypography: undefined;
  StyPosition: undefined;
  StySizeTransform: undefined;
  StyOpacityOverflow: undefined;
  // Libraries
  LibSafeArea: undefined;
  LibKeyboard: undefined;
  LibNavStack: undefined;
  LibNavTabs: undefined;
  LibNavDrawer: undefined;
  LibFlashList: undefined;
  // Homework
  HwBeginner1: undefined;
  HwBeginner2: undefined;
  HwBeginner3: undefined;
  HwAdvanced1: undefined;
  HwAdvanced2: undefined;
  HwAdvanced3: undefined;
};

export type ExampleRoute = Exclude<keyof RootStackParamList, 'Welcome'>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
