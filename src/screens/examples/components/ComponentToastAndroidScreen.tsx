import React from 'react';
import { Platform, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentToastAndroidScreen() {
  if (Platform.OS !== 'android') {
    return (
      <ExampleLayout
        title="ToastAndroid"
        description="ToastAndroid shows a short native toast message. It is Android-only; on iOS use Alert, a custom snackbar, or a toast library."
        propsNote={`ToastAndroid.show(message, duration)\nToastAndroid.showWithGravity(message, duration, gravity)\nSHORT / LONG · TOP / CENTER / BOTTOM`}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            Android only — run on an Android emulator or device to see toasts.
          </Text>
        </View>
      </ExampleLayout>
    );
  }

  return (
    <ExampleLayout
      title="ToastAndroid"
      description="ToastAndroid shows a brief system toast at the bottom (or a chosen gravity). Use for lightweight, non-blocking feedback — not for critical confirmations."
      propsNote={`ToastAndroid.show(message, duration)\nToastAndroid.showWithGravity(message, duration, gravity)\nToastAndroid.showWithGravityAndOffset(…)\nSHORT / LONG · TOP / CENTER / BOTTOM`}
      morePropsNote={`No iOS equivalent in core RN.\nFor cross-platform snackbars, use a UI library or custom View.\nToasts auto-dismiss; they are not interactive.`}>
      <Pressable
        style={styles.btn}
        onPress={() =>
          ToastAndroid.show('Hello from ToastAndroid', ToastAndroid.SHORT)
        }>
        <Text style={styles.btnText}>show · SHORT</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() =>
          ToastAndroid.show('This stays a bit longer', ToastAndroid.LONG)
        }>
        <Text style={styles.btnText}>show · LONG</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() =>
          ToastAndroid.showWithGravity(
            'Centered toast',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
          )
        }>
        <Text style={styles.btnText}>showWithGravity · CENTER</Text>
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
});
