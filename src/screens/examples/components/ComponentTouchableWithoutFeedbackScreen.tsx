import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentTouchableWithoutFeedbackScreen() {
  const [taps, setTaps] = useState(0);

  return (
    <ExampleLayout
      title="TouchableWithoutFeedback"
      description="TouchableWithoutFeedback handles presses with no visual feedback. Useful for dismissing keyboards or closing overlays by tapping a backdrop. Prefer Pressable for interactive controls that need affordance."
      propsNote={`onPress, onLongPress, onPressIn, onPressOut\ndisabled\nhitSlop (via props on some platforms)`}
      morePropsNote={`No style prop on the touchable itself — wrap a View for layout.\nCommon pattern: wrap Modal backdrop to dismiss on outside tap.\nLegacy — Pressable with no pressed style can replace it.`}>
      <TouchableWithoutFeedback onPress={() => setTaps(t => t + 1)}>
        <View style={styles.area}>
          <Text style={styles.label}>Tap this area (no opacity / underlay)</Text>
          <Text style={styles.count}>Taps: {taps}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Text style={styles.note}>
        The press works, but nothing visually changes — that is intentional and
        why this API is rare for primary buttons.
      </Text>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  area: {
    minHeight: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: 'dashed',
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  label: {
    color: colors.textMuted,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 8,
  },
  count: {
    color: colors.accent,
    fontWeight: '700',
    fontSize: 18,
  },
  note: {
    marginTop: 12,
    fontSize: 12,
    lineHeight: 17,
    color: colors.textMuted,
  },
});
