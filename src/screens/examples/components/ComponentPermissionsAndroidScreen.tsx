import React, { useState } from 'react';
import {
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ExampleLayout } from '../../../components/ExampleLayout';
import { colors } from '../../../theme';

export function ComponentPermissionsAndroidScreen() {
  const [result, setResult] = useState<string>('—');

  if (Platform.OS !== 'android') {
    return (
      <ExampleLayout
        title="PermissionsAndroid"
        description="PermissionsAndroid requests dangerous permissions on Android (camera, location, storage, etc.). On iOS, use the platform-specific permission APIs or a library like react-native-permissions."
        propsNote={`PermissionsAndroid.request(permission)\nPermissionsAndroid.check(permission)\nPERMISSIONS.* constants`}>
        <View style={styles.banner}>
          <Text style={styles.bannerText}>
            Android only — open this screen on Android to request a sample
            permission (e.g. coarse location).
          </Text>
        </View>
      </ExampleLayout>
    );
  }

  const requestLocation = async () => {
    try {
      const status = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        {
          title: 'Location permission',
          message: 'Demo asks for coarse location to show the permission flow.',
          buttonPositive: 'Allow',
          buttonNegative: 'Deny',
        },
      );
      setResult(String(status));
    } catch (e) {
      setResult(`error: ${String(e)}`);
    }
  };

  const checkLocation = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
    );
    setResult(granted ? 'granted (check)' : 'not granted (check)');
  };

  return (
    <ExampleLayout
      title="PermissionsAndroid"
      description="PermissionsAndroid requests runtime (dangerous) permissions on Android. Declare them in AndroidManifest.xml first, then request at the moment of need."
      propsNote={`PermissionsAndroid.request(permission, rationale?)\nPermissionsAndroid.check(permission)\nPermissionsAndroid.requestMultiple([...])\nRESULTS: GRANTED | DENIED | NEVER_ASK_AGAIN`}
      morePropsNote={`Must match permissions in AndroidManifest.xml.\niOS uses Info.plist usage strings + different APIs.\nLibraries like react-native-permissions unify both platforms.`}>
      <Text style={styles.status}>Last result: {result}</Text>
      <Pressable style={styles.btn} onPress={requestLocation}>
        <Text style={styles.btnText}>Request ACCESS_COARSE_LOCATION</Text>
      </Pressable>
      <Pressable style={[styles.btn, styles.secondary]} onPress={checkLocation}>
        <Text style={styles.secondaryText}>Check current status</Text>
      </Pressable>
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
  status: {
    fontFamily: 'Menlo',
    fontSize: 12,
    color: colors.accent,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: colors.accentMuted,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  btnText: {
    color: '#0f172a',
    fontWeight: '700',
    fontSize: 14,
  },
  secondary: {
    backgroundColor: colors.surfaceMuted,
  },
  secondaryText: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 14,
  },
});
