

// Function to show the contact form
function showForm() {
    const dropdown = document.getElementById('professionDropdown');
    const form = document.getElementById('contactForm');
    
    if (dropdown.value !== "") {
        form.classList.remove('hidden');
    }
}

// Function to submit the contact form
function submitForm() {
    const form = document.getElementById('contactForm');
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const issue = document.getElementById('issue').value;

    // Assuming you have a server-side script to handle saving data
    // Here, you can use JavaScript to save the data to a text file
    // This is just a basic example and may not work in real-world scenarios
    const data = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nIssue: ${issue}\n\n`;
    
    // Save the data to a text file (not recommended for real-world use)
    // This is just a basic example and may not work in real-world scenarios
    // You might need a server-side script to handle this properly
    const blob = new Blob([data], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'information.txt';
    a.click();


    form.reset();
}


function donate() {
    const userInput = document.getElementById('userAmount').value
    alert('Donation submitted!');
}
