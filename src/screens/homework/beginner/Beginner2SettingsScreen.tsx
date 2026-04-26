import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeworkLayout } from '../../../homework/components/HomeworkLayout';
import { HomeworkHelper } from '../../../homework/components/HomeworkHelper';
import { STITCH_BASE_TOKENS } from '../../../homework/beginnerTokens';
import { HOMEWORK_IMAGES } from '../../../homework/refs';
import { colors } from '../../../theme';

/**
 * Beginner homework #2
 * Target: Settings
 *
 * The goal is to practice grouped rows and consistent spacing.
 */
export const BEGINNER_2_TOKENS = {
  ...STITCH_BASE_TOKENS,
  magicNumbers: {
    ...STITCH_BASE_TOKENS.magicNumbers,
    rowHeight: 52,
    rowPaddingH: 14,
    groupRadius: 16,
    sectionGap: 18,
    chevronSize: 18,
  },
} as const;

export function Beginner2SettingsScreen() {
  return (
    <HomeworkLayout
      title="Beginner #2 — Settings"
      brief="Recreate grouped settings: page title, sections, rows with icons/text, chevrons and toggles (where shown)."
      referenceSource={HOMEWORK_IMAGES.beginner2}
      referenceMaxHeightFraction={0.7}>
      <HomeworkHelper
        title="Provided tokens (use in your StyleSheet)"
        body="Use BEGINNER_2_TOKENS. Focus on group containers, separators, and row alignment."
      />
      <Text style={styles.code}>{toPrettyJson(BEGINNER_2_TOKENS)}</Text>

      <View style={styles.todo}>
        <Text style={styles.todoTitle}>TODO</Text>
        <Text style={styles.todoLine}>- Implement a settings list under this box.</Text>
        <Text style={styles.todoLine}>
          - Use SectionList or map over arrays to build sections.
        </Text>
      </View>
    </HomeworkLayout>
  );
}

function toPrettyJson(value: unknown) {
  return JSON.stringify(value, null, 2);
}

const styles = StyleSheet.create({
  code: {
    fontFamily: 'Menlo',
    fontSize: 11,
    lineHeight: 16,
    color: colors.textMuted,
    backgroundColor: '#0b1220',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  todo: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: 12,
    backgroundColor: colors.surface,
  },
  todoTitle: {
    color: colors.text,
    fontWeight: '800',
    marginBottom: 6,
  },
  todoLine: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
});

