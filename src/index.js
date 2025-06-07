import { loadRoutine, getCurrentStep } from './state.js';

document.addEventListener('DOMContentLoaded', async () => {
    await loadRoutine();
    const currentStep = getCurrentStep();
    console.log('☝️ is displayed: ', currentStep);
})