function getMessage() {
    fetch("/api/message")
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("output").textContent = data.message;
        });
} 
