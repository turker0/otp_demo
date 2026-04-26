import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

const REMOTE =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80';

export function ComponentImageScreen() {
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);

  return (
    <ExampleLayout
      title="Image"
      description="Image loads bitmap assets from the network or bundled require(). Use resizeMode to control scaling inside the frame."
      propsNote={`source={{ uri, headers, cache }} or require()\nresizeMode: cover | contain | stretch | center | repeat\nonLoad, onLoadEnd, onError, onLoadStart`}
      morePropsNote={`defaultSource — local placeholder (require)\nblurRadius — blur bitmap (costly on large images)\nloadingIndicatorSource (Android) — spinner while loading\nfadeDuration (Android default 300ms)\naccessibilityLabel for screen readers`}>
      <Text style={styles.label}>resizeMode=&quot;cover&quot;</Text>
      <Image
        source={{ uri: REMOTE }}
        style={styles.hero}
        resizeMode="cover"
        blurRadius={0}
        onLoad={e => {
          const w = e.nativeEvent.source?.width;
          const h = e.nativeEvent.source?.height;
          if (typeof w === 'number' && typeof h === 'number') {
            setDims({ w, h });
          }
        }}
      />
      {dims ? (
        <Text style={styles.meta}>
          Intrinsic size: {dims.w} × {dims.h}px
        </Text>
      ) : null}
      <View style={styles.row}>
        <View style={styles.thumbWrap}>
          <Text style={styles.label}>contain</Text>
          <Image
            source={{ uri: REMOTE }}
            style={styles.thumb}
            resizeMode="contain"
          />
        </View>
        <View style={styles.thumbWrap}>
          <Text style={styles.label}>blurRadius</Text>
          <Image
            source={{ uri: REMOTE }}
            style={styles.thumb}
            resizeMode="cover"
            blurRadius={6}
          />
        </View>
      </View>
      <Pressable
        style={styles.linkBtn}
        onPress={() => setDims(null)}
        accessibilityRole="button">
        <Text style={styles.linkBtnText}>Clear size log</Text>
      </Pressable>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  label: {
    color: colors.textMuted,
    fontSize: 12,
    marginBottom: 6,
  },
  hero: {
    width: '100%',
    height: 140,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: colors.surface,
  },
  meta: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: 12,
    fontFamily: 'Menlo',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  thumbWrap: {
    flex: 1,
  },
  thumb: {
    height: 100,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  linkBtn: {
    marginTop: 12,
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: colors.surfaceMuted,
  },
  linkBtnText: {
    color: colors.accent,
    fontWeight: '600',
    fontSize: 13,
  },
});
