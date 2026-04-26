import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Welcome: undefined;
  CmpText: undefined;
  CmpView: undefined;
  CmpImage: undefined;
  CmpImageBackground: undefined;
  CmpButton: undefined;
  CmpPressable: undefined;
  CmpTouchableOpacity: undefined;
  CmpTextInput: undefined;
  CmpScrollView: undefined;
  CmpRefreshControl: undefined;
  CmpFlatList: undefined;
  CmpSectionList: undefined;
  CmpSwitch: undefined;
  CmpActivityIndicator: undefined;
  CmpModal: undefined;
  CmpKeyboardAvoiding: undefined;
  CmpStatusBar: undefined;
  StyFlex: undefined;
  StySpacing: undefined;
  StyColorsBorders: undefined;
  StyTypography: undefined;
  StyPosition: undefined;
  StySizeTransform: undefined;
  StyOpacityOverflow: undefined;
  LibSafeArea: undefined;
  LibKeyboard: undefined;
  LibNavStack: undefined;
  LibNavTabs: undefined;
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
