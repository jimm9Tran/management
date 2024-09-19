document.getElementById('encryptButton').addEventListener('click', encryptText);
document.getElementById('decryptButton').addEventListener('click', decryptText);
document.getElementById('resetEncryptButton').addEventListener('click', resetFormEncrypt);
document.getElementById('resetDecryptButton').addEventListener('click', resetFormDecrypt);
document.getElementById('inputFileEncrypt').addEventListener('change', handleFileUploadEncrypt);
document.getElementById('inputFileDecrypt').addEventListener('change', handleFileUploadDecrypt);
document.getElementById('generateKeyEncryptButton').addEventListener('click', generateAndDisplayKeyEncrypt);
document.getElementById('saveEncryptButton').addEventListener('click', () => saveToFile('encrypt'));
document.getElementById('saveDecryptButton').addEventListener('click', () => saveToFile('decrypt'));

// Hàm sinh khóa ngẫu nhiên cho mã hóa
function generateRandomKey() {
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let shuffledAlphabet = alphabet.split('').sort(() => Math.random() - 0.5).join('');
    return shuffledAlphabet;
}

// Hàm hiển thị khóa ngẫu nhiên trong mã hóa
function generateAndDisplayKeyEncrypt() {
    const randomKey = generateRandomKey();
    document.getElementById('keyEncrypt').value = randomKey;
    document.getElementById('message').textContent = "Khóa ngẫu nhiên đã được sinh!";
}

// Hàm mã hóa
function encryptText() {
    const inputText = document.getElementById('inputTextEncrypt').value.toUpperCase();
    let key = document.getElementById('keyEncrypt').value.toUpperCase();
    const messageDiv = document.getElementById('message');

    if (key === "" || key.length !== 26) {
        messageDiv.textContent = "Khóa phải gồm đúng 26 ký tự.";
        return;
    }

    let substitution = {};
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 26; i++) {
        substitution[alphabet[i]] = key[i];
    }

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
    const encryptedText = document.getElementById('inputTextDecrypt').value.toUpperCase();
    let key = document.getElementById('keyDecrypt').value.toUpperCase();
    const messageDiv = document.getElementById('message');

    if (key === "" || key.length !== 26) {
        messageDiv.textContent = "Khóa phải gồm đúng 26 ký tự.";
        return;
    }

    let reverseSubstitution = {};
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 26; i++) {
        reverseSubstitution[key[i]] = alphabet[i];
    }

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

// Hàm xử lý upload file trong mã hóa
function handleFileUploadEncrypt(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('inputTextEncrypt').value = e.target.result;
        };
        reader.readAsText(file);
    }
}

// Hàm xử lý upload file trong giải mã
function handleFileUploadDecrypt(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('inputTextDecrypt').value = e.target.result;
        };
        reader.readAsText(file);
    }
}

// Kiểm tra xem nội dung cần lưu có rỗng không
if (!content) {
    document.getElementById('message').textContent = `Không có gì để lưu trong phần ${type === 'encrypt' ? 'mã hóa' : 'giải mã'}.`;
    return;
}

// Hộp thoại để người dùng nhập tên file và chọn đường dẫn lưu
const fileName = prompt("Nhập tên file (bao gồm đuôi .txt):", "output.txt");
if (fileName === null || fileName.trim() === "") {
    document.getElementById('message').textContent = "Hủy lưu file.";
    return;
}

const blob = new Blob([content], { type: 'text/plain' });
const link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = fileName;
link.click();

// Tùy chọn xóa file gốc
const deleteOriginal = confirm("Bạn có muốn xóa tệp gốc không?");
if (deleteOriginal && type === 'encrypt') {
    document.getElementById('inputTextEncrypt').value = '';
    document.getElementById('message').textContent = "Tệp gốc đã được xóa.";
} else if (deleteOriginal && type === 'decrypt') {
    document.getElementById('inputTextDecrypt').value = '';
    document.getElementById('message').textContent = "Tệp gốc đã được xóa.";
}

