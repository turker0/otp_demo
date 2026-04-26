import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { HomeworkLayout } from '../../../homework/components/HomeworkLayout';
import { HOMEWORK_IMAGES } from '../../../homework/refs';
import { HomeworkHelper } from '../../../homework/components/HomeworkHelper';
import { colors } from '../../../theme';
import { PlayerControls } from './components/PlayerControls';
import { HWIconButton } from './components/HWPrimitives';

const ALBUM =
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&q=80';

export function Advanced2SpotifyPlayerScreen() {
  return (
    <HomeworkLayout
      title="Advanced #2 — Music Player"
      brief="Recreate the player screen. Use PlayerControls + primitives and build the header, artwork, and extra rows."
      referenceSource={HOMEWORK_IMAGES.advanced2}
      referenceMaxHeightFraction={0.62}>
      <HomeworkHelper
        title="Starter components"
        body="Use PlayerControls for the middle chunk, then implement the rest: top bar, album art sizing, and bottom device row."
      />
      <View style={styles.header}>
        <HWIconButton icon="chevron-down" />
        <Text style={styles.headerTitle}>Now playing</Text>
        <HWIconButton icon="dots-horizontal" />
      </View>
      <Image source={{ uri: ALBUM }} style={styles.art} />
      <PlayerControls
        track="Deep Focus"
        artist="Earth Focus"
        progressLabel="1:18"
        durationLabel="3:12"
      />
      <View style={styles.bottomRow}>
        <Text style={styles.bottomText}>Device</Text>
        <HWIconButton icon="volume-medium" />
      </View>
    </HomeworkLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 12,
  },
  headerTitle: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  art: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 18,
    backgroundColor: colors.surface,
    marginBottom: 16,
  },
  bottomRow: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomText: {
    color: colors.textMuted,
    fontSize: 13,
  },
});

