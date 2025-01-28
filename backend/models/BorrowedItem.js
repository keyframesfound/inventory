const QRCode = require('qrcode');

class BorrowedItem {
    constructor(itemName, borrowerName, returnDate, borrowDate, isReturned = false) {
        this.itemName = itemName;
        this.borrowerName = borrowerName;
        this.returnDate = returnDate;
        this.borrowDate = borrowDate;
        this.isReturned = isReturned;
    }

    async generateQRCode() {
        const data = {
            itemName: this.itemName,
            borrowerName: this.borrowerName,
            returnDate: this.returnDate,
            borrowDate: this.borrowDate,
            isReturned: this.isReturned
        };
        try {
            const url = await QRCode.toDataURL(JSON.stringify(data));
            return url;
        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = BorrowedItem;
