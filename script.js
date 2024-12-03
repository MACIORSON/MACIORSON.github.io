document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'https://i.pinimg.com/236x/dc/3c/a9/dc3ca9756bffb33ece2de8de170b305c.jpg',
        'https://i.pinimg.com/236x/0c/9e/0e/0c9e0e02f5cf3c7c402c6a4876a78640.jpg',
        'https://i.pinimg.com/236x/2d/82/9b/2d829b5233748cf7d4008a13aa212ac6.jpg',
        'https://i.pinimg.com/236x/15/29/74/152974b330f43a6537cfe9c3c4e18f02.jpg',
        'https://i.pinimg.com/236x/3f/ac/25/3fac25981f063ccef033a188861f0f26.jpg',
        'https://i.pinimg.com/236x/de/60/ab/de60ab492621ec7a069988de131a606b.jpg',
        'https://i.pinimg.com/236x/cc/3f/1d/cc3f1d92b8c94dbb7e339955abe7f314.jpg',
        'https://i.pinimg.com/236x/c3/90/77/c39077f59c013ccf4afee5520cc2c216.jpg',
        'https://i.pinimg.com/236x/7a/06/7e/7a067ed2a5b537f72d4eeb017ad11583.jpg',
        'https://i.pinimg.com/236x/30/61/1e/30611ec48c790321fc425075d7d832ab.jpg',
        'https://i.pinimg.com/236x/fc/b9/57/fcb957cd72415a2c1a9b5a4b2c46b279.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg',
        'https://i.pinimg.com/236x/e4/18/bc/e418bcd48320e7b431968de99ee1d18d.jpg',
        'https://i.pinimg.com/236x/dc/3c/a9/dc3ca9756bffb33ece2de8de170b305c.jpg',
        'https://i.pinimg.com/236x/0c/9e/0e/0c9e0e02f5cf3c7c402c6a4876a78640.jpg',
        'https://i.pinimg.com/236x/2d/82/9b/2d829b5233748cf7d4008a13aa212ac6.jpg',
        'https://i.pinimg.com/236x/15/29/74/152974b330f43a6537cfe9c3c4e18f02.jpg',
        'https://i.pinimg.com/236x/3f/ac/25/3fac25981f063ccef033a188861f0f26.jpg',
        'https://i.pinimg.com/236x/de/60/ab/de60ab492621ec7a069988de131a606b.jpg',
        'https://i.pinimg.com/236x/cc/3f/1d/cc3f1d92b8c94dbb7e339955abe7f314.jpg',
        'https://i.pinimg.com/236x/c3/90/77/c39077f59c013ccf4afee5520cc2c216.jpg',
        'https://i.pinimg.com/236x/7a/06/7e/7a067ed2a5b537f72d4eeb017ad11583.jpg',
        'https://i.pinimg.com/236x/30/61/1e/30611ec48c790321fc425075d7d832ab.jpg',
        'https://i.pinimg.com/236x/fc/b9/57/fcb957cd72415a2c1a9b5a4b2c46b279.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg',
        'https://i.pinimg.com/236x/e4/18/bc/e418bcd48320e7b431968de99ee1d18d.jpg',
        'https://i.pinimg.com/236x/dc/3c/a9/dc3ca9756bffb33ece2de8de170b305c.jpg',
        'https://i.pinimg.com/236x/0c/9e/0e/0c9e0e02f5cf3c7c402c6a4876a78640.jpg',
        'https://i.pinimg.com/236x/2d/82/9b/2d829b5233748cf7d4008a13aa212ac6.jpg',
        'https://i.pinimg.com/236x/15/29/74/152974b330f43a6537cfe9c3c4e18f02.jpg',
        'https://i.pinimg.com/236x/3f/ac/25/3fac25981f063ccef033a188861f0f26.jpg',
        'https://i.pinimg.com/236x/de/60/ab/de60ab492621ec7a069988de131a606b.jpg',
        'https://i.pinimg.com/236x/cc/3f/1d/cc3f1d92b8c94dbb7e339955abe7f314.jpg',
        'https://i.pinimg.com/236x/c3/90/77/c39077f59c013ccf4afee5520cc2c216.jpg',
        'https://i.pinimg.com/236x/7a/06/7e/7a067ed2a5b537f72d4eeb017ad11583.jpg',
        'https://i.pinimg.com/236x/30/61/1e/30611ec48c790321fc425075d7d832ab.jpg',
        'https://i.pinimg.com/236x/fc/b9/57/fcb957cd72415a2c1a9b5a4b2c46b279.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg',
        'https://i.pinimg.com/236x/e4/18/bc/e418bcd48320e7b431968de99ee1d18d.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg',
        'https://i.pinimg.com/236x/e4/18/bc/e418bcd48320e7b431968de99ee1d18d.jpg',
        'https://i.pinimg.com/236x/dc/3c/a9/dc3ca9756bffb33ece2de8de170b305c.jpg',
        'https://i.pinimg.com/236x/0c/9e/0e/0c9e0e02f5cf3c7c402c6a4876a78640.jpg',
        'https://i.pinimg.com/236x/2d/82/9b/2d829b5233748cf7d4008a13aa212ac6.jpg',
        'https://i.pinimg.com/236x/15/29/74/152974b330f43a6537cfe9c3c4e18f02.jpg',
        'https://i.pinimg.com/236x/3f/ac/25/3fac25981f063ccef033a188861f0f26.jpg',
        'https://i.pinimg.com/236x/de/60/ab/de60ab492621ec7a069988de131a606b.jpg',
        'https://i.pinimg.com/236x/cc/3f/1d/cc3f1d92b8c94dbb7e339955abe7f314.jpg',
        'https://i.pinimg.com/236x/c3/90/77/c39077f59c013ccf4afee5520cc2c216.jpg',
        'https://i.pinimg.com/236x/7a/06/7e/7a067ed2a5b537f72d4eeb017ad11583.jpg',
        'https://i.pinimg.com/236x/30/61/1e/30611ec48c790321fc425075d7d832ab.jpg',
        'https://i.pinimg.com/236x/fc/b9/57/fcb957cd72415a2c1a9b5a4b2c46b279.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg',
        'https://i.pinimg.com/236x/e4/18/bc/e418bcd48320e7b431968de99ee1d18d.jpg',
        'https://i.pinimg.com/236x/dc/3c/a9/dc3ca9756bffb33ece2de8de170b305c.jpg',
        'https://i.pinimg.com/236x/0c/9e/0e/0c9e0e02f5cf3c7c402c6a4876a78640.jpg',
        'https://i.pinimg.com/236x/2d/82/9b/2d829b5233748cf7d4008a13aa212ac6.jpg',
        'https://i.pinimg.com/236x/15/29/74/152974b330f43a6537cfe9c3c4e18f02.jpg',
        'https://i.pinimg.com/236x/3f/ac/25/3fac25981f063ccef033a188861f0f26.jpg',
        'https://i.pinimg.com/236x/de/60/ab/de60ab492621ec7a069988de131a606b.jpg',
        'https://i.pinimg.com/236x/cc/3f/1d/cc3f1d92b8c94dbb7e339955abe7f314.jpg',
        'https://i.pinimg.com/236x/c3/90/77/c39077f59c013ccf4afee5520cc2c216.jpg',
        'https://i.pinimg.com/236x/7a/06/7e/7a067ed2a5b537f72d4eeb017ad11583.jpg',
        'https://i.pinimg.com/236x/30/61/1e/30611ec48c790321fc425075d7d832ab.jpg',
        'https://i.pinimg.com/236x/fc/b9/57/fcb957cd72415a2c1a9b5a4b2c46b279.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg',
        'https://i.pinimg.com/236x/7a/06/7e/7a067ed2a5b537f72d4eeb017ad11583.jpg',
        'https://i.pinimg.com/236x/30/61/1e/30611ec48c790321fc425075d7d832ab.jpg',
        'https://i.pinimg.com/236x/fc/b9/57/fcb957cd72415a2c1a9b5a4b2c46b279.jpg',
        'https://i.pinimg.com/236x/c3/5e/ee/c35eeef455ba1952997d0390613fbcac.jpg',
        'https://i.pinimg.com/236x/70/e4/c7/70e4c773d3dccfc43b5c24673d21a1cd.jpg',
        'https://i.pinimg.com/236x/27/b7/24/27b7245f5c2d90935acd96ae2784891e.jpg'
    ];

    const backgroundContainer = document.querySelector('.background');

    // Dodajemy obrazy do tła w formie kwadratów
    images.forEach((src) => {
        const imgElement = document.createElement('img');
        imgElement.src = src;
        backgroundContainer.appendChild(imgElement);
    });

    // Funkcja tworząca serca
    function createHeart(x, y) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Funkcja tworząca tekst KOCHAM CIĘ
    function createKocham(x, y) {
        const kocham = document.createElement('div');
        kocham.classList.add('kocham');
        kocham.textContent = 'KOCHAM CIĘ';

        // Różne czcionki
        const fonts = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];
        kocham.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];

        kocham.style.left = `${x}px`;
        kocham.style.top = `${y}px`;

        document.body.appendChild(kocham);

        setTimeout(() => {
            kocham.remove();
        }, 5000);
    }

    // Obsługa zdarzenia kliknięcia
    document.body.addEventListener('click', (event) => {
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createHeart(x, y);
            createKocham(x, y);
        }
    });
});
