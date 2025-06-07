export function renderStepDisplay(currentStep) {
    const app = document.getElementById('app');

    if (!currentStep || !app) {
        console.warn('⚠️ no current step or app element found');
        return;
    }

    app.innerHTML = `
        <div class="emoji">${currentStep.icon}</div>
        <h2>${currentStep.label}</h2>
        <p class="time">⏱️ ${formatTime(currentStep.duration)}</p>
    `;
    console.log('📺 current step rendered: ', currentStep);
}

function formatTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
}