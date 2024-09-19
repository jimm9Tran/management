// Khi nhấn nút "Mã hóa"
document.getElementById('encryptButton').addEventListener('click', encryptText);
// Khi nhấn nút "Sinh khóa tự động"
document.getElementById('generateKeyEncryptButton').addEventListener('click', generateAndDisplayKeyEncrypt);
// Khi nhấn nút "Reset"
document.getElementById('resetEncryptButton').addEventListener('click', resetFormEncrypt);
// Khi nhấn nút "Save"
document.getElementById('saveEncryptButton').addEventListener('click', saveToFile);

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

    // Kiểm tra tính hợp lệ của khóa
    if (key === "" || key.length !== 26) {
        messageDiv.textContent = "Khóa phải gồm đúng 26 ký tự.";
        return;
    }

    // Bảng thay thế mã hóa
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
            encryptedText += char; // Giữ nguyên nếu không phải là chữ cái
        }
    }

    document.getElementById('encryptedText').value = encryptedText;
    messageDiv.textContent = "Mã hóa thành công!";
}

// Hàm reset form
function resetFormEncrypt() {
    document.getElementById('inputTextEncrypt').value = '';
    document.getElementById('keyEncrypt').value = '';
    document.getElementById('encryptedText').value = '';
    document.getElementById('message').textContent = '';
}

// Hàm lưu file với tên do người dùng tự chọn, có thể chọn đường dẫn và xóa file gốc nếu muốn
function saveToFile() {
    let content = document.getElementById('encryptedText').value;

    // Kiểm tra xem nội dung cần lưu có rỗng không
    if (!content) {
        document.getElementById('message').textContent = "Không có gì để lưu.";
        return;
    }

    // Hộp thoại để người dùng nhập tên file và chọn đường dẫn lưu
    const fileName = prompt("Nhập tên file (bao gồm đuôi .txt):", "output.txt");
    if (fileName === null || fileName.trim() === "") {
        document.getElementById('message').textContent = "Hủy lưu file.";
        return;
    }

    // Tạo đối tượng Blob để lưu file
    const blob = new Blob([content], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();

    // Tùy chọn xóa file gốc
    const deleteOriginal = confirm("Bạn có muốn xóa văn bản gốc chưa mã hóa không?");
    if (deleteOriginal) {
        document.getElementById('inputTextEncrypt').value = '';
        document.getElementById('message').textContent = "Văn bản gốc đã được xóa.";
    }
}
