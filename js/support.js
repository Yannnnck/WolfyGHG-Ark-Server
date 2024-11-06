document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const successMessage = document.getElementById('success-message');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevents form submission

            // Get input values
            const vorname = document.getElementById('vname').value;
            const nachname = document.getElementById('nname').value;
            const email = document.getElementById('email').value;
            const tel = document.getElementById('phone').value;
            const kategorie = document.getElementById('kategorie').value;
            const nachricht = document.getElementById('nachricht').value;

            // Log the values to the console
            console.log(`Vorname: ${vorname}`);
            console.log(`Nachname: ${nachname}`);
            console.log(`E-Mail: ${email}`);
            console.log(`Tel: ${tel}`);
            console.log(`Kategorie: ${kategorie}`);
            console.log(`Nachricht: ${nachricht}`);

            // Display success message
            successMessage.style.display = 'block';
            successMessage.style.opacity = '1';

            // Hide message after 10 seconds with fade-out effect
            setTimeout(() => {
                successMessage.style.opacity = '0';
            }, 10000);

            // Completely hide the message after the fade-out transition (1 second here)
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 11000);

            // Reset the form
            form.reset();
        });
    } else {
        console.error('Formular nicht gefunden');
    } 
});
