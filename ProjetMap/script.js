// Get all governorate elements
const governorates = document.querySelectorAll('.governorate');
const tooltip = document.getElementById('tooltip');

// Add event listeners to each governorate
governorates.forEach(governorate => {
    // Mouse enter - show tooltip
    governorate.addEventListener('mouseenter', (e) => {
        const name = governorate.getAttribute('data-name');
        tooltip.textContent = name;
        tooltip.classList.add('show');
    });

    // Mouse move - update tooltip position
    governorate.addEventListener('mousemove', (e) => {
        const mapContainer = document.querySelector('.map-container');
        const containerRect = mapContainer.getBoundingClientRect();
        
        tooltip.style.left = (e.clientX - containerRect.left + 15) + 'px';
        tooltip.style.top = (e.clientY - containerRect.top - 40) + 'px';
    });

    // Mouse leave - hide tooltip
    governorate.addEventListener('mouseleave', () => {
        tooltip.classList.remove('show');
    });

    // Click - navigate to URL
    governorate.addEventListener('click', () => {
        const url = governorate.getAttribute('data-url');
        const name = governorate.getAttribute('data-name');
        
        // For now, just show an alert - replace with actual URLs later
        alert(`Navigating to ${name} page... (Add your URL in the HTML data-url attribute)`);
        
        // Uncomment this when you have actual URLs:
        // if (url && url !== '#') {
        //     window.location.href = url;
        // }
    });

    // Add touch support for mobile
    governorate.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const name = governorate.getAttribute('data-name');
        tooltip.textContent = name;
        tooltip.classList.add('show');
        
        const touch = e.touches[0];
        const mapContainer = document.querySelector('.map-container');
        const containerRect = mapContainer.getBoundingClientRect();
        
        tooltip.style.left = (touch.clientX - containerRect.left + 15) + 'px';
        tooltip.style.top = (touch.clientY - containerRect.top - 40) + 'px';
    });

    governorate.addEventListener('touchend', () => {
        setTimeout(() => {
            tooltip.classList.remove('show');
        }, 1500);
    });
});

// Optional: Add keyboard navigation
governorates.forEach((governorate, index) => {
    governorate.setAttribute('tabindex', '0');
    
    governorate.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            governorate.click();
        }
    });
});