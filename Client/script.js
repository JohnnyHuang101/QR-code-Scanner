document.getElementById('qr-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const id = document.getElementById('qr-id').value;
    const data = { id };

    if (!id.startsWith('https://')) {
        alert('Error: The URL must start with "https://".');
        return; 
    }

    fetch('http://localhost:3000/generate-qr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to generate QR code');
            }
            return response.blob();
        })
        .then(blob => {
            const qrImage = document.createElement('img');
            const qrImageUrl = URL.createObjectURL(blob);
            qrImage.src = qrImageUrl;

            qrImage.style.maxWidth = '90%';  
            qrImage.style.height = 'auto'; 

            const qrResultDiv = document.getElementById('qr-result');
            qrResultDiv.innerHTML = '';
            qrResultDiv.appendChild(qrImage);
        })
        .catch(error => console.error('Error generating QR code:', error));
});


document.getElementById('about-button').addEventListener('click', function () {
    fetch('http://localhost:3000/about')
        .then(response => response.text())
        .then(aboutInfo => {
            const aboutResultDiv = document.getElementById('about-result');
            aboutResultDiv.innerHTML = `<p>${aboutInfo}</p>`;
        })
        .catch(error => console.error('Error fetching about info:', error));

});