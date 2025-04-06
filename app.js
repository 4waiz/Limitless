// Main Application Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initApp();
});

function initApp() {
    // Check if onboarding is completed
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        localStorage.removeItem('onboardingCompleted');
    }
    const onboardingCompleted = localStorage.getItem('onboardingCompleted') === 'true';
    
    if (!onboardingCompleted) {
        // Show onboarding screen
        showScreen('onboarding');
        initOnboarding();
    } else {
        // Show home screen
        showScreen('home');
    }
    
    // Initialize navigation
    initNavigation();
    
    // Initialize all modules
    initHomeDashboard();
    initTrainingEngine();
    initFeedbackSystem();
    initRecoveryAssistant();
    initAnalyticsDashboard();
    initGamificationSystem();
    initCommunityFeatures();
    initAIChatAssistant();
    initLiveSupport();
    
    // Initialize PWA
    initPWA();
    
    // Initialize chatbot
    initChatbot();
}
// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
          console.log('ServiceWorker registration successful');
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('New service worker found:', newWorker);
          });
        })
        .catch((err) => {
          console.log('ServiceWorker registration failed: ', err);
        });
    });
  }
  
  // Install prompt handling
  let deferredPrompt;
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button (you'll need to create this in your UI)
    const installButton = document.getElementById('install-button');
    if (installButton) {
      installButton.style.display = 'block';
      installButton.addEventListener('click', () => {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
          } else {
            console.log('User dismissed the install prompt');
          }
          deferredPrompt = null;
        });
      });
    }
  });
  
  // Track successful installation
  window.addEventListener('appinstalled', (evt) => {
    console.log('App was successfully installed');
  });
// Screen Management
function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Show the requested screen
    const screen = document.getElementById(screenId);
    if (screen) {
        screen.classList.add('active');
    }
    
    // Update active nav link
    if (screenId !== 'onboarding') {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        
        const navLink = document.querySelector(`.nav-links a[href="#${screenId}"]`);
        if (navLink) {
            navLink.classList.add('active');
        }
    }
}

function initNavigation() {
    // Handle nav link clicks
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const screenId = this.getAttribute('href').substring(1);
            showScreen(screenId);
        });
    });
    
    // Handle back buttons
    document.querySelectorAll('.btn-back').forEach(btn => {
        btn.addEventListener('click', function() {
            const parentScreen = this.closest('.screen');
            parentScreen.classList.add('hidden');
            parentScreen.previousElementSibling.classList.remove('hidden');
        });
    });
}

