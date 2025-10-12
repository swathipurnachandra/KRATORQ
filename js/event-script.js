(function () {
    // Target date (local): 29 Oct 2025 00:00:00
    const targetDate = new Date('2025-10-29T00:00:00');

    function $(id) {
        return document.getElementById(id);
    }

    function pad(n) {
        return String(Math.max(0, n)).padStart(2, '0');
    }

    let intervalId = null;

    function updateOnce() {
        const daysEl = $('days');
        const hoursEl = $('hours');
        const minutesEl = $('minutes');
        const secondsEl = $('seconds');

        // If none of the expected elements exist, stop trying
        if (!daysEl && !hoursEl && !minutesEl && !secondsEl) {
            if (intervalId) clearInterval(intervalId);
            return;
        }

        const now = Date.now();
        let distance = targetDate.getTime() - now;

        if (distance <= 0) {
            // event reached
            if (daysEl) daysEl.textContent = '00';
            if (hoursEl) hoursEl.textContent = '00';
            if (minutesEl) minutesEl.textContent = '00';
            if (secondsEl) secondsEl.textContent = '00';
            if (intervalId) clearInterval(intervalId);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = pad(days);
        if (hoursEl) hoursEl.textContent = pad(hours);
        if (minutesEl) minutesEl.textContent = pad(minutes);
        if (secondsEl) secondsEl.textContent = pad(seconds);
    }

    function start() {
        updateOnce();
        intervalId = setInterval(updateOnce, 1000);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();