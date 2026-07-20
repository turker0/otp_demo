import React, { useEffect, useState } from 'react';
import {
  Alert,
  BackHandler,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentBackHandlerScreen() {
  const [armed, setArmed] = useState(false);
  const [log, setLog] = useState<string[]>([]);

  useEffect(() => {
    if (Platform.OS !== 'android' || !armed) {
      return;
    }
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      setLog(prev => [`blocked @ ${new Date().toLocaleTimeString()}`, ...prev].slice(0, 5));
      Alert.alert('Back intercepted', 'Handler returned true — default back was blocked.');
      return true;
    });
    return () => sub.remove();
  }, [armed]);

  if (Platform.OS !== 'android') {
    return (
      <ExampleLayout
        title="BackHandler"
        description="BackHandler listens for the Android hardware / gesture back button. It has no effect on iOS."
        propsNote={`BackHandler.addEventListener('hardwareBackPress', handler)\nReturn true to consume the event; false to let default navigation happen.`}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            Android only — open this screen on an Android emulator or device to
            try intercepting the back button.
          </Text>
        </View>
      </ExampleLayout>
    );
  }

  return (
    <ExampleLayout
      title="BackHandler"
      description="BackHandler listens for the Android hardware / gesture back button. Return true from the listener to consume the press (e.g. confirm before leaving); return false to allow the default action."
      propsNote={`BackHandler.addEventListener('hardwareBackPress', handler)\nhandler → true to consume, false to propagate\nRemove the subscription on unmount`}
      morePropsNote={`React Navigation already handles back; use this for custom exit confirmations.\niOS has no hardware back — use navigation headers / gestures instead.\nexitApp() exists but is discouraged for normal UX.`}>
      <Text style={styles.hint}>
        Toggle intercept, then press the system back button.
      </Text>
      <Pressable style={styles.toggle} onPress={() => setArmed(a => !a)}>
        <Text style={styles.toggleText}>
          Intercept back: {armed ? 'ON' : 'OFF'} (tap to toggle)
        </Text>
      </Pressable>
      {log.map((line, i) => (
        <Text key={`${line}-${i}`} style={styles.log}>
          {line}
        </Text>
      ))}
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
  hint: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 10,
  },
  toggle: {
    backgroundColor: colors.accentMuted,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },
  toggleText: {
    color: '#0f172a',
    fontWeight: '700',
  },
  log: {
    fontFamily: 'Menlo',
    fontSize: 12,
    color: colors.accent,
    marginBottom: 4,
  },
});