// Onboarding Module
function initOnboarding() {
    const steps = document.querySelectorAll('.onboarding-steps .step');
    const progressFill = document.querySelector('.progress-fill');
    const stepIndicators = document.querySelectorAll('.step-indicators span');
    const btnComplete = document.querySelector('.btn-complete');
    const loginForm = document.getElementById('loginForm');
    const wearableToggle = document.getElementById('wearable-toggle');
    const wearableOptions = document.querySelector('.wearable-options');
    
    let currentStep = 0;
    
    // Show first step
    showStep(currentStep);
    
    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Show loading
            document.querySelector('.login-options').classList.add('hidden');
            document.querySelector('.login-loading').classList.remove('hidden');
            
            // Simulate authentication
            setTimeout(() => {
                if (username === 'test00' && password === 'test00') {
                    // Successful login - proceed to next step
                    document.querySelector('.login-loading').classList.add('hidden');
                    showStep(1);
                } else {
                    // Failed login
                    document.querySelector('.login-options').classList.remove('hidden');
                    document.querySelector('.login-loading').classList.add('hidden');
                    alert('Invalid credentials. Try username: test00, password: test00');
                }
            }, 1500);
        });
    }
    
    // Goal selection
    document.querySelectorAll('.goal-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.goal-card').forEach(c => {
                c.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Next step buttons
    document.querySelectorAll('.btn-next-step').forEach(button => {
        button.addEventListener('click', function() {
            const currentStepElement = this.closest('.step');
            const nextStepIndex = parseInt(currentStepElement.dataset.step);
            showStep(nextStepIndex);
        });
    });
    
    // Day selection
    document.querySelectorAll('.day').forEach(day => {
        day.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
    
    // Wearable toggle
    if (wearableToggle && wearableOptions) {
        wearableToggle.addEventListener('change', function() {
            if (this.checked) {
                wearableOptions.classList.remove('hidden');
            } else {
                wearableOptions.classList.add('hidden');
            }
        });
    }
    
    // Complete onboarding
    if (btnComplete) {
        btnComplete.addEventListener('click', function() {
            localStorage.setItem('onboardingCompleted', 'true');
            showScreen('home');
        });
    }
    
    function showStep(stepIndex) {
        // Validate step index
        if (stepIndex < 0 || stepIndex >= steps.length) return;
        
        // Hide all steps
        steps.forEach(step => {
            step.classList.remove('active');
        });
        
        // Show current step
        steps[stepIndex].classList.add('active');
        currentStep = stepIndex;
        
        // Update progress bar
        updateProgress();
    }
    
    function updateProgress() {
        const progress = ((currentStep + 1) / steps.length) * 100;
        progressFill.style.width = `${progress}%`;
        
        // Update step indicators
        stepIndicators.forEach((indicator, index) => {
            if (index <= currentStep) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
}


// Home Dashboard Module
function initHomeDashboard() {
const btnStartTraining = document.getElementById('start-training');
const btnStartRecovery = document.getElementById('start-recovery');
if (btnStartTraining) {
    btnStartTraining.addEventListener('click', function() {
        showScreen('training');
    });
}

if (btnStartRecovery) {
    btnStartRecovery.addEventListener('click', function() {
        showScreen('recovery');
    });
}

// Simulate AI motivation messages
const motivationMessages = [
    "Consistency is key. Let's make today count!",
    "Your progress is impressive! Keep it up!",
    "Small steps lead to big results. You've got this!",
    "Today is a great day to challenge yourself!",
    "Recovery is just as important as training. Listen to your body."
];

const motivationElement = document.getElementById('ai-motivation');
if (motivationElement) {
    // Set random message
    const randomMessage = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
    motivationElement.textContent = `"${randomMessage}"`;
    
    // Change message every 30 seconds
    setInterval(() => {
        const newMessage = motivationMessages[Math.floor(Math.random() * motivationMessages.length)];
        motivationElement.textContent = `"${newMessage}"`;
    }, 30000);
}

// Simulate status changes
simulateStatusChanges();
}

function simulateStatusChanges() {
const statusCards = {
recovery: document.querySelector('.status-card.recovery .status-value'),
fatigue: document.querySelector('.status-card.fatigue .status-value'),
streak: document.querySelector('.status-card.streak .status-value')
};
if (statusCards.recovery && statusCards.fatigue && statusCards.streak) {
    // Initial values
    let recovery = 85;
    let fatigue = 15;
    let streak = 7;
    
    // Update function
    function updateStatus() {
        // Small random fluctuations
        recovery += Math.floor(Math.random() * 3) - 1; // -1 to +1
        fatigue += Math.floor(Math.random() * 3) - 1;
        
        // Ensure values stay within bounds
        recovery = Math.max(60, Math.min(100, recovery));
        fatigue = Math.max(0, Math.min(50, fatigue));
        
        // Update DOM
        statusCards.recovery.textContent = `${recovery}%`;
        statusCards.fatigue.textContent = `${fatigue}%`;
        statusCards.streak.textContent = streak;
        
        // Update streak randomly (1/20 chance)
        if (Math.random() < 0.05) {
            streak++;
            statusCards.streak.textContent = streak;
        }
        
        // Update status text
        const recoveryText = document.querySelector('.status-card.recovery p');
        const fatigueText = document.querySelector('.status-card.fatigue p');
        
        if (recovery > 80) {
            recoveryText.textContent = "Ready to train hard";
        } else if (recovery > 60) {
            recoveryText.textContent = "Moderate recovery needed";
        } else {
            recoveryText.textContent = "Focus on recovery today";
        }
        
        if (fatigue < 20) {
            fatigueText.textContent = "Low fatigue";
        } else if (fatigue < 35) {
            fatigueText.textContent = "Moderate fatigue";
        } else {
            fatigueText.textContent = "High fatigue";
        }
    }
    
    // Update every 10 seconds
    updateStatus();
    setInterval(updateStatus, 10000);
}
}

// Training Engine Module
function initTrainingEngine() {
const workoutCards = document.querySelectorAll('.workout-card .btn-start');
const activeWorkout = document.querySelector('.active-workout');
const workoutTimer = document.querySelector('.workout-timer');
const pauseWorkoutBtn = document.getElementById('pause-workout');
// Start workout buttons
workoutCards.forEach(btn => {
    btn.addEventListener('click', function() {
        const workoutCard = this.closest('.workout-card');
        const workoutName = workoutCard.querySelector('h3').textContent;
        
        // Update active workout screen
        document.querySelector('.active-workout h2').textContent = workoutName;
        
        // Show active workout screen
        workoutCard.closest('.screen').classList.add('hidden');
        activeWorkout.classList.remove('hidden');
        
        // Start workout timer
        startWorkoutTimer(workoutTimer);
        
        // Simulate posture feedback
        simulatePostureFeedback();
    });
});

// Pause workout button
if (pauseWorkoutBtn) {
    pauseWorkoutBtn.addEventListener('click', function() {
        if (this.innerHTML.includes('Pause')) {
            this.innerHTML = '<i class="fas fa-play"></i> Resume';
            clearInterval(window.workoutTimerInterval);
        } else {
            this.innerHTML = '<i class="fas fa-pause"></i> Pause';
            startWorkoutTimer(workoutTimer);
        }
    });
}

// Exercise progression
const exercises = [
    { name: "Cat-Cow Stretch", reps: 10, instructions: "Move between cat pose (arched back) and cow pose (dropped belly) slowly with your breath.", tips: [
        "Inhale as you drop belly for cow pose",
        "Exhale as you round spine for cat pose",
        "Keep movements fluid and controlled"
    ]},
    { name: "Child's Pose to Down Dog", reps: 8, instructions: "Flow between child's pose and downward facing dog, focusing on spinal mobility.", tips: [
        "Press hips back in child's pose",
        "Lengthen spine in transition",
        "Press heels down in down dog"
    ]},
    { name: "Standing Side Stretch", reps: 6, instructions: "Reach overhead and lean to each side, keeping hips stable.", tips: [
        "Keep both hips grounded",
        "Reach through fingertips",
        "Breathe into the stretch"
    ]}
];

let currentExercise = 0;
let currentRep = 1;

// Initialize first exercise
updateExerciseDisplay();

// Next exercise button
document.getElementById('next-exercise').addEventListener('click', function() {
    if (currentExercise < exercises.length - 1) {
        currentExercise++;
        currentRep = 1;
        updateExerciseDisplay();
    }
});

// Previous exercise button
document.getElementById('prev-exercise').addEventListener('click', function() {
    if (currentExercise > 0) {
        currentExercise--;
        currentRep = 1;
        updateExerciseDisplay();
    }
});

function updateExerciseDisplay() {
    const exercise = exercises[currentExercise];
    document.getElementById('current-exercise').textContent = exercise.name;
    
    // Update progress
    const progressFill = document.querySelector('.exercise-progress .progress-fill');
    const progressText = document.querySelector('.exercise-progress span');
    
    progressFill.style.width = `${(currentRep / exercise.reps) * 100}%`;
    progressText.textContent = `${currentRep}/${exercise.reps} reps`;
    
    // Update instructions
    document.querySelector('.exercise-details h4').textContent = "Instructions";
    document.querySelector('.exercise-details p').textContent = exercise.instructions;
    
    // Update tips
    const tipsList = document.querySelector('.exercise-tips ul');
    tipsList.innerHTML = '';
    exercise.tips.forEach(tip => {
        const li = document.createElement('li');
        li.textContent = tip;
        tipsList.appendChild(li);
    });
    
    // Simulate rep counting
    clearInterval(window.repInterval);
    window.repInterval = setInterval(() => {
        if (currentRep < exercise.reps) {
            currentRep++;
            progressFill.style.width = `${(currentRep / exercise.reps) * 100}%`;
            progressText.textContent = `${currentRep}/${exercise.reps} reps`;
        } else {
            clearInterval(window.repInterval);
        }
    }, 3000);
}
}

function startWorkoutTimer(timerElement) {
let seconds = 0;
// Clear any existing timer
clearInterval(window.workoutTimerInterval);

// Update timer every second
window.workoutTimerInterval = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}, 1000);
}

function simulatePostureFeedback() {
const postureScore = document.querySelector('.posture-score .score-circle');
const feedbackMessage = document.querySelector('.feedback-message span');
if (postureScore && feedbackMessage) {
    let score = 87;
    
    // Update score every 5-10 seconds
    setInterval(() => {
        // Random fluctuation
        score += Math.floor(Math.random() * 5) - 2; // -2 to +2
        
        // Keep score between 70-100
        score = Math.max(70, Math.min(100, score));
        
        // Update display
        postureScore.textContent = `${score}%`;
        
        // Update feedback based on score
        if (score > 90) {
            postureScore.style.backgroundColor = '#4CAF50'; // Green
            feedbackMessage.textContent = "Perfect form! Keep it up!";
            document.querySelector('.feedback-message i').className = "fas fa-check-circle";
            document.querySelector('.feedback-message i').style.color = "#4CAF50";
        } else if (score > 80) {
            postureScore.style.backgroundColor = '#8BC34A'; // Light green
            feedbackMessage.textContent = "Good form! Minor adjustments needed.";
            document.querySelector('.feedback-message i').className = "fas fa-check-circle";
            document.querySelector('.feedback-message i').style.color = "#8BC34A";
        } else if (score > 70) {
            postureScore.style.backgroundColor = '#FFC107'; // Yellow
            feedbackMessage.textContent = "Fair form. Focus on alignment.";
            document.querySelector('.feedback-message i').className = "fas fa-exclamation-triangle";
            document.querySelector('.feedback-message i').style.color = "#FFC107";
        } else {
            postureScore.style.backgroundColor = '#F44336'; // Red
            feedbackMessage.textContent = "Poor form. Adjust your posture.";
            document.querySelector('.feedback-message i').className = "fas fa-times-circle";
            document.querySelector('.feedback-message i').style.color = "#F44336";
        }
    }, 5000 + Math.random() * 5000); // Random interval between 5-10 seconds
}
}

// Real-Time Feedback Module
function initFeedbackSystem() {
// Simulate joint angle changes
simulateJointAngles();
// Simulate feedback messages
simulateFeedbackMessages();

// Simulate fatigue meter
simulateFatigueMeter();
}

function simulateJointAngles() {
const joints = {
shoulder: document.querySelector('.angle-marker[data-joint="shoulder"] span'),
spine: document.querySelector('.angle-marker[data-joint="spine"] span'),
hip: document.querySelector('.angle-marker[data-joint="hip"] span'),
knee: document.querySelector('.angle-marker[data-joint="knee"] span')
};
if (joints.shoulder && joints.spine && joints.hip && joints.knee) {
    // Initial angles
    let angles = {
        shoulder: 25,
        spine: 12,
        hip: 18,
        knee: 45
    };
    
    // Update angles periodically
    setInterval(() => {
        // Random fluctuations
        angles.shoulder += Math.floor(Math.random() * 5) - 2;
        angles.spine += Math.floor(Math.random() * 3) - 1;
        angles.hip += Math.floor(Math.random() * 4) - 2;
        angles.knee += Math.floor(Math.random() * 6) - 3;
        
        // Keep angles within reasonable ranges
        angles.shoulder = Math.max(15, Math.min(35, angles.shoulder));
        angles.spine = Math.max(5, Math.min(20, angles.spine));
        angles.hip = Math.max(10, Math.min(25, angles.hip));
        angles.knee = Math.max(30, Math.min(60, angles.knee));
        
        // Update DOM
        joints.shoulder.textContent = `Shoulder: ${angles.shoulder}°`;
        joints.spine.textContent = `Spine: ${angles.spine}°`;
        joints.hip.textContent = `Hip: ${angles.hip}°`;
        joints.knee.textContent = `Knee: ${angles.knee}°`;
    }, 2000);
}
}

function simulateFeedbackMessages() {
const positiveMessages = [
{ title: "Good Form!", message: "Your back alignment is perfect for this exercise." },
{ title: "Excellent!", message: "Your knee tracking is ideal during this movement." },
{ title: "Perfect!", message: "Your shoulder positioning is exactly right." }
];

const warningMessages = [
    { title: "Watch Your Knees", message: "Try not to let your knees cave inward during the squat." },
    { title: "Elbow Position", message: "Keep your elbows slightly tucked during the push-up." },
    { title: "Neck Alignment", message: "Avoid craning your neck forward during the exercise." }
];

const negativeMessages = [
    { title: "Adjust Your Posture", message: "Straighten your back to avoid strain on your lower spine." },
    { title: "Form Alert", message: "Your knees are extending beyond your toes in this position." },
    { title: "Correction Needed", message: "Your hips are sagging during this plank. Engage your core." }
];

// Show random feedback messages periodically
setInterval(() => {
    const feedbackContainer = document.querySelector('.feedback-messages');
    if (feedbackContainer) {
        // Clear existing messages
        feedbackContainer.innerHTML = '';
        
        // Show 1-3 random messages
        const messageCount = Math.floor(Math.random() * 3) + 1;
        const messageTypes = [];
        
        // Decide message types based on random weights
        for (let i = 0; i < messageCount; i++) {
            const rand = Math.random();
            if (rand < 0.6) {
                messageTypes.push('positive');
            } else if (rand < 0.9) {
                messageTypes.push('warning');
            } else {
                messageTypes.push('negative');
            }
        }
        
        // Create and append messages
        messageTypes.forEach(type => {
            let messageObj;
            let iconClass;
            let alertClass;
            
            if (type === 'positive') {
                messageObj = positiveMessages[Math.floor(Math.random() * positiveMessages.length)];
                iconClass = "fa-check-circle";
                alertClass = "positive";
            } else if (type === 'warning') {
                messageObj = warningMessages[Math.floor(Math.random() * warningMessages.length)];
                iconClass = "fa-exclamation-triangle";
                alertClass = "warning";
            } else {
                messageObj = negativeMessages[Math.floor(Math.random() * negativeMessages.length)];
                iconClass = "fa-times-circle";
                alertClass = "negative";
            }
            
            const messageDiv = document.createElement('div');
            messageDiv.className = `feedback-alert ${alertClass}`;
            messageDiv.innerHTML = `
                <i class="fas ${iconClass}"></i>
                <div>
                    <h3>${messageObj.title}</h3>
                    <p>${messageObj.message}</p>
                </div>
            `;
            
            feedbackContainer.appendChild(messageDiv);
        });
    }
}, 8000);
}

function simulateFatigueMeter() {
const meterFill = document.querySelector('.meter-fill');
const restSuggestion = document.querySelector('.rest-suggestion span');
if (meterFill && restSuggestion) {
    let fatigue = 30;
    
    setInterval(() => {
        // Increase fatigue over time with some randomness
        fatigue += Math.random() * 5;
        
        // Cap at 100%
        fatigue = Math.min(100, fatigue);
        
        // Update meter
        meterFill.style.width = `${fatigue}%`;
        
        // Update rest suggestion
        if (fatigue < 40) {
            restSuggestion.textContent = "Suggested rest: 30-60 seconds between sets";
        } else if (fatigue < 70) {
            restSuggestion.textContent = "Suggested rest: 60-90 seconds between sets";
        } else {
            restSuggestion.textContent = "Suggested rest: 90-120 seconds between sets";
        }
        
        // Random chance to decrease fatigue (when resting)
        if (Math.random() < 0.3) {
            fatigue = Math.max(10, fatigue - 15);
        }
    }, 3000);
}
}

// Smart Recovery Assistant Module
function initRecoveryAssistant() {
const recoveryCards = document.querySelectorAll('.recovery-card .btn-start');
const breathingSession = document.querySelector('.breathing-session');
const completeBreathingBtn = document.getElementById('complete-breathing');
// Start recovery session buttons
recoveryCards.forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.recovery-card');
        const sessionType = card.querySelector('h3').textContent;
        
        if (sessionType === "Breathing Session") {
            // Show breathing session screen
            card.closest('.screen').classList.add('hidden');
            breathingSession.classList.remove('hidden');
            
            // Start breathing timer
            startBreathingTimer();
        }
    });
});

// Complete breathing session button
if (completeBreathingBtn) {
    completeBreathingBtn.addEventListener('click', function() {
        breathingSession.classList.add('hidden');
        document.getElementById('recovery').classList.remove('hidden');
    });
}

// Mood slider
const moodSlider = document.getElementById('mood-slider');
if (moodSlider) {
    moodSlider.addEventListener('input', function() {
        const moodValue = parseInt(this.value);
        const emojis = document.querySelectorAll('.emoji-options span');
        
        // Highlight selected emoji
        emojis.forEach((emoji, index) => {
            if (index + 1 === moodValue) {
                emoji.style.transform = "scale(1.3)";
            } else {
                emoji.style.transform = "scale(1)";
            }
        });
    });
}
}

