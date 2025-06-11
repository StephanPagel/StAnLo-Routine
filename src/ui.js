export function renderStepDisplay(currentStep) {
    const app = document.getElementById('app');

    if (!currentStep || !app) {
        console.warn('⚠️ no current step or app element found');
        return;
    }

    app.innerHTML = `
        <div class="progress-wrapper">
            <svg class="progress-ring" viewBox="0 0 120 120">
                
                <circle class="ring-bg" cx="60" cy="60" r="54" />
                <circle class="ring-progress" cx="60" cy="60" r="54" />
            </svg>
            <div class="emoji">${currentStep.icon}</div>
            <p class="time">⏱️ ${formatTime(currentStep.duration)}</p>
        </div>
    `;
}

function formatTime(seconds) {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
}