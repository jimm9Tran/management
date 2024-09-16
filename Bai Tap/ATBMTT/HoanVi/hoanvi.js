function permuteEncrypt(text, key){
    const length = key.length;
    let encryptedText = "";

    // Padding nếu chiều dài văn bản không chia hết cho độ dài khóa
    while (text.length % length !== 0){
        text += ' ';
    }

    for (let i = 0; i < text.length; i += length) {
        let block = text.slice(i, i + length);
        let encryptedBlock = Array(length);

        for (let j = 0; j < length; j++){
            encryptedBlock[j] = block[key[j] - 1];
        }

        encryptedText += encryptedBlock.join('');
    }

    return encryptedText;
}

function permuteDecrypt(encryptedText, key) {
    const length = key.length;
    let decryptedText = '';

    for (let i = 0; i < encryptedText.length; i += length){
        let block = encryptedText.slice(i, i + length);
        let decryptedBlock = Array(length);

        for (let j = 0; j < length; j++){
            decryptedBlock[key[j] - 1] = block[j];
        }

        decryptedText += decryptedBlock.join('');
    }

    return decryptedText.trim(); // Xóa khoảng trắng nếu có
}

document.addEventListener('DOMContentLoaded', () => {
    const inputFile = document.getElementById('inputFile');
    const inputText = document.getElementById('inputText');
    const keyField = document.getElementById('key');
    const encryptedText = document.getElementById('encryptedText');
    const encryptButton = document.getElementById('encryptButton');
    const resetButton = document.getElementById('resetButton');
    const saveButton = document.getElementById('saveButton');
    const messageDisplay = document.getElementById('message');

    // Hàm đọc nội dung tệp
    inputFile.addEventListener('change', async () => {
        const file = inputFile.files[0];
        if (file) {
            try {
                const content = await readFileContent(file);
                inputText.value = content; // Hiển thị nội dung tệp vào ô văn bản
            } catch (error) {
                console.error("Error reading file:", error);
            }
        }
    });

    // Hàm mã hóa hoán vị
    encryptButton.addEventListener('click', () => {
        const text = inputText.value;
        const keyString = keyField.value;
        const key = keyString.split(',').map(Number); // Chuyển đổi khóa thành mảng các số
        
        if (!text || key.length === 0 || key.includes(NaN)) {
            messageDisplay.textContent = "Vui lòng nhập văn bản và khóa hợp lệ.";
            messageDisplay.style.color = 'red';
            return;
        }

        const encrypted = permuteEncrypt(text, key);
        encryptedText.value = encrypted;
        messageDisplay.textContent = "Mã hóa thành công!";
        messageDisplay.style.color = 'green';
    });

    // Hàm reset
    resetButton.addEventListener('click', () => {
        inputText.value = '';
        keyField.value = '';
        encryptedText.value = '';
        messageDisplay.textContent = '';
        inputFile.value = ''; // Xóa file input
    });

    // Hàm lưu bản mã
    saveButton.addEventListener('click', () => {
        if (encryptedText.value) {
            saveToFile(encryptedText.value, 'encrypted.txt');
            messageDisplay.textContent = "Lưu thành công!";
            messageDisplay.style.color = 'green';
        } else {
            messageDisplay.textContent = "Không có bản mã để lưu.";
            messageDisplay.style.color = 'red';
        }
    });
});

// Hàm đọc file
function readFileContent(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => resolve(event.target.result);
        reader.onerror = (error) => reject(error);
        reader.readAsText(file);
    });
}

// Hàm lưu nội dung vào file
function saveToFile(content, filename) {
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