function startBreathingTimer() {
const timerElement = document.querySelector('.breathing-timer');
let seconds = 0;
// Clear any existing timer
clearInterval(window.breathingTimerInterval);

// Update timer every second
window.breathingTimerInterval = setInterval(() => {
    seconds++;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerElement.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}, 1000);

// Simulate breathing stats changes
simulateBreathingStats();
}

function simulateBreathingStats() {
const stats = {
bpm: document.querySelector('.stat-card:nth-child(1) .stat-value'),
breaths: document.querySelector('.stat-card:nth-child(2) .stat-value'),
stress: document.querySelector('.stat-card:nth-child(3) .stat-value')
};
if (stats.bpm && stats.breaths && stats.stress) {
    // Initial values
    let bpm = 72;
    let breaths = 14;
    let stress = 45;
    
    // Update stats periodically
    setInterval(() => {
        // Simulate calming effect over time
        bpm = Math.max(60, bpm + Math.floor(Math.random() * 3) - 2);
        breaths = Math.max(8, breaths + Math.floor(Math.random() * 2) - 1);
        stress = Math.max(0, stress - Math.floor(Math.random() * 3));
        
        // Update DOM
        stats.bpm.textContent = bpm;
        stats.breaths.textContent = breaths;
        stats.stress.textContent = `-${stress}%`;
    }, 5000);
}
}

