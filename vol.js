// Modal logic
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");

function openModal(cardNumber) {
    let title, body;

    if (cardNumber === 1) {
        title = "Food Bank";
        body = "Join us in helping to distribute food to those in need. This opportunity is available every weekend!";
    } else if (cardNumber === 2) {
        title = "Community Cleanup";
        body = "Help clean up parks and streets in your local area. Supplies are provided for this one-day event.";
    } else if (cardNumber === 3) {
        title = "Tutoring Program";
        body = "Teach and inspire children. Tutors are needed to help children improve their skills after school.";
    }

    modalTitle.innerText = title;
    modalBody.innerText = body;

    // Show the modal
    modal.style.display = "flex";
}

function closeModal() {
    // Hide the modal
    modal.style.display = "none";
}

// Close modal when clicking outside of the content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}