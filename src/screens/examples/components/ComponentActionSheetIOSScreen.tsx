import React, { useState } from 'react';
import {
  ActionSheetIOS,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentActionSheetIOSScreen() {
  const [last, setLast] = useState<string>('—');

  if (Platform.OS !== 'ios') {
    return (
      <ExampleLayout
        title="ActionSheetIOS"
        description="ActionSheetIOS shows the native iOS action sheet. On Android, use Alert with multiple buttons or a cross-platform bottom sheet library."
        propsNote={`ActionSheetIOS.showActionSheetWithOptions(options, callback)\nActionSheetIOS.showShareActionSheetWithOptions(…)`}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            iOS only — open this screen in the iOS Simulator to try the native
            action sheet.
          </Text>
        </View>
      </ExampleLayout>
    );
  }

  const showSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        title: 'Choose an action',
        message: 'Native iOS action sheet',
        options: ['Cancel', 'Save', 'Share', 'Delete'],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 3,
        userInterfaceStyle: 'dark',
      },
      buttonIndex => {
        const labels = ['Cancel', 'Save', 'Share', 'Delete'];
        setLast(labels[buttonIndex] ?? String(buttonIndex));
      },
    );
  };

  const showShare = () => {
    ActionSheetIOS.showShareActionSheetWithOptions(
      {
        message: 'Shared from the RN Curriculum Demo',
        url: 'https://reactnative.dev',
      },
      error => setLast(`share error: ${error}`),
      (success, method) =>
        setLast(success ? `shared via ${method ?? 'unknown'}` : 'share cancelled'),
    );
  };

  return (
    <ExampleLayout
      title="ActionSheetIOS"
      description="ActionSheetIOS presents the system action sheet and share sheet on iOS. Prefer it for platform-native menus; use Alert or a bottom-sheet library when you need Android parity."
      propsNote={`showActionSheetWithOptions({ options, cancelButtonIndex, destructiveButtonIndex, title?, message? }, cb)\nshowShareActionSheetWithOptions({ message?, url? }, errorCb, successCb)`}
      morePropsNote={`Android has no ActionSheetIOS — use Alert.alert with buttons or a library.\ndestructiveButtonIndex styles a red destructive action.\nanchor (iPad) — popover source.`}>
      <Text style={styles.status}>Last choice: {last}</Text>
      <Pressable style={styles.btn} onPress={showSheet}>
        <Text style={styles.btnText}>Show action sheet</Text>
      </Pressable>
      <Pressable style={[styles.btn, styles.secondary]} onPress={showShare}>
        <Text style={styles.secondaryText}>Show share sheet</Text>
      </Pressable>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
  },
  bannerText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
  status: {
    fontFamily: 'Menlo',
    fontSize: 12,
    color: colors.accent,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: colors.accentMuted,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 14,
  },
  secondary: {
    backgroundColor: colors.surfaceMuted,
  },
  secondaryText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 14,
  },
});