// Analytics Dashboard Module
function initAnalyticsDashboard() {
// Initialize charts
initFormChart();
initMuscleFocusChart();
initEnergyTrendsChart();
// Simulate XP progression
simulateXPProgression();
}

function initFormChart() {
const ctx = document.getElementById('form-chart').getContext('2d');
if (ctx) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Form Score',
                data: [82, 85, 87, 84, 89, 86, 91],
                backgroundColor: 'rgba(108, 99, 255, 0.2)',
                borderColor: 'rgba(108, 99, 255, 1)',
                borderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 70,
                    max: 100
                }
            }
        }
    });
}
}

function initMuscleFocusChart() {
const ctx = document.getElementById('muscle-chart').getContext('2d');
if (ctx) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Upper Body', 'Lower Body', 'Core', 'Mobility'],
            datasets: [{
                data: [35, 30, 20, 15],
                backgroundColor: [
                    '#6C63FF',
                    '#4ECDC4',
                    '#FF6B6B',
                    '#A78BFA'
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}
}

function initEnergyTrendsChart() {
const ctx = document.getElementById('energy-chart').getContext('2d');
if (ctx) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Morning', 'Afternoon', 'Evening'],
            datasets: [{
                label: 'Energy Level',
                data: [85, 72, 68],
                backgroundColor: [
                    'rgba(108, 99, 255, 0.7)',
                    'rgba(108, 99, 255, 0.5)',
                    'rgba(108, 99, 255, 0.3)'
                ],
                borderColor: [
                    'rgba(108, 99, 255, 1)',
                    'rgba(108, 99, 255, 1)',
                    'rgba(108, 99, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 50,
                    max: 100
                }
            }
        }
    });
}
}

