document.addEventListener('DOMContentLoaded', function() {
    let count = 0;
    const display = document.getElementById('counter-display');
    const body = document.body;
    const plusBtn = document.getElementById('speed-plus');
    const minusBtn = document.getElementById('speed-minus');
    const resetBtn = document.getElementById('reset-btn');

    function formatCount(num) {
        const absCount = Math.abs(num); 
        return absCount.toString().padStart(2, '0') + ':00';
    }

    function updateDisplayAndStyles() {
        display.textContent = formatCount(count); 

        if (count > 0) {
            body.style.backgroundColor = 'lightgreen';
            display.style.color = 'lightcoral'; 
        } else if (count < 0) {
            body.style.backgroundColor = 'lightcoral'; 
            display.style.color = 'lightgreen'; 
        } else {
            body.style.backgroundColor = 'lightgray'; 
            display.style.color = 'black'; 
        }
    }

    updateDisplayAndStyles();


    plusBtn.addEventListener('click', function() {
        count++; 
        updateDisplayAndStyles(); 
    });

    minusBtn.addEventListener('click', function() {
        count--;
        updateDisplayAndStyles(); 
    });

    resetBtn.addEventListener('click', function() {
        count = 0; 
        updateDisplayAndStyles(); 
    });
});