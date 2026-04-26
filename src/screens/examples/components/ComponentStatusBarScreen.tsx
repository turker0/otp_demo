import React, { useCallback, useState } from 'react';
import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentStatusBarScreen() {
  const systemDark = useColorScheme() === 'dark';
  const [barStyle, setBarStyle] = useState<'light-content' | 'dark-content'>(
    systemDark ? 'light-content' : 'dark-content',
  );
  const [hidden, setHidden] = useState(false);

  useFocusEffect(
    useCallback(() => {
      return () => {
        StatusBar.setBarStyle(systemDark ? 'light-content' : 'dark-content');
        StatusBar.setHidden(false);
      };
    }, [systemDark]),
  );

  return (
    <ExampleLayout
      title="StatusBar"
      description="StatusBar controls the system status bar. Imperative helpers StatusBar.setBarStyle exist; declarative <StatusBar /> is convenient inside screens."
      propsNote={`barStyle: default | light-content | dark-content\nbackgroundColor (Android)\ntranslucent (Android)\nhidden — hide status bar`}
      morePropsNote={`animated — animate changes (where supported)\nUse useFocusEffect to reset when leaving a lesson screen\nAvoid fighting the root StatusBar from App.tsx on every leaf screen`}>
      <StatusBar barStyle={barStyle} hidden={hidden} />
      <Text style={styles.state}>
        barStyle={barStyle} · hidden={String(hidden)}
      </Text>
      <View style={styles.row}>
        <Pressable
          style={styles.btn}
          onPress={() =>
            setBarStyle(s => (s === 'light-content' ? 'dark-content' : 'light-content'))
          }>
          <Text style={styles.btnText}>Toggle barStyle</Text>
        </Pressable>
        <Pressable style={styles.btn} onPress={() => setHidden(h => !h)}>
          <Text style={styles.btnText}>Toggle hidden</Text>
        </Pressable>
      </View>
      <Text style={styles.note}>
        Watch the device status bar while toggling. Leaving this screen restores
        defaults via useFocusEffect cleanup.
      </Text>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  state: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 12,
    fontFamily: 'Menlo',
  },
  row: {
    gap: 10,
  },
  btn: {
    backgroundColor: colors.surfaceMuted,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: colors.text,
    fontWeight: '600',
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 17,
  },
});
