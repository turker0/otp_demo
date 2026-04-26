import React, { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentTextInputScreen() {
  const [value, setValue] = useState('');
  const [secure, setSecure] = useState('secret');
  const [email, setEmail] = useState('');
  const [counted, setCounted] = useState('');

  return (
    <ExampleLayout
      title="TextInput"
      description="TextInput is the single-line or multiline field for user entry. Prefer controlled mode with value and onChangeText."
      propsNote={`placeholder, placeholderTextColor\nkeyboardType: default | email-address | numeric | phone-pad\nsecureTextEntry, editable, autoFocus`}
      morePropsNote={`autoCapitalize: none | sentences | words | characters\nautoCorrect, spellCheck (iOS)\nreturnKeyType, onSubmitEditing, blurOnSubmit\nmaxLength, clearButtonMode (iOS)\nscrollEnabled for tall multiline fields`}>
      <Text style={styles.label}>Controlled</Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Type here"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />
      <Text style={styles.echo}>Echo: {value || '—'}</Text>
      <Text style={[styles.label, styles.mt]}>Secure</Text>
      <TextInput
        value={secure}
        onChangeText={setSecure}
        secureTextEntry
        style={styles.input}
      />
      <Text style={[styles.label, styles.mt]}>email-address + autoCapitalize none</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="you@example.com"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />
      <Text style={[styles.label, styles.mt]}>maxLength 12</Text>
      <TextInput
        value={counted}
        onChangeText={setCounted}
        maxLength={12}
        placeholder="Up to 12 chars"
        placeholderTextColor={colors.textMuted}
        style={styles.input}
      />
      <Text style={styles.echo}>{counted.length}/12</Text>
      <Text style={[styles.label, styles.mt]}>Multiline</Text>
      <TextInput
        multiline
        numberOfLines={4}
        placeholder="Notes…"
        placeholderTextColor={colors.textMuted}
        style={[styles.input, styles.area]}
      />
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 6,
  },
  mt: {
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: colors.text,
    fontSize: 16,
    backgroundColor: colors.surface,
  },
  area: {
    minHeight: 96,
    textAlignVertical: 'top',
  },
  echo: {
    marginTop: 8,
    color: colors.textMuted,
    fontSize: 13,
  },
});
