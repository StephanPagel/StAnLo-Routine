let interval = null;

export function startStepTimer(duration, onTick, onEnd) {
    let remainingTime = duration;

    onTick(remainingTime);
    console.log('⏳ timer started for ', remainingTime, 'seconds');

    interval = setInterval(() => {
        remainingTime--;

        if (remainingTime <= 0) {
            clearInterval(interval);
            console.log('⏳ step finished');
            onEnd();
        } else {
            onTick(remainingTime);
        }
    }, 1000);
}