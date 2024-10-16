const express = require('express');
const router = express.Router();

// Hardcoded meal suggestions
const mealSuggestions = {
  breakfast: {
    family: ['Pancakes with fruit', 'Egg and cheese sandwiches', 'Yogurt parfaits'],
    couple: ['Avocado toast', 'Smoothie bowls', 'Omelettes'],
    single: ['Overnight oats', 'Breakfast burrito', 'Chia seed pudding']
  },
  lunch: {
    family: ['Grilled chicken salad', 'Vegetable soup with sandwiches', 'Taco bar'],
    couple: ['Caprese panini', 'Quinoa bowls', 'Sushi rolls'],
    single: ['Greek salad wrap', 'Microwave quesadilla', 'Instant noodle upgrade']
  },
  dinner: {
    family: ['Spaghetti and meatballs', 'Roast chicken with vegetables', 'Homemade pizza'],
    couple: ['Salmon with asparagus', 'Stir-fry with tofu', 'Stuffed bell peppers'],
    single: ['One-pan pasta', 'Loaded baked potato', 'Shrimp scampi']
  }
};

// GET route for meal suggestions
router.get('/:mealType/:groupType', (req, res) => {
  const { mealType, groupType } = req.params;

  if (!mealSuggestions[mealType] || !mealSuggestions[mealType][groupType]) {
    return res.status(400).json({ error: 'Invalid meal type or group type' });
  }

  const suggestions = mealSuggestions[mealType][groupType];
  res.json({ suggestions });
});

module.exports = router;
