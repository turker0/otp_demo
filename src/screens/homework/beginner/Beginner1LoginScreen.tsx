import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeworkLayout } from '../../../homework/components/HomeworkLayout';
import { HomeworkHelper } from '../../../homework/components/HomeworkHelper';
import { STITCH_BASE_TOKENS } from '../../../homework/beginnerTokens';
import { HOMEWORK_IMAGES } from '../../../homework/refs';
import { colors } from '../../../theme';

/**
 * Beginner homework #1
 * Target: Login screen (StudentHub)
 *
 * The goal is to practice layout + TextInput styling + button styling.
 * You get the "magic numbers" below to speed up students.
 */
export const BEGINNER_1_TOKENS = {
  ...STITCH_BASE_TOKENS,
  magicNumbers: {
    ...STITCH_BASE_TOKENS.magicNumbers,
    titleSize: 32,
    subtitleSize: 14,
    fieldGap: 14,
    iconBox: 36,
  },
} as const;

export function Beginner1LoginScreen() {
  return (
    <HomeworkLayout
      title="Beginner #1 — Login"
      brief="Recreate the login UI: title, subtitle, two fields with left icons, and a wide rounded primary button."
      referenceSource={HOMEWORK_IMAGES.beginner1}
      referenceMaxHeightFraction={0.7}>
      <HomeworkHelper
        title="Provided tokens (use in your StyleSheet)"
        body="Use BEGINNER_1_TOKENS for colors, spacing, radius, and magic numbers. Try to match paddings, border radius, and typography."
      />
      <Text style={styles.code}>{toPrettyJson(BEGINNER_1_TOKENS)}</Text>

      <View style={styles.todo}>
        <Text style={styles.todoTitle}>TODO</Text>
        <Text style={styles.todoLine}>- Build the screen below this box.</Text>
        <Text style={styles.todoLine}>
          - Use View + Text + TextInput + Pressable.
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