function simulateXPProgression() {
const xpFill = document.querySelector('.xp-fill');
const xpDetails = document.querySelectorAll('.xp-details span');
if (xpFill && xpDetails.length === 2) {
    let currentXP = 650;
    const xpNeeded = 1000;
    const level = 4;
    
    // Update XP display
    xpFill.style.width = `${(currentXP / xpNeeded) * 100}%`;
    xpDetails[0].textContent = `Level ${level}`;
    xpDetails[1].textContent = `${currentXP}/${xpNeeded} XP`;
    
    // Simulate XP gain over time
    setInterval(() => {
        if (currentXP < xpNeeded) {
            currentXP += Math.floor(Math.random() * 5);
            xpFill.style.width = `${(currentXP / xpNeeded) * 100}%`;
            xpDetails[1].textContent = `${currentXP}/${xpNeeded} XP`;
            
            // Level up if XP reaches needed amount
            if (currentXP >= xpNeeded) {
                // In a real app, would trigger level up animation
                currentXP = 0;
                xpDetails[0].textContent = `Level ${level + 1}`;
            }
        }
    }, 10000);
}
}

// Gamification System Module
function initGamificationSystem() {
// Initialize achievement categories
const categoryButtons = document.querySelectorAll('.btn-category');
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // In a real app, would filter achievements by category
    });
});

