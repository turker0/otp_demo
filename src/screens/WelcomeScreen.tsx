import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { ExampleRoute, RootStackParamList } from '../navigation/types';
import { colors, spacing } from '../theme';

type Nav = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

/** Typed dynamic navigate — stack's navigate() union is stricter than ExampleRoute. */
function navigateToExample(navigation: Nav, route: ExampleRoute) {
  (navigation.navigate as (r: ExampleRoute, p?: undefined) => void)(route);
}

export type ExampleItem = {
  route: ExampleRoute;
  label: string;
  subtitle: string;
};

export const WELCOME_SECTIONS: { title: string; items: ExampleItem[] }[] = [
  {
    title: '1. Components',
    items: [
      {
        route: 'CmpText',
        label: 'Text',
        subtitle: 'Strings, nesting, truncation, accessibility',
      },
      {
        route: 'CmpView',
        label: 'View',
        subtitle: 'Layout, pointer events, accessibility container',
      },
      {
        route: 'CmpImage',
        label: 'Image',
        subtitle: 'URI, resizeMode, loading, blur, dimensions',
      },
      {
        route: 'CmpImageBackground',
        label: 'ImageBackground',
        subtitle: 'Full-bleed image with children on top',
      },
      {
        route: 'CmpButton',
        label: 'Button',
        subtitle: 'Cross-platform text button (limited styling)',
      },
      {
        route: 'CmpPressable',
        label: 'Pressable',
        subtitle: 'Press states, ripple, delay, hitSlop',
      },
      {
        route: 'CmpTouchableOpacity',
        label: 'TouchableOpacity',
        subtitle: 'Legacy opacity feedback touchable',
      },
      {
        route: 'CmpTextInput',
        label: 'TextInput',
        subtitle: 'Keyboard, return key, auto-cap, selection',
      },
      {
        route: 'CmpScrollView',
        label: 'ScrollView',
        subtitle: 'Vertical, horizontal, indicators, paging',
      },
      {
        route: 'CmpRefreshControl',
        label: 'RefreshControl',
        subtitle: 'Pull-to-refresh with ScrollView / FlatList',
      },
      {
        route: 'CmpFlatList',
        label: 'FlatList',
        subtitle: 'Virtualized rows, headers, separators, grid',
      },
      {
        route: 'CmpSectionList',
        label: 'SectionList',
        subtitle: 'Section headers and grouped data',
      },
      {
        route: 'CmpSwitch',
        label: 'Switch',
        subtitle: 'Boolean toggle, colors, ios_backgroundColor',
      },
      {
        route: 'CmpActivityIndicator',
        label: 'ActivityIndicator',
        subtitle: 'Spinner size, color, animating',
      },
      {
        route: 'CmpModal',
        label: 'Modal',
        subtitle: 'Overlay, presentation, Android back',
      },
      {
        route: 'CmpKeyboardAvoiding',
        label: 'KeyboardAvoidingView',
        subtitle: 'Built-in RN keyboard avoidance',
      },
      {
        route: 'CmpStatusBar',
        label: 'StatusBar',
        subtitle: 'Bar style, backgroundColor, hidden',
      },
    ],
  },
  {
    title: '2. Styling',
    items: [
      {
        route: 'StyFlex',
        label: 'Flex and layout',
        subtitle: 'flexDirection, justifyContent, alignItems, flex',
      },
      {
        route: 'StySpacing',
        label: 'Margin and padding',
        subtitle: 'Spacing box model in React Native',
      },
      {
        route: 'StyColorsBorders',
        label: 'Colors and borders',
        subtitle: 'backgroundColor, borderRadius, shadows',
      },
      {
        route: 'StyTypography',
        label: 'Typography',
        subtitle: 'fontSize, fontWeight, lineHeight, textAlign',
      },
      {
        route: 'StyPosition',
        label: 'Position and z-index',
        subtitle: 'absolute, relative, top, left, zIndex',
      },
      {
        route: 'StySizeTransform',
        label: 'Size and transform',
        subtitle: 'width, height, min/max, aspectRatio, transform',
      },
      {
        route: 'StyOpacityOverflow',
        label: 'Opacity and overflow',
        subtitle: 'opacity, overflow hidden/visible',
      },
    ],
  },
  {
    title: '3. Libraries',
    items: [
      {
        route: 'LibSafeArea',
        label: 'Safe Area Context',
        subtitle: 'Insets for notches and home indicators',
      },
      {
        route: 'LibKeyboard',
        label: 'Keyboard Controller',
        subtitle: 'Keyboard-aware scrolling and provider',
      },
      {
        route: 'LibNavStack',
        label: 'React Navigation — stack',
        subtitle: 'Native stack push and pop',
      },
      {
        route: 'LibNavTabs',
        label: 'React Navigation — tabs',
        subtitle: 'Bottom tab navigator',
      },
    ],
  },
  {
    title: '4. Homework',
    items: [
      {
        route: 'HwBeginner1',
        label: 'Beginner #1 — Login',
        subtitle: 'Tokens provided (colors, spacing, radii)',
      },
      {
        route: 'HwBeginner2',
        label: 'Beginner #2 — Settings',
        subtitle: 'Tokens provided (grouped rows, spacing)',
      },
      {
        route: 'HwBeginner3',
        label: 'Beginner #3 — To‑Do',
        subtitle: 'Tokens provided (rows, chips, checkbox)',
      },
      {
        route: 'HwAdvanced1',
        label: 'Advanced #1 — Chat List',
        subtitle: 'Starter components provided (compose screen)',
      },
      {
        route: 'HwAdvanced2',
        label: 'Advanced #2 — Music Player',
        subtitle: 'Starter components provided (compose screen)',
      },
      {
        route: 'HwAdvanced3',
        label: 'Advanced #3 — X Feed',
        subtitle: 'Starter components provided (compose screen)',
      },
    ],
  },
];

