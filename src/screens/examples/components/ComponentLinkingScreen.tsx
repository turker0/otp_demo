import React, { useState } from 'react';
import { Alert, Linking, Pressable, StyleSheet, Text } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentLinkingScreen() {
  const [canOpen, setCanOpen] = useState<string>('—');

  const openUrl = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      setCanOpen(`${url} → ${supported ? 'supported' : 'unsupported'}`);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Cannot open', url);
      }
    } catch (e) {
      Alert.alert('Linking error', String(e));
    }
  };

  return (
    <ExampleLayout
      title="Linking"
      description="Linking opens URLs and handles deep links into your app. Use it for https links, mailto/tel schemes, and custom app schemes registered in native config."
      propsNote={`Linking.openURL(url)\nLinking.canOpenURL(url)\nLinking.openSettings() — app settings\nLinking.getInitialURL() / addEventListener('url', …)`}
      morePropsNote={`Deep links need native setup (Android intent filters / iOS associated domains).\nReact Navigation has its own linking config built on this API.\nAlways canOpenURL before openURL when the scheme may be missing.`}
    >
      <Text style={styles.status}>Last check: {canOpen}</Text>
      <Pressable
        style={styles.btn}
        onPress={() => openUrl('https://reactnative.dev')}
      >
        <Text style={styles.btnText}>Open reactnative.dev</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => openUrl('mailto:hello@example.com')}
      >
        <Text style={styles.btnText}>mailto: hello@example.com</Text>
      </Pressable>
      <Pressable style={styles.btn} onPress={() => Linking.openSettings()}>
        <Text style={styles.btnText}>Open app settings</Text>
      </Pressable>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  status: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 12,
    fontFamily: 'Menlo',
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
