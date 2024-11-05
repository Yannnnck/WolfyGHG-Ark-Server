document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault(); // Verhindert das Abschicken des Formulars
            
            // Erfasst die Eingabewerte der Felder
            const vorname = document.getElementById('vname').value;
            const nachname = document.getElementById('nname').value;
            const email = document.getElementById('email').value;
            const tel = document.getElementById('phone').value;
            const kategorie = document.getElementById('kategorie').value;
            const nachricht = document.getElementById('nachricht').value;

            // Ausgabe der Eingabewerte in der Konsole
            console.log(`Vorname: ${vorname}`);
            console.log(`Nachname: ${nachname}`);
            console.log(`E-Mail: ${email}`);
            console.log(`Tel: ${tel}`);
            console.log(`Kategorie: ${kategorie}`);
            console.log(`Nachricht: ${nachricht}`);

            alert('Danke für die Rückmeldung!');
            form.reset(); // Setzt das Formular zurück
        });
    } else {
        console.error('Formular nicht gefunden');
    }
});