type Props = {
  navigation: Nav;
};

export function WelcomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const isDark = scheme !== 'light';

  return (
    <ScrollView
      style={[styles.root, isDark && styles.rootDark]}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: insets.bottom + spacing.lg },
      ]}>
      <View style={styles.hero}>
        <Text style={[styles.heroTitle, isDark && styles.heroTitleDark]}>
          RN Curriculum Demo
        </Text>
        <Text style={[styles.heroSubtitle, isDark && styles.heroSubtitleDark]}>
          Core components, common styles, and essential libraries. Tap an item
          to open a focused example screen.
        </Text>
      </View>

      {WELCOME_SECTIONS.map(section => (
        <View key={section.title} style={styles.section}>
          <Text style={[styles.sectionTitle, isDark && styles.sectionTitleDark]}>
            {section.title}
          </Text>
          {section.items.map(item => (
            <Pressable
              key={item.route}
              onPress={() => navigateToExample(navigation, item.route)}
              style={({ pressed }) => [
                styles.card,
                isDark && styles.cardDark,
                pressed && styles.cardPressed,
              ]}>
              <Text style={[styles.cardTitle, isDark && styles.cardTitleDark]}>
                {item.label}
              </Text>
              <Text
                style={[styles.cardSubtitle, isDark && styles.cardSubtitleDark]}>
                {item.subtitle}
              </Text>
            </Pressable>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  rootDark: {
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
  },
  hero: {
    marginBottom: spacing.lg,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0f172a',
    marginBottom: spacing.sm,
  },
  heroTitleDark: {
    color: colors.text,
  },
  heroSubtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#64748b',
  },
  heroSubtitleDark: {
    color: colors.textMuted,
  },
  section: {
    marginBottom: spacing.lg,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: spacing.sm,
  },
  sectionTitleDark: {
    color: colors.text,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.sm,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardDark: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
  },
  cardPressed: {
    opacity: 0.85,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 4,
  },
  cardTitleDark: {
    color: colors.text,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
  },
  cardSubtitleDark: {
    color: colors.textMuted,
  },
});
