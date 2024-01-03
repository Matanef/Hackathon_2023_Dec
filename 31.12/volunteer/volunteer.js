

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
    const data = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone: ${phone}\nIssue: ${issue}\n\n`;
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
