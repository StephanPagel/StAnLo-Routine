let routine = [];
let currentStepIndex = 0;

export async function loadRoutine() {
    try {
        const response = await fetch('./data/routine.json');
        const data = await response.json()
        console.log(data);
    }
    catch (err) {
        console.error('❌ Error loading routine:', err);
    }
}