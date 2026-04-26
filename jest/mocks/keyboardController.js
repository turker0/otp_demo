const React = require('react');
const { ScrollView, View } = require('react-native');

function KeyboardProvider({ children }) {
  return React.createElement(React.Fragment, null, children);
}

const KeyboardAwareScrollView = ScrollView;

module.exports = {
  KeyboardProvider,
  KeyboardAwareScrollView,
  KeyboardAvoidingView: View,
  KeyboardStickyView: View,
  KeyboardToolbar: View,
  DefaultKeyboardToolbarTheme: {},
  OverKeyboardView: View,
  KeyboardExtender: View,
  KeyboardChatScrollView: ScrollView,
};
