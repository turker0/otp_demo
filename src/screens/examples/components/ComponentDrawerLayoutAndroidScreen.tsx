import React, { useState } from 'react';
import {
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
  // DrawerLayoutAndroid is Android-only; typed via require on other platforms
} from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

let DrawerLayoutAndroid: typeof import('react-native').DrawerLayoutAndroid | null =
  null;
if (Platform.OS === 'android') {
  DrawerLayoutAndroid = require('react-native').DrawerLayoutAndroid;
}

export function ComponentDrawerLayoutAndroidScreen() {
  const [openSide, setOpenSide] = useState<'left' | 'right'>('left');
  const drawerRef = React.useRef<InstanceType<
    NonNullable<typeof DrawerLayoutAndroid>
  > | null>(null);

  if (Platform.OS !== 'android' || !DrawerLayoutAndroid) {
    return (
      <ExampleLayout
        title="DrawerLayoutAndroid"
        description="DrawerLayoutAndroid is the native Android sliding drawer. Prefer @react-navigation/drawer for cross-platform apps."
        propsNote={`drawerWidth, drawerPosition: left | right\nrenderNavigationView — drawer contents\nopenDrawer / closeDrawer via ref`}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            Android only — run on an Android emulator. For iOS + Android drawers,
            see Libraries → React Navigation — drawer.
          </Text>
        </View>
      </ExampleLayout>
    );
  }

  const Drawer = DrawerLayoutAndroid;

  return (
    <ExampleLayout
      title="DrawerLayoutAndroid"
      description="DrawerLayoutAndroid wraps content with a native Material drawer. It is Android-only; most apps use React Navigation's drawer instead for a unified API."
      propsNote={`drawerWidth, drawerPosition: left | right\ndrawerBackgroundColor\nrenderNavigationView={() => <View>…</View>}\nref.openDrawer() / closeDrawer()`}
      morePropsNote={`onDrawerOpen / onDrawerClose / onDrawerSlide\nkeyboardDismissMode\nPrefer @react-navigation/drawer for production (see Libraries).`}>
      <View style={styles.row}>
        {(['left', 'right'] as const).map(side => (
          <Pressable
            key={side}
            onPress={() => setOpenSide(side)}
            style={[styles.chip, openSide === side && styles.chipOn]}>
            <Text style={styles.chipText}>{side}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.drawerHost}>
        <Drawer
          ref={drawerRef}
          drawerWidth={220}
          drawerPosition={openSide}
          drawerBackgroundColor={colors.surface}
          renderNavigationView={() => (
            <View style={styles.nav}>
              <Text style={styles.navTitle}>Drawer menu</Text>
              <Text style={styles.navItem}>Home</Text>
              <Text style={styles.navItem}>Profile</Text>
              <Pressable onPress={() => drawerRef.current?.closeDrawer()}>
                <Text style={styles.navClose}>Close</Text>
              </Pressable>
            </View>
          )}>
          <View style={styles.main}>
            <Text style={styles.mainText}>Main content</Text>
            <Pressable
              style={styles.openBtn}
              onPress={() => drawerRef.current?.openDrawer()}>
              <Text style={styles.openBtnText}>Open drawer</Text>
            </Pressable>
          </View>
        </Drawer>
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
  },
  bannerText: {
    color: colors.textMuted,
    fontSize: 13,
    lineHeight: 19,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 10,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: colors.surfaceMuted,
  },
  chipOn: {
    backgroundColor: colors.accentMuted,
  },
  chipText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 13,
  },
  drawerHost: {
    height: 220,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  nav: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
  },
  navTitle: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 16,
    marginBottom: 16,
  },
  navItem: {
    color: colors.textMuted,
    fontSize: 14,
    marginBottom: 12,
  },
  navClose: {
    marginTop: 8,
    color: colors.accent,
    fontWeight: '700',
  },
  main: {
    flex: 1,
    backgroundColor: colors.demoBg,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  mainText: {
    color: colors.textMuted,
  },
  openBtn: {
    backgroundColor: colors.accent,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  openBtnText: {
    color: '#0f172a',
    fontWeight: '700',
  },
});
