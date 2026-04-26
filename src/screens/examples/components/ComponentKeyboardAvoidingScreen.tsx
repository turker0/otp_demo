import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentKeyboardAvoidingScreen() {
  const [behavior] = useState<'padding' | 'height' | 'position'>(
    Platform.OS === 'ios' ? 'padding' : 'height',
  );

  return (
    <ExampleLayout
      title="KeyboardAvoidingView"
      description="Built-in RN wrapper that adjusts layout when the keyboard opens. Behavior differs by platform; test on both iOS and Android."
      propsNote={`behavior: padding | height | position (iOS)\nkeyboardVerticalOffset — add extra offset (e.g. header height)\nenabled — toggle avoidance`}
      morePropsNote={`Often combined with ScrollView or keyboardShouldPersistTaps\nFor complex chat UIs many teams prefer react-native-keyboard-controller\ncontentContainerStyle belongs on ScrollView, not here`}>
      <KeyboardAvoidingView
        behavior={behavior}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        style={styles.box}>
        <Text style={styles.label}>behavior on this device: {behavior}</Text>
        <TextInput
          placeholder="Focus me — keyboard shifts layout"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
        <TextInput
          placeholder="Second field"
          placeholderTextColor={colors.textMuted}
          style={styles.input}
        />
        <View style={styles.spacer} />
      </KeyboardAvoidingView>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  box: {
    minHeight: 200,
    justifyContent: 'flex-end',
  },
  label: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    color: colors.text,
    marginBottom: 8,
    backgroundColor: colors.surface,
  },
  spacer: {
    height: 8,
  },
});
