let currentStep = 1;

function nextStep(stepNumber) {
    // Hide current step
    const currentStepElement = document.getElementById(`step${currentStep}`);
    currentStepElement.classList.remove('active');
    
    // Show next step after a short delay
    setTimeout(() => {
        currentStep = stepNumber;
        const nextStepElement = document.getElementById(`step${stepNumber}`);
        nextStepElement.classList.add('active');
    }, 300);
}

function selectAnswer(answer) {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    if (answer === 'yes') {
        // Celebrate!
        nextStep(5);
    } else {
        // Make the "No" button harder to click
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // Make Yes button bigger and more appealing
        yesBtn.style.transform = 'scale(1.2)';
        
        // Change the text to be more encouraging
        const messages = [
            'Are you sure? 🥺',
            'Think about it... 💭',
            'Please? 🙏',
            'Just say yes! 💕'
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setTimeout(() => {
            noBtn.textContent = randomMessage;
        }, 300);
    }
}

// Add dynamic heart explosion positions
document.addEventListener('DOMContentLoaded', () => {
    const explosionHearts = document.querySelectorAll('.hearts-explosion .heart');
    explosionHearts.forEach((heart, index) => {
        heart.style.setProperty('--i', index - 2);
    });
});
