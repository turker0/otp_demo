import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../theme';
import { HWAvatar } from './HWPrimitives';

export type ChatListItemProps = {
  name: string;
  preview: string;
  time: string;
  unreadCount?: number;
};

export function ChatListItem({ name, preview, time, unreadCount }: ChatListItemProps) {
  return (
    <View style={styles.row}>
      <HWAvatar initials={name.slice(0, 2).toUpperCase()} />
      <View style={styles.mid}>
        <View style={styles.topLine}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View style={styles.bottomLine}>
          <Text style={styles.preview} numberOfLines={1}>
            {preview}
          </Text>
          {typeof unreadCount === 'number' && unreadCount > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 10,
    alignItems: 'center',
  },
  mid: {
    flex: 1,
  },
  topLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: 10,
    marginBottom: 4,
  },
  name: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 14,
    flex: 1,
  },
  time: {
    color: colors.textMuted,
    fontSize: 12,
  },
  bottomLine: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  preview: {
    color: colors.textMuted,
    fontSize: 13,
    flex: 1,
  },
  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#0f172a',
    fontWeight: '800',
    fontSize: 12,
  },
});

