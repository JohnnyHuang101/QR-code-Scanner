const QRCode = require('qrcode');

exports.formatData = (data) => {
	const qrCodeText = data.id;
	return qrCodeText;
};

////Product ID: ${data.id}, Price: $${data.price}
exports.generateQRCode = async (qrCodeText) => {
	const options = {
		errorCorrectionLevel: 'M',
		type: 'image/png',
		margin: 1
	};

	const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, options);
	return qrCodeBuffer;
};