import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../theme';
import { HWAvatar, HWIconButton } from './HWPrimitives';

export type TweetCardProps = {
  name: string;
  handle: string;
  time: string;
  body: string;
  imageUri?: string;
  stats?: { replies: string; reposts: string; likes: string };
};

export function TweetCard({ name, handle, time, body, imageUri, stats }: TweetCardProps) {
  return (
    <View style={styles.wrap}>
      <HWAvatar initials={name.slice(0, 2).toUpperCase()} />
      <View style={styles.main}>
        <View style={styles.headerRow}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.meta} numberOfLines={1}>
            @{handle} · {time}
          </Text>
        </View>
        <Text style={styles.body}>{body}</Text>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} resizeMode="cover" />
        ) : null}
        <View style={styles.actions}>
          <View style={styles.action}>
            <HWIconButton icon="comment-outline" />
            <Text style={styles.actionText}>{stats?.replies ?? ''}</Text>
          </View>
          <View style={styles.action}>
            <HWIconButton icon="repeat" />
            <Text style={styles.actionText}>{stats?.reposts ?? ''}</Text>
          </View>
          <View style={styles.action}>
            <HWIconButton icon="heart-outline" />
            <Text style={styles.actionText}>{stats?.likes ?? ''}</Text>
          </View>
          <HWIconButton icon="share-outline" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: 14,
  },
  main: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 6,
  },
  name: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 14,
  },
  meta: {
    color: colors.textMuted,
    fontSize: 12,
  },
  body: {
    color: colors.text,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 14,
    backgroundColor: colors.surface,
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  actionText: {
    color: colors.textMuted,
    fontSize: 12,
    fontFamily: 'Menlo',
  },
});

