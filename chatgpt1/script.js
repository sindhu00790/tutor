document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the display of modals
    function toggleModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = modal.style.display === 'none' ? 'flex' : 'none';
    }

    // Event listeners
    const enrollButton = document.getElementById('enrollButton');
    const closeButton = document.getElementById('closeButton');
    const signInButton = document.getElementById('signInButton');
    const closeSignInButton = document.getElementById('closeSignInButton');

    if (enrollButton) {
        enrollButton.addEventListener('click', function () {
            toggleModal('enrollmentModal');
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            toggleModal('enrollmentModal');
        });
    }

    if (signInButton) {
        signInButton.addEventListener('click', function () {
            toggleModal('signInModal');
        });
    }

    if (closeSignInButton) {
        closeSignInButton.addEventListener('click', function () {
            toggleModal('signInModal');
        });
    }

    const submitButton = document.getElementById('submitButton');
    if (submitButton) {
        submitButton.addEventListener('click', function () {
            // Add your enrollment logic here
            // You can send data to a server, display a success message, etc.
            toggleModal('enrollmentModal');
            toggleModal('successMessage');
        });
    }
});
