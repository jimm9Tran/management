document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText); // Nút giải mã
document.getElementById('resetButton').addEventListener('click', resetForm);
document.getElementById('inputFile').addEventListener('change', handleFileUpload);
document.getElementById('saveButton').addEventListener('click', saveToFile);
document.getElementById('generateKeyButton').addEventListener('click', generateAndDisplayKey);

// Hàm sinh khóa ngẫu nhiên
function generateRandomKey() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let shuffledAlphabet = alphabet.split('').sort(() => Math.random() - 0.5).join('');
    return shuffledAlphabet;
}

// Hàm sinh và hiển thị khóa ngẫu nhiên
function generateAndDisplayKey() {
    const randomKey = generateRandomKey();
    document.getElementById('key').value = randomKey; // Hiển thị khóa ngẫu nhiên trong ô nhập khóa
    document.getElementById('message').textContent = "Khóa ngẫu nhiên đã được sinh!";
}

// Hàm mã hóa
function encryptText() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let key = document.getElementById('key').value.toUpperCase();
    const messageDiv = document.getElementById('message');

    // Kiểm tra khóa hợp lệ
    if (key === "" || key.length !== 26) {
        messageDiv.textContent = "Khóa phải gồm đúng 26 ký tự.";
        return;
    }

    // Tạo bảng thay thế từ khóa
    let substitution = {};
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 26; i++) {
        substitution[alphabet[i]] = key[i];
    }

    // Mã hóa văn bản
    let encryptedText = '';
    for (let char of inputText) {
        if (alphabet.includes(char)) {
            encryptedText += substitution[char];
        } else {
            encryptedText += char;
        }
    }

    document.getElementById('encryptedText').value = encryptedText;
    messageDiv.textContent = "Mã hóa thành công!";
}

// Hàm giải mã
function decryptText() {
    const encryptedText = document.getElementById('encryptedText').value.toUpperCase();
    let key = document.getElementById('key').value.toUpperCase();
    const messageDiv = document.getElementById('message');

    // Kiểm tra khóa hợp lệ
    if (key === "" || key.length !== 26) {
        messageDiv.textContent = "Khóa phải gồm đúng 26 ký tự.";
        return;
    }

    // Tạo bảng giải mã từ khóa
    let reverseSubstitution = {};
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 26; i++) {
        reverseSubstitution[key[i]] = alphabet[i];
    }

    // Giải mã văn bản
    let decryptedText = '';
    for (let char of encryptedText) {
        if (alphabet.includes(char)) {
            decryptedText += reverseSubstitution[char];
        } else {
            decryptedText += char;
        }
    }

    document.getElementById('decryptedText').value = decryptedText;
    messageDiv.textContent = "Giải mã thành công!";
}

// Hàm reset form
function resetForm() {
    document.getElementById('inputText').value = '';
    document.getElementById('key').value = '';
    document.getElementById('encryptedText').value = '';
    document.getElementById('decryptedText').value = '';
    document.getElementById('message').textContent = '';
}

// Hàm xử lý tệp
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('inputText').value = e.target.result;
        };
        reader.readAsText(file);
    }
}

// Hàm lưu file
function saveToFile() {
    const text = document.getElementById('encryptedText').value;
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'encrypted.txt';
    link.click();
}
