import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentModalScreen() {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState<'none' | 'slide' | 'fade'>('slide');

  return (
    <ExampleLayout
      title="Modal"
      description="Modal presents content above the rest of the app. On Android, onRequestClose is required when hardware back can dismiss the modal."
      propsNote={`visible — boolean\nanimationType: none | slide | fade\ntransparent — use for custom dimmer\nonRequestClose — Android back / outside taps (when supported)\nstatusBarTranslucent (Android)`}
      morePropsNote={`presentationStyle (iOS): fullScreen | pageSheet | formSheet\nsupportedOrientations\nonShow, onDismiss (iOS)\nAvoid stacking many modals; consider navigation modals instead`}>
      <View style={styles.row}>
        {(['slide', 'fade', 'none'] as const).map(a => (
          <Pressable
            key={a}
            onPress={() => setAnimation(a)}
            style={[styles.chip, animation === a && styles.chipOn]}>
            <Text style={styles.chipText}>{a}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable style={styles.open} onPress={() => setOpen(true)}>
        <Text style={styles.openText}>Open modal ({animation})</Text>
      </Pressable>
      <Modal
        visible={open}
        animationType={animation}
        transparent
        onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <View onStartShouldSetResponder={() => true} style={styles.sheet}>
            <Text style={styles.sheetTitle}>Modal content</Text>
            <Text style={styles.sheetBody}>
              Tap dimmed area or Close to dismiss. onRequestClose runs on Android
              back.
            </Text>
            <Pressable style={styles.close} onPress={() => setOpen(false)}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  chipOn: {
    borderColor: colors.accent,
    backgroundColor: colors.accentMuted,
  },
  chipText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  open: {
    backgroundColor: colors.accent,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  openText: {
    color: '#0f172a',
    fontWeight: '700',
  },
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    padding: 24,
  },
  sheet: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 20,
  },
  sheetTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  sheetBody: {
    color: colors.textMuted,
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  close: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    backgroundColor: colors.surfaceMuted,
  },
  closeText: {
    color: colors.text,
    fontWeight: '600',
  },
});
