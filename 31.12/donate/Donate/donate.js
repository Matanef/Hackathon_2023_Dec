function donate() {
    const form = document.getElementById('contactForm');
    const userAmount = document.getElementById('userAmount').value;
    const kind = document.getElementById('kind').value;
    const data = `Amount user donated: ${userAmount.toString()}\nIssue: ${kind}\n\n`;
    const blob = new Blob([data], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'information.txt';
    a.click();


    form.reset();
}