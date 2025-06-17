// To Show greeting based on time
function showGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning, Karthikeya!";
    } else if (hour < 18) {
        greeting = "Good Afternoon, Karthikeya!";
    } else {
        greeting = "Good Evening, Karthikeya!";
    }

    document.getElementById("greeting").innerText = greeting;
}

// Show live time
function showTime() {
    const now = new Date();
    document.getElementById("time").innerText = now.toLocaleTimeString();
}

// Run functions on page load and every second
window.onload = () => {
    showGreeting();
    setInterval(showTime, 1000);
};
