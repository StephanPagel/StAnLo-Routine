import { loadRoutine, getCurrentStep } from './state.js';
import { renderStepDisplay } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    await loadRoutine();
    const currentStep = getCurrentStep();
    renderStepDisplay(currentStep);
    console.log('☝️ is displayed: ', currentStep);
});