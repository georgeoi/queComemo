import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import MealPlannerApp from '../components/MealPlannerApp';

const MainScreen = ({ navigation }) => {
  const handleSuggestions = (suggestions) => {
    navigation.navigate('Results', { suggestions });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <MealPlannerApp onSuggestionsReceived={handleSuggestions} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Light gray background
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default MainScreen;
