import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentSwitchScreen() {
  const [on, setOn] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ExampleLayout
      title="Switch"
      description="Switch is a boolean control mapped to the platform toggle. It reports changes with onValueChange."
      propsNote={`value + onValueChange (controlled)\ntrackColor={{ false, true }}\nthumbColor — knob fill\ndisabled`}
      morePropsNote={`ios_backgroundColor — track color when off (iOS)\nthumbColor can vary with value on Android\nonValueChange receives boolean; derive side effects in handler\nConsider Switch for binary; use segmented controls for 3+ states`}>
      <View style={styles.row}>
        <Text style={styles.caption}>Notifications</Text>
        <Switch
          value={on}
          onValueChange={setOn}
          trackColor={{ false: colors.border, true: colors.accentMuted }}
          thumbColor={on ? colors.accent : '#f4f4f5'}
          ios_backgroundColor={colors.surfaceMuted}
        />
      </View>
      <Text style={styles.state}>State: {on ? 'on' : 'off'}</Text>
      <View style={[styles.row, styles.mt]}>
        <Text style={styles.caption}>Disabled off</Text>
        <Switch value={false} onValueChange={() => {}} disabled />
      </View>
      <View style={[styles.row, styles.mt]}>
        <Text style={styles.caption}>Themed (track)</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: '#64748b', true: '#334155' }}
          thumbColor={darkMode ? '#f8fafc' : '#cbd5e1'}
        />
      </View>
    </ExampleLayout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caption: {
    color: colors.text,
    fontSize: 16,
  },
  state: {
    marginTop: 8,
    color: colors.textMuted,
    fontSize: 14,
  },
  mt: {
    marginTop: 14,
  },
});
