import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentTouchableHighlightScreen() {
  const [count, setCount] = useState(0);

  return (
    <ExampleLayout
      title="TouchableHighlight"
      description="TouchableHighlight shows an underlay color behind the child while pressed. It is a legacy API — prefer Pressable for new code, which can express the same feedback with style={({ pressed })."
      propsNote={`onPress, onLongPress\nunderlayColor — color shown while pressed\nactiveOpacity — opacity of the child while pressed\nstyle, disabled`}
      morePropsNote={`Must wrap a single child View (or element that can receive style).\nPressable supersedes this: use pressed state + backgroundColor instead.\nStill common in older codebases and tutorials.`}>
      <TouchableHighlight
        underlayColor={colors.accentMuted}
        activeOpacity={0.85}
        style={styles.btn}
        onPress={() => setCount(c => c + 1)}>
        <View style={styles.inner}>
          <Text style={styles.btnText}>Underlay on press · {count}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#334155"
        style={[styles.btn, styles.secondary]}
        onPress={() => setCount(0)}>
        <View style={styles.inner}>
          <Text style={styles.secondaryText}>Reset</Text>
        </View>
      </TouchableHighlight>
      <Text style={styles.note}>
        Teaching tip: Pressable replaced the Touchable* family because one API
        covers opacity, underlay, ripple, and custom pressed styles.
      </Text>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
    backgroundColor: colors.surface,
  },
  secondary: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  inner: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  btnText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  secondaryText: {
    color: colors.textMuted,
    fontWeight: '600',
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    lineHeight: 17,
    color: colors.textMuted,
  },
});
