document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    
    // Exercise data with joint positions and feedback
    const exerciseData = {
        squat: {
            joints: [
                { id: 'head', x: 50, y: 15 },
                { id: 'shoulder-left', x: 40, y: 25 },
                { id: 'shoulder-right', x: 60, y: 25 },
                { id: 'elbow-left', x: 40, y: 40 },
                { id: 'elbow-right', x: 60, y: 40 },
                { id: 'hip-left', x: 45, y: 50 },
                { id: 'hip-right', x: 55, y: 50 },
                { id: 'knee-left', x: 45, y: 70 },
                { id: 'knee-right', x: 55, y: 70 },
                { id: 'ankle-left', x: 45, y: 90 },
                { id: 'ankle-right', x: 55, y: 90 }
            ],
            connections: [
                ['head', 'shoulder-left'],
                ['head', 'shoulder-right'],
                ['shoulder-left', 'elbow-left'],
                ['shoulder-right', 'elbow-right'],
                ['shoulder-left', 'hip-left'],
                ['shoulder-right', 'hip-right'],
                ['hip-left', 'knee-left'],
                ['hip-right', 'knee-right'],
                ['knee-left', 'ankle-left'],
                ['knee-right', 'ankle-right'],
                ['hip-left', 'hip-right']
            ],
            goodFeedback: {
                status: 'GOOD FORM',
                message: 'Excellent squat form! Depth and alignment are perfect.',
                suggestion: 'Maintain this form for 3 sets of 10 reps.'
            },
            badFeedback: {
                status: 'ADJUST FORM',
                message: 'Knees are caving inward slightly. This can lead to injury over time.',
                suggestion: 'Focus on pushing your knees outward during the movement.'
            }
        },
        pushup: {
            joints: [
                { id: 'head', x: 50, y: 25 },
                { id: 'shoulder-left', x: 40, y: 30 },
                { id: 'shoulder-right', x: 60, y: 30 },
                { id: 'elbow-left', x: 35, y: 45 },
                { id: 'elbow-right', x: 65, y: 45 },
                { id: 'wrist-left', x: 30, y: 60 },
                { id: 'wrist-right', x: 70, y: 60 },
                { id: 'hip-left', x: 45, y: 50 },
                { id: 'hip-right', x: 55, y: 50 },
                { id: 'knee-left', x: 45, y: 75 },
                { id: 'knee-right', x: 55, y: 75 },
                { id: 'ankle-left', x: 45, y: 90 },
                { id: 'ankle-right', x: 55, y: 90 }
            ],
            connections: [
                ['head', 'shoulder-left'],
                ['head', 'shoulder-right'],
                ['shoulder-left', 'elbow-left'],
                ['shoulder-right', 'elbow-right'],
                ['elbow-left', 'wrist-left'],
                ['elbow-right', 'wrist-right'],
                ['shoulder-left', 'hip-left'],
                ['shoulder-right', 'hip-right'],
                ['hip-left', 'knee-left'],
                ['hip-right', 'knee-right'],
                ['knee-left', 'ankle-left'],
                ['knee-right', 'ankle-right'],
                ['hip-left', 'hip-right']
            ],
            goodFeedback: {
                status: 'GOOD FORM',
                message: 'Perfect push-up form! Your body is in a straight line.',
                suggestion: 'Maintain this form and focus on controlled movements.'
            },
            badFeedback: {
                status: 'ADJUST FORM',
                message: 'Your hips are sagging. This puts strain on your lower back.',
                suggestion: 'Engage your core to keep your body straight throughout.'
            }
        },
        lunge: {
            joints: [
                { id: 'head', x: 50, y: 15 },
                { id: 'shoulder-left', x: 40, y: 25 },
                { id: 'shoulder-right', x: 60, y: 25 },
                { id: 'elbow-left', x: 40, y: 40 },
                { id: 'elbow-right', x: 60, y: 40 },
                { id: 'hip-left', x: 45, y: 50 },
                { id: 'hip-right', x: 55, y: 50 },
                { id: 'knee-left', x: 40, y: 70 },
                { id: 'knee-right', x: 65, y: 70 },
                { id: 'ankle-left', x: 40, y: 90 },
                { id: 'ankle-right', x: 65, y: 90 }
            ],
            connections: [
                ['head', 'shoulder-left'],
                ['head', 'shoulder-right'],
                ['shoulder-left', 'elbow-left'],
                ['shoulder-right', 'elbow-right'],
                ['shoulder-left', 'hip-left'],
                ['shoulder-right', 'hip-right'],
                ['hip-left', 'knee-left'],
                ['hip-right', 'knee-right'],
                ['knee-left', 'ankle-left'],
                ['knee-right', 'ankle-right'],
                ['hip-left', 'hip-right']
            ],
            goodFeedback: {
                status: 'GOOD FORM',
                message: 'Great lunge form! Your front knee is at 90 degrees.',
                suggestion: 'Keep your torso upright as you lower into the lunge.'
            },
            badFeedback: {
                status: 'ADJUST FORM',
                message: 'Your front knee is extending past your toes.',
                suggestion: 'Take a larger step forward to keep knee behind toes.'
            }
        },
        plank: {
            joints: [
                { id: 'head', x: 50, y: 30 },
                { id: 'shoulder-left', x: 40, y: 35 },
                { id: 'shoulder-right', x: 60, y: 35 },
                { id: 'elbow-left', x: 40, y: 45 },
                { id: 'elbow-right', x: 60, y: 45 },
                { id: 'wrist-left', x: 40, y: 55 },
                { id: 'wrist-right', x: 60, y: 55 },
                { id: 'hip-left', x: 45, y: 60 },
                { id: 'hip-right', x: 55, y: 60 },
                { id: 'knee-left', x: 45, y: 75 },
                { id: 'knee-right', x: 55, y: 75 },
                { id: 'ankle-left', x: 45, y: 90 },
                { id: 'ankle-right', x: 55, y: 90 }
            ],
            connections: [
                ['head', 'shoulder-left'],
                ['head', 'shoulder-right'],
                ['shoulder-left', 'elbow-left'],
                ['shoulder-right', 'elbow-right'],
                ['elbow-left', 'wrist-left'],
                ['elbow-right', 'wrist-right'],
                ['shoulder-left', 'hip-left'],
                ['shoulder-right', 'hip-right'],
                ['hip-left', 'knee-left'],
                ['hip-right', 'knee-right'],
                ['knee-left', 'ankle-left'],
                ['knee-right', 'ankle-right'],
                ['hip-left', 'hip-right']
            ],
            goodFeedback: {
                status: 'GOOD FORM',
                message: 'Perfect plank position! Your body is in a straight line.',
                suggestion: 'Engage your core and hold for 30-60 seconds.'
            },
            badFeedback: {
                status: 'ADJUST FORM',
                message: 'Your hips are too high, reducing core engagement.',
                suggestion: 'Lower your hips to align shoulders to ankles.'
            }
        }
    };

    // Category exercises mapping
    const categoryExercises = {
        cardio: ['Jumping Jacks', 'High Knees', 'Burpees'],
        'lower-body': ['Squat', 'Lunge', 'Glute Bridge'],
        'upper-body': ['Push-up', 'Pull-up', 'Shoulder Press'],
        mobility: ['Dynamic Stretching', 'Yoga Poses', 'Foam Rolling']
    };

    // DOM elements
    const cameraFeed = document.getElementById('camera-feed');
    const cameraPlaceholder = document.getElementById('camera-placeholder');
    const skeleton = document.getElementById('skeleton');
    const feedbackStatus = document.getElementById('feedback-status');
    const feedbackMessage = document.getElementById('feedback-message');
    const aiSuggestion = document.getElementById('ai-suggestion');
    const exerciseSelect = document.getElementById('exercise-select');
    const heartRateEl = document.getElementById('heart-rate');
    const fatigueLevelEl = document.getElementById('fatigue-level');
    const recoveryScoreEl = document.getElementById('recovery-score');
    const nextWorkoutEl = document.getElementById('next-workout');
    
    // Category cards click handlers
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const exercises = categoryExercises[category];
            const randomExercise = exercises[Math.floor(Math.random() * exercises.length)].toLowerCase().replace(' ', '-');
            
            if (exerciseSelect.querySelector(`option[value="${randomExercise}"]`)) {
                exerciseSelect.value = randomExercise;
                exerciseSelect.dispatchEvent(new Event('change'));
            } else {
                // For exercises not in our select list
                const showGoodFeedback = Math.random() > 0.3;
                const feedback = showGoodFeedback ? 
                    { status: 'READY', message: `Let's do some ${randomExercise.replace('-', ' ')}!` } : 
                    { status: 'TIP', message: `Focus on form during ${randomExercise.replace('-', ' ')}` };
                
                feedbackStatus.textContent = feedback.status;
                feedbackStatus.className = `feedback-status ${showGoodFeedback ? 'status-good' : 'status-warning'}`;
                feedbackMessage.textContent = feedback.message;
                
                cameraPlaceholder.style.display = 'block';
                skeleton.style.display = 'none';
                document.querySelectorAll('.joint, .line').forEach(el => el.remove());
            }
        });
    });
      
    // AI Suggestion click handler
    aiSuggestion.addEventListener('click', function() {
        const suggestions = [
            'Based on your fatigue, try a light mobility session',
            'Your recovery score is high - time for intense cardio!',
            'Upper body needs attention after last session',
            'Lower body focus recommended for balanced training'
        ];
        
        const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
        
        feedbackStatus.textContent = 'AI RECOMMENDATION';
        feedbackStatus.className = 'feedback-status status-good';
        feedbackMessage.textContent = randomSuggestion;
        
        cameraPlaceholder.style.display = 'block';
        skeleton.style.display = 'none';
        document.querySelectorAll('.joint, .line').forEach(el => el.remove());
    });
    
    // Exercise select change handler
    exerciseSelect.addEventListener('change', function() {
        const exercise = this.value;
        
        if (!exercise) {
            resetDemo();
            return;
        }
        
        setupExercise(exercise);
        
        // Randomly show good or bad feedback (for demo purposes)
        const showGoodFeedback = Math.random() > 0.3;
        const feedback = showGoodFeedback ? 
            exerciseData[exercise].goodFeedback : 
            exerciseData[exercise].badFeedback;
        
        feedbackStatus.textContent = feedback.status;
        feedbackStatus.className = `feedback-status ${showGoodFeedback ? 'status-good' : 'status-warning'}`;
        feedbackMessage.textContent = feedback.message;
        
        // Simulate wearable data changes
        updateWearableData(exercise);
    });
    
    // Setup exercise skeleton
    function setupExercise(exercise) {
        cameraPlaceholder.style.display = 'none';
        skeleton.style.display = 'block';
        
        // Remove any existing joints and lines
        document.querySelectorAll('.joint, .line').forEach(el => el.remove());
        
        // Add joints
        exerciseData[exercise].joints.forEach(joint => {
            const jointEl = document.createElement('div');
            jointEl.className = 'joint';
            jointEl.id = joint.id;
            jointEl.style.left = `${joint.x}%`;
            jointEl.style.top = `${joint.y}%`;
            cameraFeed.appendChild(jointEl);
        });
        
        // Add connections (lines)
        exerciseData[exercise].connections.forEach(conn => {
            const start = document.getElementById(conn[0]);
            const end = document.getElementById(conn[1]);
            
            if (start && end) {
                const startRect = start.getBoundingClientRect();
                const endRect = end.getBoundingClientRect();
                const cameraRect = cameraFeed.getBoundingClientRect();
                
                const startX = startRect.left + startRect.width/2 - cameraRect.left;
                const startY = startRect.top + startRect.height/2 - cameraRect.top;
                const endX = endRect.left + endRect.width/2 - cameraRect.left;
                const endY = endRect.top + endRect.height/2 - cameraRect.top;
                
                const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
                const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
                
                const line = document.createElement('div');
                line.className = 'line';
                line.style.width = `${length}px`;
                line.style.left = `${startX}px`;
                line.style.top = `${startY}px`;
                line.style.transform = `rotate(${angle}deg)`;
                line.style.transformOrigin = '0 0';
                
                cameraFeed.appendChild(line);
            }
        });
    }
    
    // Reset demo
    function resetDemo() {
        cameraPlaceholder.style.display = 'block';
        skeleton.style.display = 'none';
        document.querySelectorAll('.joint, .line').forEach(el => el.remove());
        feedbackStatus.textContent = 'READY';
        feedbackStatus.className = 'feedback-status';
        feedbackMessage.textContent = 'Select a training category or specific exercise to begin';
    }
    
    // Update wearable data
    function updateWearableData(exercise) {
        let heartRate = 70;
        let fatigue = 'Low';
        let recovery = 90;
        let rest = '24h';
        
        // Adjust based on exercise intensity
        switch(exercise) {
            case 'squat':
            case 'lunge':
                heartRate = 85 + Math.floor(Math.random() * 20);
                fatigue = 'Moderate';
                recovery = 80 - Math.floor(Math.random() * 10);
                rest = '24h';
                break;
            case 'pushup':
                heartRate = 90 + Math.floor(Math.random() * 25);
                fatigue = 'High';
                recovery = 75 - Math.floor(Math.random() * 15);
                rest = '36h';
                break;
            case 'plank':
                heartRate = 75 + Math.floor(Math.random() * 10);
                fatigue = 'Moderate';
                recovery = 85 - Math.floor(Math.random() * 5);
                rest = '24h';
                break;
        }
        
        // Update fatigue level text
        const fatigueLevels = ['Low', 'Moderate', 'High'];
        fatigue = fatigueLevels[Math.floor(Math.random() * fatigueLevels.length)];
        
        // Animate the changes
        animateValue(heartRateEl, parseInt(heartRateEl.textContent), heartRate, 1000);
        fatigueLevelEl.textContent = fatigue;
        animateValue(recoveryScoreEl, parseInt(recoveryScoreEl.textContent), recovery, 1000, true);
        nextWorkoutEl.textContent = rest;
    }
    
    // Helper function to animate numeric values
    function animateValue(element, start, end, duration, addPercent = false) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = addPercent ? `${value}%` : value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    // Initialize with default values
    updateWearableData('squat');
    
    // Periodically update wearable data
    setInterval(() => {
        if (exerciseSelect.value) {
            updateWearableData(exerciseSelect.value);
        }
    }, 5000);
});