import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeworkLayout } from '../../../homework/components/HomeworkLayout';
import { HomeworkHelper } from '../../../homework/components/HomeworkHelper';
import { STITCH_BASE_TOKENS } from '../../../homework/beginnerTokens';
import { HOMEWORK_IMAGES } from '../../../homework/refs';
import { colors } from '../../../theme';

/**
 * Beginner homework #3
 * Target: To-Do list
 *
 * The goal is to practice list rows, check states, and small chips/buttons.
 */
export const BEGINNER_3_TOKENS = {
  ...STITCH_BASE_TOKENS,
  magicNumbers: {
    ...STITCH_BASE_TOKENS.magicNumbers,
    rowHeight: 56,
    checkbox: 22,
    chipHeight: 28,
    chipRadius: 14,
    listGap: 10,
  },
} as const;

export function Beginner3TodoScreen() {
  return (
    <HomeworkLayout
      title="Beginner #3 — To‑Do List"
      brief="Recreate the to‑do list: header, tabs/chips, rows with checkbox state, and a primary action button."
      referenceSource={HOMEWORK_IMAGES.beginner3}
      referenceMaxHeightFraction={0.7}>
      <HomeworkHelper
        title="Provided tokens (use in your StyleSheet)"
        body="Use BEGINNER_3_TOKENS. Try to match row height, chip radius, and list spacing."
      />
      <Text style={styles.code}>{toPrettyJson(BEGINNER_3_TOKENS)}</Text>

      <View style={styles.todo}>
        <Text style={styles.todoTitle}>TODO</Text>
        <Text style={styles.todoLine}>
          - Build a list of rows (FlatList) with checked/unchecked visuals.
        </Text>
        <Text style={styles.todoLine}>
          - Use Pressable to toggle state (local array in useState).
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

