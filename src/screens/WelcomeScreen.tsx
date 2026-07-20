import React, {
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';
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
    title: '1. Core / Layout Components',
    items: [
      {
        route: 'CmpView',
        label: 'View',
        subtitle: 'Base container — layout, pointer events, a11y',
      },
      {
        route: 'CmpSafeAreaView',
        label: 'SafeAreaView',
        subtitle: 'Respects notches, status bars, home indicators',
      },
      {
        route: 'CmpScrollView',
        label: 'ScrollView',
        subtitle: 'Scrollable container — renders all children at once',
      },
      {
        route: 'CmpKeyboardAvoiding',
        label: 'KeyboardAvoidingView',
        subtitle: 'Shifts layout when the keyboard opens',
      },
    ],
  },
  {
    title: '2. Text & Media',
    items: [
      {
        route: 'CmpText',
        label: 'Text',
        subtitle: 'All text rendering — nesting, truncation, a11y',
      },
      {
        route: 'CmpImage',
        label: 'Image',
        subtitle: 'Static and remote images — resizeMode, loading',
      },
      {
        route: 'CmpImageBackground',
        label: 'ImageBackground',
        subtitle: 'Image as a background container with children',
      },
    ],
  },
  {
    title: '3. Input Components',
    items: [
      {
        route: 'CmpTextInput',
        label: 'TextInput',
        subtitle: 'Text and number entry — keyboard, return key',
      },
      {
        route: 'CmpSwitch',
        label: 'Switch',
        subtitle: 'Boolean toggle — colors, ios_backgroundColor',
      },
    ],
  },
  {
    title: '4. Pressable / Touchable Components',
    items: [
      {
        route: 'CmpPressable',
        label: 'Pressable',
        subtitle: 'Modern API — replaces the Touchable family',
      },
      {
        route: 'CmpTouchableOpacity',
        label: 'TouchableOpacity',
        subtitle: 'Legacy — opacity feedback while pressed',
      },
      {
        route: 'CmpTouchableHighlight',
        label: 'TouchableHighlight',
        subtitle: 'Legacy — underlay color while pressed',
      },
      {
        route: 'CmpTouchableWithoutFeedback',
        label: 'TouchableWithoutFeedback',
        subtitle: 'Legacy — press with no visual feedback',
      },
      {
        route: 'CmpButton',
        label: 'Button',
        subtitle: 'Simple pre-styled button (limited styling)',
      },
    ],
  },
  {
    title: '5. List Views (Performance-focused)',
    items: [
      {
        route: 'CmpFlatList',
        label: 'FlatList',
        subtitle: 'Virtualized list — contrast with ScrollView',
      },
      {
        route: 'CmpSectionList',
        label: 'SectionList',
        subtitle: 'Grouped/sectioned virtualized list',
      },
    ],
  },
  {
    title: '6. Feedback & Status Components',
    items: [
      {
        route: 'CmpActivityIndicator',
        label: 'ActivityIndicator',
        subtitle: 'Loading spinner — size, color, animating',
      },
      {
        route: 'CmpRefreshControl',
        label: 'RefreshControl',
        subtitle: 'Pull-to-refresh inside ScrollView / FlatList',
      },
      {
        route: 'CmpAlert',
        label: 'Alert',
        subtitle: 'Native alert dialogs — actions, iOS prompt',
      },
      {
        route: 'CmpStatusBar',
        label: 'StatusBar',
        subtitle: 'OS status bar style, color, visibility',
      },
    ],
  },
  {
    title: '7. Overlay Components',
    items: [
      {
        route: 'CmpModal',
        label: 'Modal',
        subtitle: 'Content above the app — presentation, back',
      },
    ],
  },
  {
    title: '8. Styling & Layout Utilities',
    items: [
      {
        route: 'CmpStyleSheet',
        label: 'StyleSheet',
        subtitle: 'Styling abstraction — create, hairline, absoluteFill',
      },
      {
        route: 'CmpDimensions',
        label: 'Dimensions',
        subtitle: 'Device screen size — prefer useWindowDimensions',
      },
      {
        route: 'CmpPixelRatio',
        label: 'PixelRatio',
        subtitle: 'Pixel density — layout units ↔ physical pixels',
      },
    ],
  },
  {
    title: '9. Animation',
    items: [
      {
        route: 'CmpAnimated',
        label: 'Animated',
        subtitle: 'Built-in animation — then learn Reanimated',
      },
    ],
  },
  {
    title: '10. System / Navigation APIs',
    items: [
      {
        route: 'CmpLinking',
        label: 'Linking',
        subtitle: 'Deep links and opening URLs',
      },
      {
        route: 'CmpBackHandler',
        label: 'BackHandler',
        subtitle: 'Android hardware / gesture back button',
      },
    ],
  },
  {
    title: '11. Platform-Specific',
    items: [
      {
        route: 'CmpDrawerLayoutAndroid',
        label: 'DrawerLayoutAndroid',
        subtitle: 'Android only — native sliding drawer',
      },
      {
        route: 'CmpPermissionsAndroid',
        label: 'PermissionsAndroid',
        subtitle: 'Android only — runtime permission requests',
      },
      {
        route: 'CmpToastAndroid',
        label: 'ToastAndroid',
        subtitle: 'Android only — short system toast messages',
      },
      {
        route: 'CmpActionSheetIOS',
        label: 'ActionSheetIOS',
        subtitle: 'iOS only — native action and share sheets',
      },
    ],
  },
  {
    title: '12. Styling',
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
    title: '13. Libraries',
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
      {
        route: 'LibNavDrawer',
        label: 'React Navigation — drawer',
        subtitle: 'Side drawer navigator',
      },
      {
        route: 'LibFlashList',
        label: 'Shopify FlashList',
        subtitle: 'High-performance virtualized list',
      },
    ],
  },
  {
    title: '14. Homework',
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

function filterSections(
  query: string,
): { title: string; items: ExampleItem[] }[] {
  const q = query.trim().toLowerCase();
  if (!q) {
    return WELCOME_SECTIONS;
  }
  return WELCOME_SECTIONS.map(section => ({
    title: section.title,
    items: section.items.filter(
      item =>
        item.label.toLowerCase().includes(q) ||
        item.subtitle.toLowerCase().includes(q) ||
        section.title.toLowerCase().includes(q),
    ),
  })).filter(s => s.items.length > 0);
}

type Props = {
  navigation: Nav;
};

export function WelcomeScreen({ navigation }: Props) {
  const insets = useSafeAreaInsets();
  const scheme = useColorScheme();
  const isDark = scheme !== 'light';
  const theme = useTheme();
  const searchRef = useRef<TextInput>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const filteredSections = useMemo(
    () => filterSections(searchQuery),
    [searchQuery],
  );

  const onSearchHeaderPress = useCallback(() => {
    searchRef.current?.focus();
  }, []);

  const renderHeaderSearch = useCallback(() => {
    return (
      <WelcomeHeaderSearch
        onPress={onSearchHeaderPress}
        accentColor={theme.colors.primary}
      />
    );
  }, [onSearchHeaderPress, theme.colors.primary]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: renderHeaderSearch,
    });
  }, [navigation, renderHeaderSearch]);

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
          Core APIs grouped by role, plus styling, libraries, and homework. Tap
          an item to open a focused example screen.
        </Text>
      </View>

      <TextInput
        ref={searchRef}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search by title or topic…"
        placeholderTextColor={isDark ? '#64748b' : '#94a3b8'}
        autoCorrect={false}
        autoCapitalize="none"
        clearButtonMode="while-editing"
        style={[
          styles.searchInput,
          isDark ? styles.searchInputDark : styles.searchInputLight,
        ]}
      />

      {filteredSections.length === 0 ? (
        <Text style={[styles.emptySearch, isDark && styles.emptySearchDark]}>
          No examples match “{searchQuery.trim()}”. Try another word.
        </Text>
      ) : null}

      {filteredSections.map(section => (
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
  headerSearchBtn: {
    paddingHorizontal: 4,
    paddingVertical: 6,
  },
  headerSearchLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: spacing.md,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: spacing.md,
  },
  searchInputLight: {
    backgroundColor: '#fff',
    borderColor: '#e2e8f0',
    color: '#0f172a',
  },
  searchInputDark: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    color: colors.text,
  },
  emptySearch: {
    fontSize: 15,
    color: '#64748b',
    marginBottom: spacing.md,
    lineHeight: 22,
  },
  emptySearchDark: {
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

type WelcomeHeaderSearchProps = {
  onPress: () => void;
  accentColor: string;
};

function WelcomeHeaderSearch({ onPress, accentColor }: WelcomeHeaderSearchProps) {
  return (
    <Pressable onPress={onPress} hitSlop={12} style={styles.headerSearchBtn}>
      <Text style={[styles.headerSearchLabel, { color: accentColor }]}>Search</Text>
    </Pressable>
  );
}
