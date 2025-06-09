import { loadRoutine, getCurrentStep, nextStep } from './state.js';
import { renderStepDisplay } from './ui.js';
import { startStepTimer } from './timer.js';

document.addEventListener('DOMContentLoaded', async () => {
    await loadRoutine();
    runCurrentStep();
});

    function runCurrentStep() {
        const currentStep = getCurrentStep();
        if (!currentStep) {
            console.log('🏁 routine finished');
            document.getElementById('app').innerHTML = `<h2>🏁 routine finished</h2>`;
            return;
        }

    renderStepDisplay(currentStep);
    
    startStepTimer(currentStep.duration, (remainingTime) => {
        const timeElem = document.querySelector('.time');
        if (timeElem) {
            timeElem.textContent = `⏱️ ${formatTime(remainingTime)}`;
        }
    }, () => {
        nextStep();
        runCurrentStep();    
    });
}    

function formatTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
}