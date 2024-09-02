const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value.trim();
    const workoutList = document.querySelector('#workoutList');

    // Check if the workout input field is empty. 
    if (workoutInput.trim() === '') {
        alert('Please enter a workout.');
        return;
    }

    // Get all existing workouts from the list.
    const existingWorkoutRoutine = workoutList.querySelectorAll('li');
    for (let workout of existingWorkoutRoutine) {
    // If the workout already exists, alert the user.
        if (workout.textContent === workoutInput) {
            alert('This workout already exists!')
            return;
        }
    }

    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);


const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value.trim();
    const goalList = document.querySelector('#goalList');

    // Check if the goal input field is empty. 
    if (goalInput.trim () === '') {
        alert('Please enter a goal.');
        return;
    }

    //Check if the inputted goal already exists in the list. 
    const existingGoals = goalList.querySelectorAll('li');
    for (let goal of existingGoals) {
        if (goal.textContent.toLowerCase === goalInput.toLowerCase) {
            alert('This goal already exists!')
            return;
        }
    }
    
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
