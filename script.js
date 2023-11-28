//your JS code here. If required.

    // Function to update the timer
    function updateTimer() {
      const timerElement = document.getElementById('timer');
      const now = new Date();

      // Format the date and time
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      // Display the formatted date and time
      timerElement.textContent = `${formattedDate} ${formattedTime}`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial call to display the timer immediately
    updateTimer();
