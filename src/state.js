let routine = [];
let currentStepIndex = 0;

export async function loadRoutine() {
    try {
        const response = await fetch('./src/data/routine.json');
        routine = await response.json();
        console.log('✅ routine loaded: ', routine);
    } catch (err) {
        console.error('❌ error loading routine:', err);
    }
}

export function getCurrentStep() {
    const step = routine[currentStepIndex];
    console.log('🦶 current step: ', step);
    return step;
}

export function nextStep() {
    if (currentStepIndex < routine.length - 1) {
        currentStepIndex++;
        console.log('➡️ moving to next step: ', currentStepIndex);
    }
}