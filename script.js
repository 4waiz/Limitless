document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});
// Training categories functionality
const categoryCards = document.querySelectorAll('.category-card');

categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        let exercises = [];
        let feedbackMsg = '';
        
        // Define exercises for each category
        switch(category) {
            case 'cardio':
                exercises = ['Jumping Jacks', 'High Knees', 'Burpees'];
                feedbackMsg = 'Great for boosting endurance and burning calories!';
                break;
            case 'lower-body':
                exercises = ['Squat', 'Lunge', 'Glute Bridge'];
                feedbackMsg = 'Focuses on legs, glutes, and core stability!';
                break;
            case 'upper-body':
                exercises = ['Push-up', 'Pull-up', 'Shoulder Press'];
                feedbackMsg = 'Targets chest, shoulders, and arms!';
                break;
            case 'mobility':
                exercises = ['Dynamic Stretching', 'Yoga Poses', 'Foam Rolling'];
                feedbackMsg = 'Perfect for recovery and improving posture!';
                break;
        }
        
        // Update the feedback section
        document.querySelector('.exercise-feedback .feedback-status').textContent = category.replace('-', ' ').toUpperCase();
        document.querySelector('.exercise-feedback .feedback-message').textContent = feedbackMsg;
        
        // For demo purposes, randomly select one of the exercises if available in our system
        const availableExercises = exercises.filter(ex => exerciseData[ex.toLowerCase().replace(' ', '-')]);
        if (availableExercises.length > 0) {
            const randomExercise = availableExercises[Math.floor(Math.random() * availableExercises.length)].toLowerCase().replace(' ', '-');
            if (exerciseSelect.querySelector(`option[value="${randomExercise}"]`)) {
                exerciseSelect.value = randomExercise;
                exerciseSelect.dispatchEvent(new Event('change'));
            }
        }
    });
});

// AI Suggestion functionality
document.querySelector('.ai-suggestion').addEventListener('click', function() {
    const suggestions = [
        'Based on your fatigue, try a light mobility session',
        'Your recovery score is high - time for intense cardio!',
        'Upper body needs attention after last session',
        'Lower body focus recommended for balanced training'
    ];
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    document.querySelector('.exercise-feedback .feedback-status').textContent = 'AI RECOMMENDATION';
    document.querySelector('.exercise-feedback .feedback-message').textContent = randomSuggestion;
});