// Simulate challenge progress
simulateChallengeProgress();
}

function simulateChallengeProgress() {
const challengeProgress = document.querySelectorAll('.challenge-card .progress-fill');
challengeProgress.forEach(progress => {
    const currentWidth = parseInt(progress.style.width) || 0;
    const targetWidth = Math.min(100, currentWidth + Math.floor(Math.random() * 10) + 5);
    
    // Animate progress increase
    let width = currentWidth;
    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            progress.style.width = `${width}%`;
        }
    }, 50);
});
}

// Community Features Module
function initCommunityFeatures() {
// Initialize community tabs
const tabButtons = document.querySelectorAll('.tab-btn');
tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        // Update active tab button
        tabButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        
        // Show corresponding tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.querySelector(`.${tabId}-tab`).classList.add('active');
    });
});

// Simulate friend activity
simulateFriendActivity();
}

function simulateFriendActivity() {
const activityItems = document.querySelectorAll('.activity-item');
const activities = [
"completed Upper Body Strength",
"earned Form Master badge",
"started a 7-day streak",
"reached Level 5",
"completed Mobility Challenge"
];
// Update activity items periodically
setInterval(() => {
    activityItems.forEach(item => {
        const randomActivity = activities[Math.floor(Math.random() * activities.length)];
        const timeAgo = `${Math.floor(Math.random() * 12) + 1} hours ago`;
        
        item.querySelector('p').innerHTML = `<strong>${item.querySelector('p strong').textContent}</strong> ${randomActivity}`;
        item.querySelector('.activity-time').textContent = timeAgo;
    });
}, 15000);
}

