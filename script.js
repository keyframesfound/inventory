// Include the QRCode library
// <script src="https://cdn.jsdelivr.net/npm/qrcode/build/qrcode.min.js"></script>

// Function to generate QR code
function generateQRCode() {
    const qrInput = document.getElementById('qr-input').value;
    const qrCodeDiv = document.getElementById('qr-code');
    qrCodeDiv.innerHTML = '';
    QRCode.toCanvas(qrCodeDiv, qrInput, function (error) {
        if (error) console.error(error);
        console.log('QR code generated!');
    });
}

// Function to start scanning QR code
function startScan() {
    const video = document.getElementById('qr-video');
    const qrResult = document.getElementById('qr-result');
    video.style.display = 'block';

    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }).then(function (stream) {
        video.srcObject = stream;
        video.setAttribute('playsinline', true); // required to tell iOS safari we don't want fullscreen
        video.play();
        requestAnimationFrame(tick);
    });

    function tick() {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: 'dontInvert',
            });
            if (code) {
                qrResult.innerText = `QR Code Data: ${code.data}`;
                video.pause();
                video.srcObject.getTracks().forEach(track => track.stop());
                video.style.display = 'none';
            } else {
                requestAnimationFrame(tick);
            }
        } else {
            requestAnimationFrame(tick);
        }
    }
}
