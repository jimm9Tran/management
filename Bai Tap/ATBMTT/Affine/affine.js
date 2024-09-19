// affine.js

document.addEventListener('DOMContentLoaded', function() {
    const inputFile = document.getElementById('inputFile');
    const inputText = document.getElementById('inputText');
    const keyA = document.getElementById('keyA');
    const keyB = document.getElementById('keyB');
    const encryptButton = document.getElementById('encryptButton');
    const resetButton = document.getElementById('resetButton');
    const saveButton = document.getElementById('saveButton');
    const backButton = document.getElementById('backButton');
    const encryptedText = document.getElementById('encryptedText');
    const messageDiv = document.getElementById('message');

    // Xử lý sự kiện chọn tệp
    inputFile.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            readFile(file, inputText);
        }
    });

    // Xử lý sự kiện nút Mã hóa
    encryptButton.addEventListener('click', function() {
        const text = inputText.value;
        const a = parseInt(keyA.value);
        const b = parseInt(keyB.value);

        // Kiểm tra đầu vào
        if (!text) {
            displayMessage('Vui lòng nhập văn bản cần mã hóa hoặc chọn tệp.', 'error');
            return;
        }

        if (isNaN(a) || isNaN(b)) {
            displayMessage('Vui lòng nhập cả hai khóa a và b.', 'error');
            return;
        }

        if (!areCoprime(a, 26)) {
            displayMessage('Khóa a phải là số nguyên và coprime với 26.', 'error');
            return;
        }

        // Thực hiện mã hóa Affine
        const encrypted = affineEncrypt(text, a, b);
        encryptedText.value = encrypted;
        displayMessage('Mã hóa thành công!', 'success');
    });

    // Xử lý sự kiện nút Reset
    resetButton.addEventListener('click', function() {
        inputFile.value = '';
        inputText.value = '';
        keyA.value = '';
        keyB.value = '';
        encryptedText.value = '';
        clearMessage();
    });

    // Xử lý sự kiện nút Lưu
    saveButton.addEventListener('click', function() {
        const encrypted = encryptedText.value;
        if (!encrypted) {
            displayMessage('Không có nội dung để lưu.', 'error');
            return;
        }
        downloadFile('encrypted.txt', encrypted);
        displayMessage('Bản mã đã được lưu thành công!', 'success');
    });

    // Xử lý sự kiện nút Quay lại
    backButton.addEventListener('click', function() {
        // Có thể định nghĩa chức năng quay lại, ví dụ như chuyển hướng trang hoặc chỉ đơn giản là Reset
        // Ở đây, tôi sẽ sử dụng Reset
        resetButton.click();
    });

    /**
     * Hàm mã hóa Affine
     * @param {string} text 
     * @param {number} a 
     * @param {number} b 
     * @returns {string} Bản mã
     */
    function affineEncrypt(text, a, b) {
        let result = '';
        for (let char of text) {
            if (char.match(/[a-z]/i)) {
                const isUpper = char === char.toUpperCase();
                const base = isUpper ? 65 : 97;
                const x = char.charCodeAt(0) - base;
                const encryptedChar = String.fromCharCode(((a * x + b) % 26) + base);
                result += encryptedChar;
            } else {
                // Giữ nguyên ký tự không phải chữ cái
                result += char;
            }
        }
        return result;
    }

    /**
     * Hàm hiển thị thông báo
     * @param {string} msg 
     * @param {string} type 'success' hoặc 'error'
     */
    function displayMessage(msg, type) {
        messageDiv.textContent = msg;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
    }

    /**
     * Hàm xóa thông báo
     */
    function clearMessage() {
        messageDiv.textContent = '';
        messageDiv.className = 'message';
        messageDiv.style.display = 'none';
    }
});
