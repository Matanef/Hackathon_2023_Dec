function showForm() {
    const form = document.getElementById('volunteerForm');
    form.classList.remove('hidden');
}

function saveToTextFile() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const issue = document.getElementById('issue').value;

    // You can implement a logic here to save the information to a text file or handle it as needed

    // Show popup
    showPopup();
}

function handleSearch() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const slider = document.getElementById('slider');
    const charityCard = document.getElementById('charityCard');

    // Logic to handle search and display cards accordingly
    // For simplicity, showing/hiding cards is demonstrated here
    if (searchTerm === 'specificcharity') {
        slider.classList.add('hidden');
        charityCard.classList.remove('hidden');
    } else {
        slider.classList.remove('hidden');
        charityCard.classList.add('hidden');
    }
}

function submitDonation() {
    // Logic to handle donation submission
    // You can implement your own logic or integrate with a payment gateway
    showPopup();
}

function showPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('hidden');
}
