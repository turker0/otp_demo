import React, { useState } from 'react';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentButtonScreen() {
  const [presses, setPresses] = useState(0);

  return (
    <ExampleLayout
      title="Button"
      description="Button renders platform-styled text actions. It is simple and accessible but not very customizable; prefer Pressable for custom UI."
      propsNote={`title — visible label (required)\nonPress — handler\ndisabled — greys out and blocks presses\ncolor — iOS/tint accent (platform-specific)\naccessibilityLabel — override for VoiceOver`}
      morePropsNote={`testID — for tests\nhasTVPreferredFocus (tvOS)\nOn Android uses Material text button; on iOS system text button`}>
      <Text style={styles.count}>Press count: {presses}</Text>
      <View style={styles.gap}>
        <Button title="Primary action" onPress={() => setPresses(c => c + 1)} />
      </View>
      <View style={styles.gap}>
        <Button
          title="Disabled example"
          disabled
          onPress={() => Alert.alert('Should not fire')}
        />
      </View>
      {Platform.OS === 'ios' ? (
        <View style={styles.gap}>
          <Button
            title="iOS color prop"
            color={colors.accentMuted}
            onPress={() => Alert.alert('Colored', 'Uses color prop on iOS')}
          />
        </View>
      ) : (
        <Text style={styles.note}>Android ignores color on Button; use Pressable for fills.</Text>
      )}
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  count: {
    color: colors.textMuted,
    marginBottom: 12,
    fontSize: 14,
  },
  gap: {
    marginBottom: 10,
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 17,
  },
});
