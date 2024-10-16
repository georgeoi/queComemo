import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MealPlannerApp = ({ onSuggestionsReceived }) => {
  const [mealType, setMealType] = useState('breakfast');
  const [groupType, setGroupType] = useState('family');

  const fetchMealSuggestions = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/meal-suggestions/${mealType}/${groupType}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      onSuggestionsReceived(data.suggestions);
    } catch (error) {
      console.error('Error fetching meal suggestions:', error);
      // You might want to set an error state here and display it to the user
    }
  };

  const handleSubmit = () => {
    fetchMealSuggestions();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meal Planner</Text>
      
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Meal Type:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={mealType}
            onValueChange={(itemValue) => setMealType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Breakfast" value="breakfast" />
            <Picker.Item label="Lunch" value="lunch" />
            <Picker.Item label="Dinner" value="dinner" />
          </Picker>
        </View>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Group Type:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={groupType}
            onValueChange={(itemValue) => setGroupType(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Family" value="family" />
            <Picker.Item label="Couple" value="couple" />
            <Picker.Item label="Single" value="single" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Get Suggestions</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  pickerContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MealPlannerApp;
