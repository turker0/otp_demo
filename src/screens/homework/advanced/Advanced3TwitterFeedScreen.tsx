import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HomeworkLayout } from '../../../homework/components/HomeworkLayout';
import { HOMEWORK_IMAGES } from '../../../homework/refs';
import { HomeworkHelper } from '../../../homework/components/HomeworkHelper';
import { colors } from '../../../theme';
import { HWDivider, HWIconButton } from './components/HWPrimitives';
import { TweetCard } from './components/TweetCard';

const IMG1 =
  'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80';
const IMG2 =
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900&q=80';

export function Advanced3TwitterFeedScreen() {
  return (
    <HomeworkLayout
      title="Advanced #3 — X / Twitter Feed"
      brief="Recreate the feed. Use TweetCard + primitives and implement the exact top bar, bottom nav, and floating action button."
      referenceSource={HOMEWORK_IMAGES.advanced3}
      referenceMaxHeightFraction={0.62}>
      <HomeworkHelper
        title="Starter components"
        body="TweetCard demonstrates avatar, header meta, body, optional image and action row. Your homework is to match spacing, colors, and the app chrome."
      />
      <View style={styles.topBar}>
        <HWIconButton icon="account-circle" />
        <Text style={styles.topTitle}>X</Text>
        <HWIconButton icon="cog" />
      </View>
      <HWDivider />
      <TweetCard
        name="DevNews"
        handle="devnews"
        time="2h"
        body="The new v1.4.2 release is finally here! Focus on performance upgrades and dropping legacy support."
        imageUri={IMG1}
        stats={{ replies: '124', reposts: '89', likes: '1.2K' }}
      />
      <HWDivider />
      <TweetCard
        name="Earth Focus"
        handle="earthfocus"
        time="12h"
        body="Misty mornings in the Pacific Northwest. There is nothing quite like this calm."
        imageUri={IMG2}
        stats={{ replies: '312', reposts: '4.2K', likes: '32K' }}
      />
      <Text style={styles.note}>
        TODO: Add bottom tab bar + FAB (compose). Match dark theme colors and spacing from the reference.
      </Text>
    </HomeworkLayout>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  topTitle: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 16,
  },
  note: {
    marginTop: 12,
    color: colors.textMuted,
    fontSize: 12,
    lineHeight: 17,
  },
});

