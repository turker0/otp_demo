import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme';

type Props = {
  title: string;
  body: string;
};

export function HomeworkHelper({ title, body }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  title: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 6,
  },
  body: {
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
});

