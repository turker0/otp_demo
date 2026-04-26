import React, { useState } from 'react';
import {
  Alert,
  Button,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentAlertScreen() {
  const [lastAction, setLastAction] = useState<string>('—');

  return (
    <ExampleLayout
      title="Alert"
      description="Alert shows a native dialog. Use it sparingly for confirmations and short messages; prefer in-app UI for frequent feedback."
      propsNote={`Alert.alert(title, message?, buttons?, options?)\n\ntitle — dialog title (required)\nmessage — optional body text\nbuttons — array of { text, onPress?, style?: default | cancel | destructive }\noptions — { cancelable } (Android)`}
      morePropsNote={`On Android, tapping outside dismisses when cancelable is true.\nAlert.prompt (iOS only) — text field in the alert for quick input.\nFor web, behavior depends on the implementation.`}>
      <Text style={styles.last}>
        Last result: <Text style={styles.lastMono}>{lastAction}</Text>
      </Text>
      <View style={styles.gap}>
        <Button
          title="Title only"
          onPress={() =>
            Alert.alert('Saved', undefined, undefined, {
              cancelable: true,
            })
          }
        />
      </View>
      <View style={styles.gap}>
        <Button
          title="Title and message"
          onPress={() =>
            Alert.alert(
              'Network',
              'Could not reach the server. Check your connection and try again.',
            )
          }
        />
      </View>
      <View style={styles.gap}>
        <Button
          title="Two actions (OK / Cancel)"
          onPress={() =>
            Alert.alert('Discard draft?', 'Your changes will be lost.', [
              { text: 'Cancel', style: 'cancel', onPress: () => setLastAction('Cancel') },
              {
                text: 'Discard',
                style: 'destructive',
                onPress: () => setLastAction('Discarded'),
              },
            ])
          }
        />
      </View>
      <View style={styles.gap}>
        <Button
          title="Three actions"
          onPress={() =>
            Alert.alert('Export', 'Choose a format.', [
              { text: 'Cancel', style: 'cancel', onPress: () => setLastAction('Cancel') },
              { text: 'PDF', onPress: () => setLastAction('PDF') },
              { text: 'CSV', onPress: () => setLastAction('CSV') },
            ])
          }
        />
      </View>
      {Platform.OS === 'ios' ? (
        <View style={styles.gap}>
          <Pressable
            style={styles.promptBtn}
            onPress={() =>
              Alert.prompt(
                'Rename',
                'Enter a new label',
                text => setLastAction(text ? `Renamed: ${text}` : '(empty)'),
                'plain-text',
                '',
                'default',
              )
            }>
            <Text style={styles.promptBtnText}>iOS: Alert.prompt</Text>
          </Pressable>
        </View>
      ) : (
        <Text style={styles.note}>Alert.prompt is only available on iOS.</Text>
      )}
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  last: {
    color: colors.textMuted,
    fontSize: 14,
    marginBottom: 12,
  },
  lastMono: {
    fontFamily: 'Menlo',
    color: colors.text,
  },
  gap: {
    marginBottom: 10,
  },
  promptBtn: {
    backgroundColor: colors.accentMuted,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  promptBtnText: {
    color: '#0f172a',
    fontWeight: '700',
  },
  note: {
    marginTop: 4,
    fontSize: 12,
    color: colors.textMuted,
    lineHeight: 17,
  },
});
