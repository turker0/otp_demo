import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { ExitToExamplesBar } from '../../components/ExitToExamplesBar';
import { colors, spacing } from '../../theme';

export type StackDemoParamList = {
  StackHome: undefined;
  StackDetail: undefined;
};

const Stack = createNativeStackNavigator<StackDemoParamList>();

function StackHomeScreen({
  navigation,
}: NativeStackScreenProps<StackDemoParamList, 'StackHome'>) {
  return (
    <View style={styles.screen}>
      <Text style={styles.kicker}>@react-navigation/native-stack</Text>
      <Text style={styles.title}>Nested stack — home</Text>
      <Text style={styles.body}>
        This navigator is a child screen of the root stack. Push adds another
        screen on top inside this nested stack only.
      </Text>
      <Pressable
        style={({ pressed }) => [styles.btn, pressed && styles.btnPressed]}
        onPress={() => navigation.navigate('StackDetail')}>
        <Text style={styles.btnText}>Push detail</Text>
      </Pressable>
    </View>
  );
}

function StackDetailScreen({
  navigation,
}: NativeStackScreenProps<StackDemoParamList, 'StackDetail'>) {
  return (
    <View style={styles.screen}>
      <Text style={styles.kicker}>Pushed screen</Text>
      <Text style={styles.title}>Nested stack — detail</Text>
      <Text style={styles.body}>
        Use the header back action or the button below to pop.
      </Text>
      <Pressable
        style={({ pressed }) => [styles.btnSecondary, pressed && styles.btnPressed]}
        onPress={() => navigation.goBack()}>
        <Text style={styles.btnSecondaryText}>goBack()</Text>
      </Pressable>
    </View>
  );
}

export function StackDemoNavigator() {
  return (
    <View style={styles.root}>
      <ExitToExamplesBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.background },
        }}>
        <Stack.Screen name="StackHome" component={StackHomeScreen} />
        <Stack.Screen name="StackDetail" component={StackDetailScreen} />
      </Stack.Navigator>
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
    marginBottom: spacing.lg,
  },
  btn: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnPressed: {
    opacity: 0.85,
  },
  btnText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 16,
  },
  btnSecondary: {
    borderWidth: 1,
    borderColor: colors.border,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnSecondaryText: {
    color: colors.text,
    fontWeight: '600',
    fontSize: 16,
  },
});
