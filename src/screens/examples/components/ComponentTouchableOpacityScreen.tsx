import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentTouchableOpacityScreen() {
  const [log, setLog] = useState<string[]>([]);

  const push = (line: string) =>
    setLog(prev => [line, ...prev].slice(0, 5));

  return (
    <ExampleLayout
      title="TouchableOpacity"
      description="TouchableOpacity lowers opacity while pressed. It predates Pressable; new code usually prefers Pressable for richer feedback and hitSlop."
      propsNote={`onPress, onLongPress, onPressIn, onPressOut\nactiveOpacity — default ~0.2\nstyle, disabled\ndelayPressIn, delayPressOut, delayLongPress`}
      morePropsNote={`TouchableHighlight — underlay color on press\nTouchableWithoutFeedback — no visual feedback (rare)\nTouchableNativeFeedback — Android ripple wrapper (needs View child)`}>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.btn}
        onPress={() => push('press')}
        onLongPress={() => push('long press')}
        onPressIn={() => push('press in')}
        onPressOut={() => push('press out')}>
        <Text style={styles.btnText}>Tap / long-press me</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled style={[styles.btn, styles.disabled]}>
        <Text style={styles.btnTextMuted}>Disabled</Text>
      </TouchableOpacity>
      <Text style={styles.logLabel}>Recent events (newest first)</Text>
      {log.length === 0 ? (
        <Text style={styles.empty}>—</Text>
      ) : (
        log.map((line, i) => (
          <Text key={`${line}-${i}`} style={styles.logLine}>
            {line}
          </Text>
        ))
      )}
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.accentMuted,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  disabled: {
    opacity: 0.45,
  },
  btnText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  btnTextMuted: {
    color: colors.textMuted,
    fontWeight: '600',
  },
  logLabel: {
    marginTop: 8,
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 4,
  },
  empty: {
    color: colors.textMuted,
    fontSize: 13,
  },
  logLine: {
    color: colors.text,
    fontSize: 13,
    fontFamily: 'Menlo',
    marginBottom: 2,
  },
});
