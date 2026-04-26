import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

const BG =
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80';

export function ComponentImageBackgroundScreen() {
  return (
    <ExampleLayout
      title="ImageBackground"
      description="ImageBackground is a specialized View that paints an image behind its children—common for hero headers, cards, and splash-style panels."
      propsNote={`source — same as Image (uri or require)\nresizeMode — cover | contain | stretch | repeat (where supported)\nimageStyle — styles applied to the inner Image (e.g. borderRadius)`}
      morePropsNote={`onLoad, onLoadEnd, onError — like Image\ndefaultSource — placeholder while loading (static)\nUse Image when you do not need stacked children`}>
      <ImageBackground
        source={{ uri: BG }}
        style={styles.panel}
        imageStyle={styles.imageRadius}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.title}>Content on top</Text>
          <Text style={styles.sub}>
            Children render above the bitmap. Add a semi-transparent overlay View
            for readable text.
          </Text>
        </View>
      </ImageBackground>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  panel: {
    height: 160,
    borderRadius: 14,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imageRadius: {
    borderRadius: 14,
  },
  overlay: {
    backgroundColor: 'rgba(15,23,42,0.72)',
    padding: 14,
  },
  title: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  sub: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 18,
  },
});
