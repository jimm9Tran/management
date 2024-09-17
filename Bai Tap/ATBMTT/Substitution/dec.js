document.addEventListener('DOMContentLoaded', () => {
    const decryptButton = document.getElementById('decryptButton'); // Nút giải mã
    const resetButton = document.getElementById('resetButton');
    const inputTextField = document.getElementById('inputText');
    const keyField = document.getElementById('key');
    const decryptedField = document.getElementById('decryptedText'); // Trường hiển thị kết quả giải mã
    const fileInputField = document.getElementById('inputFile');
    const messageDisplay = document.getElementById('message');
    const saveButton = document.getElementById('saveButton');

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Function to read file content
    function readFileContent(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (error) => reject(error);
            reader.readAsText(file);
        });
    }

    // Event handler for file input change
    fileInputField.addEventListener('change', async () => {
        const file = fileInputField.files[0];
        if (file) {
            try {
                const content = await readFileContent(file);
                inputTextField.value = content;
            } catch (error) {
                console.error(error);
            }
        }
    });

    // Substitution cipher decryption
    function decryptSubstitution(encryptedText, substitutionKey) {
        let decryptedText = '';
        substitutionKey = substitutionKey.toUpperCase();

        for (let i = 0; i < encryptedText.length; i++) {
            let char = encryptedText[i];
            if (substitutionKey.includes(char)) {
                let index = substitutionKey.indexOf(char); // Tìm vị trí ký tự trong khóa
                decryptedText += alphabet[index]; // Thay thế bằng ký tự gốc trong alphabet
            } else {
                decryptedText += char; // Giữ nguyên ký tự không phải chữ cái
            }
        }
        return decryptedText;
    }

    // Function to validate substitution key
    function isValidKey(key) {
        if (key.length !== 26) return false; // Khóa phải có 26 ký tự
        const uniqueChars = new Set(key.toUpperCase());
        return uniqueChars.size === 26; // Đảm bảo không có ký tự trùng lặp
    }

    // Function to decrypt the text
    function decryptText() {
        const key = keyField.value;
        const contentToDecrypt = inputTextField.value; // Bản mã để giải mã

        if (isValidKey(key)) {
            const decryptedText = decryptSubstitution(contentToDecrypt, key);
            decryptedField.value = decryptedText; // Hiển thị bản rõ trong trường 'Bản rõ'
            messageDisplay.textContent = 'Giải mã thành công!';
            messageDisplay.style.color = 'green';
        } else {
            messageDisplay.textContent = 'Khóa không hợp lệ! Khóa phải có 26 ký tự duy nhất từ A-Z.';
            messageDisplay.style.color = 'red';
        }
    }

    // Event handler for decrypt button
    decryptButton.addEventListener('click', (e) => {
        e.preventDefault();
        decryptText();
    });

    // Event handler for reset button
    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        inputTextField.value = '';
        keyField.value = '';
        decryptedField.value = '';
        fileInputField.value = '';
        messageDisplay.textContent = '';
    });

    // Function to save to file
    function saveToFile(content, filename = 'decrypted_text.txt') {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    }

    // Event handler for saving
    saveButton.addEventListener('click', () => {
        if (decryptedField.value) {
            saveToFile(decryptedField.value);
            messageDisplay.textContent = 'Lưu thành công!';
            messageDisplay.style.color = 'green';
        } else {
            messageDisplay.textContent = 'Không có nội dung để lưu!';
            messageDisplay.style.color = 'red';
        }
    });
});

// Back button handler
document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html';
});
