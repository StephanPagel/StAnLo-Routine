let routine = [];
let currentStepIndex = 0;

export async function loadRoutine() {
    try {
        const response = await fetch('./data/routine.json');
        routine = await response.json()
    }
    catch (err) {
        console.error('❌ Error loading routine:', err);
    }
}

export function getCurrentStep() {
    return routine[currentStepIndex];
}