// AI Chat Assistant Module
function initAIChatAssistant() {
const chatInput = document.querySelector('.chat-input input');
const sendButton = document.querySelector('.btn-send');
const toggleVoice = document.getElementById('toggle-voice');
const chatMessages = document.querySelector('.chat-messages');
const quickReplies = document.querySelector('.quick-replies');
// Sample AI responses
const aiResponses = {
    "sore": [
        "Based on your recent activity, I recommend light mobility work and foam rolling.",
        "For soreness, try active recovery like walking and gentle stretching.",
        "Hydration and protein intake can help with muscle recovery when you're sore."
    ],
    "routine": [
        "Your optimal routine would be 3 strength sessions and 2 mobility sessions per week.",
        "I suggest alternating upper and lower body focus days for balanced training.",
        "Based on your goals, try this sequence: Warm-up → Strength → Mobility → Cooldown"
    ],
    "form": [
        "For better squat form, focus on keeping your knees aligned with your toes.",
        "During push-ups, maintain a straight line from head to heels.",
        "For proper deadlift form, keep the bar close to your body and engage your core."
    ],
    "default": [
        "How can I help you with your training today?",
        "Would you like me to suggest a workout based on your current recovery status?",
        "I can provide feedback on your last session or suggest adjustments for your next one."
    ]
};

// Handle send message
function sendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        // Add user message to chat
        addMessage(message, 'user');
        chatInput.value = '';
        
        // Simulate AI thinking
        setTimeout(() => {
            let response;
            
            if (message.toLowerCase().includes('sore')) {
                response = aiResponses.sore[Math.floor(Math.random() * aiResponses.sore.length)];
            } else if (message.toLowerCase().includes('routine')) {
                response = aiResponses.routine[Math.floor(Math.random() * aiResponses.routine.length)];
            } else if (message.toLowerCase().includes('form')) {
                response = aiResponses.form[Math.floor(Math.random() * aiResponses.form.length)];
            } else {
                response = aiResponses.default[Math.floor(Math.random() * aiResponses.default.length)];
            }
            
            // Add AI response
            addMessage(response, 'coach');
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    
    if (sender === 'coach') {
        messageDiv.innerHTML = `
            <img src="https://via.placeholder.com/40" alt="AI Coach" class="message-avatar">
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
                <span class="message-time">${getCurrentTime()}</span>
            </div>
        `;
    }
    
    chatMessages.appendChild(messageDiv);
}

// Get current time in HH:MM format
function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
}

// Send message on button click
if (sendButton) {
    sendButton.addEventListener('click', sendMessage);
}

// Send message on Enter key
if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Toggle voice input
if (toggleVoice) {
    toggleVoice.addEventListener('click', function() {
        this.classList.toggle('active');
        // In a real app, would initialize voice recognition
    });
}

// Quick reply buttons
if (quickReplies) {
    quickReplies.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-reply')) {
            const replyText = e.target.textContent;
            addMessage(replyText, 'user');
            
            // Simulate AI response
            setTimeout(() => {
                let response;
                
                if (replyText.includes('recovery')) {
                    response = "I've scheduled a recovery session for you tomorrow morning. Would you like me to add specific mobility exercises?";
                } else if (replyText.includes('exercises')) {
                    response = "Here are 3 great mobility exercises for soreness: 1) Cat-Cow, 2) Child's Pose to Down Dog, 3) Standing Side Stretch. Would you like me to demonstrate any?";
                } else {
                    response = "How else can I assist you with your training today?";
                }
                
                addMessage(response, 'coach');
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    });
}
}

