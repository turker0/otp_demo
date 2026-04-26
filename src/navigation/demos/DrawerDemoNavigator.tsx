import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  createDrawerNavigator,
  type DrawerNavigationProp,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '../../components/Icon';
import { ExitToExamplesBar } from '../../components/ExitToExamplesBar';
import { colors, spacing } from '../../theme';

export type DrawerDemoParamList = {
  DrawerMain: undefined;
  DrawerSecondary: undefined;
};

const Drawer = createDrawerNavigator<DrawerDemoParamList>();

function SecondaryOpenDrawerHeaderButton() {
  const navigation = useNavigation<DrawerNavigationProp<DrawerDemoParamList>>();
  return (
    <Pressable
      accessibilityLabel="Open drawer"
      hitSlop={12}
      onPress={() => navigation.openDrawer()}
      style={({ pressed }) => [
        styles.headerIconBtn,
        pressed && styles.headerIconBtnPressed,
      ]}>
      <Icon name="menu-open" size={22} color={colors.text} />
    </Pressable>
  );
}

function DrawerMainScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.kicker}>@react-navigation/drawer</Text>
      <Text style={styles.title}>Drawer — main</Text>
      <Text style={styles.body}>
        Open the drawer with the header menu control or a swipe from the left
        edge. Drawer navigators often wrap a stack for each section.
      </Text>
    </View>
  );
}

function DrawerSecondaryScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.kicker}>Second drawer item</Text>
      <Text style={styles.title}>Drawer — secondary</Text>
      <Text style={styles.body}>
        Use drawerLabel, drawerIcon, and drawerItemStyle in options to customize
        the side menu. The menu icon in the top bar calls{' '}
        <Text style={styles.mono}>navigation.openDrawer()</Text> so users can open
        the drawer without swiping.
      </Text>
    </View>
  );
}

export function DrawerDemoNavigator() {
  return (
    <View style={styles.root}>
      <ExitToExamplesBar />
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface },
          headerTintColor: colors.text,
          headerTitleStyle: { fontWeight: '700' },
          drawerStyle: { backgroundColor: colors.surface },
          drawerActiveTintColor: colors.accent,
          drawerInactiveTintColor: colors.textMuted,
          sceneStyle: { backgroundColor: colors.background },
        }}>
        <Drawer.Screen
          name="DrawerMain"
          component={DrawerMainScreen}
          options={{ title: 'Main', drawerLabel: 'Main' }}
        />
        <Drawer.Screen
          name="DrawerSecondary"
          component={DrawerSecondaryScreen}
          options={{
            title: 'Secondary',
            drawerLabel: 'Secondary',
            headerRight: SecondaryOpenDrawerHeaderButton,
          }}
        />
      </Drawer.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
  },
  kicker: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.accent,
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.6,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.sm,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
    color: colors.textMuted,
  },
  mono: {
    fontFamily: 'Menlo',
    fontSize: 12,
    color: colors.text,
  },
  headerIconBtn: {
    marginRight: spacing.md,
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconBtnPressed: {
    opacity: 0.65,
  },
});
