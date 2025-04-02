document.getElementById("application-form").addEventListener("submit", function(event) {
    const fullName = document.getElementById("fullName").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const email = document.getElementById("email").value.trim();
    const essay = document.getElementById("essay").value.trim();
    
    // Validate required fields
    if (!fullName || !dob || !email || !essay) {
        alert("Please complete all required fields.");
        event.preventDefault();
    }
});