// Live Support Module
function initLiveSupport() {
// Connect buttons
const connectButtons = document.querySelectorAll('.btn-connect, .btn-schedule');
connectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const specialist = this.closest('.support-card').querySelector('h3').textContent;
        alert(`Connecting you to a ${specialist}... (This would initiate a live call in the real app)`);
    });
});

// Upgrade button
const upgradeButton = document.querySelector('.btn-upgrade');
if (upgradeButton) {
    upgradeButton.addEventListener('click', function() {
        alert('Redirecting to subscription page... (This would go to payment processing in the real app)');
    });
}

// Buy credits button
const buyCreditsButton = document.querySelector('.btn-buy');
if (buyCreditsButton) {
    buyCreditsButton.addEventListener('click', function() {
        alert('Opening credits purchase options... (This would show credit packages in the real app)');
    });
}
}

// PWA Initialization
function initPWA() {
// Register service worker
if ('serviceWorker' in navigator) {
window.addEventListener('load', () => {
navigator.serviceWorker.register('/service-worker.js')
.then(registration => {
console.log('ServiceWorker registration successful');
})
.catch(err => {
console.log('ServiceWorker registration failed: ', err);
});
});
}
// Add to home screen prompt (for mobile)
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show install button (would need to add this to UI)
    console.log('PWA install available');
});
}

// Initialize the app
initApp();