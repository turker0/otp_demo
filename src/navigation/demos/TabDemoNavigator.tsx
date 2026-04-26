import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ExitToExamplesBar } from '../../components/ExitToExamplesBar';
import { colors, spacing } from '../../theme';

export type TabDemoParamList = {
  TabHome: undefined;
  TabSettings: undefined;
};

const Tab = createBottomTabNavigator<TabDemoParamList>();

function TabHomeScreen() {
  return (
    <View style={styles.tabScreen}>
      <Text style={styles.title}>Home tab</Text>
      <Text style={styles.body}>
        Bottom tabs are ideal for top-level sections. Each tab can host its own
        stack navigator.
      </Text>
    </View>
  );
}

function TabSettingsScreen() {
  return (
    <View style={styles.tabScreen}>
      <Text style={styles.title}>Settings tab</Text>
      <Text style={styles.body}>
        tabBarLabel and tabBarIcon customize appearance. screenOptions on the tab
        navigator sets defaults for every tab.
      </Text>
    </View>
  );
}

export function TabDemoNavigator() {
  return (
    <View style={styles.root}>
      <ExitToExamplesBar />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopColor: colors.border,
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.textMuted,
        }}>
      <Tab.Screen
        name="TabHome"
        component={TabHomeScreen}
        options={{ title: 'Home', tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="TabSettings"
        component={TabSettingsScreen}
        options={{ title: 'Settings', tabBarLabel: 'Settings' }}
      />
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background,
  },
  tabScreen: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.md,
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
});
