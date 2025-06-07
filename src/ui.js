export function renderStepDisplay(currentStep) {
    const app = document.getElementById('app');

    if (!currentStep || !app) {
        console.warn('⚠️ no current step or app element found');
        return;
    }

    app.innerHTML = `
        <div class="emoji">${currentStep.icon}</div>
        <h2>${currentStep.label}</h2>
    `;
    console.log('📺 current step rendered: ', currentStep);
}