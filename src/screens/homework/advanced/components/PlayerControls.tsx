import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../../theme';
import { HWIconButton } from './HWPrimitives';

export type PlayerControlsProps = {
  track: string;
  artist: string;
  progressLabel: string;
  durationLabel: string;
};

export function PlayerControls({
  track,
  artist,
  progressLabel,
  durationLabel,
}: PlayerControlsProps) {
  return (
    <View>
      <Text style={styles.track} numberOfLines={1}>
        {track}
      </Text>
      <Text style={styles.artist} numberOfLines={1}>
        {artist}
      </Text>
      <View style={styles.progressWrap}>
        <View style={styles.barBg}>
          <View style={styles.barFill} />
        </View>
        <View style={styles.timeRow}>
          <Text style={styles.time}>{progressLabel}</Text>
          <Text style={styles.time}>{durationLabel}</Text>
        </View>
      </View>
      <View style={styles.controlsRow}>
        <HWIconButton icon="repeat" />
        <HWIconButton icon="skip-previous" />
        <View style={styles.playCircle}>
          <Text style={styles.playText}>▶︎</Text>
        </View>
        <HWIconButton icon="skip-next" />
        <HWIconButton icon="shuffle-variant" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    color: colors.text,
    fontWeight: '900',
    fontSize: 18,
    marginBottom: 4,
  },
  artist: {
    color: colors.textMuted,
    fontSize: 13,
    marginBottom: 14,
  },
  progressWrap: {
    marginBottom: 14,
  },
  barBg: {
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.surfaceMuted,
    overflow: 'hidden',
  },
  barFill: {
    width: '45%',
    height: '100%',
    backgroundColor: colors.accent,
  },
  timeRow: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: colors.textMuted,
    fontSize: 12,
    fontFamily: 'Menlo',
  },
  controlsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  playCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playText: {
    color: '#0f172a',
    fontWeight: '900',
    fontSize: 20,
  },
});

