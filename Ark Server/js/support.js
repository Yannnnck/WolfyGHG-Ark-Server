document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Verhindert das Abschicken des Formulars
            alert('Danke für die Rückmeldung!');
            form.reset(); // Setzt das Formular zurück
        });
    } else {
        console.error('Formular nicht gefunden');
    }
});
