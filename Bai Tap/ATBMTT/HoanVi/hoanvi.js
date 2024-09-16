function generatePermutationKey() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let shuffled = alphabet.split('');

    // Hoán vị ngẫu nhiên các ký tự trong bảng chữ cái
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Hoán vị hai ký tự
    }

    return shuffled.join('');
}

function permutationEncrypt(text, key) {
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encryptedText = '';

    // Mã hóa từng ký tự trong văn bản đầu vào
    for (let char of text) {
        if (alphabetLower.includes(char)) { // Nếu là chữ thường
            const index = alphabetLower.indexOf(char); // Tìm vị trí trong bảng chữ cái thường
            encryptedText += key[index]; // Mã hóa với khóa hoán vị
        } else if (alphabetUpper.includes(char)) { // Nếu là chữ hoa
            const index = alphabetUpper.indexOf(char); // Tìm vị trí trong bảng chữ cái hoa
            encryptedText += key[index].toUpperCase(); // Mã hóa với khóa hoán vị và chuyển sang chữ hoa
        } else {
            encryptedText += char; // Giữ nguyên ký tự không phải chữ cái
        }
    }

    return encryptedText; // Trả về văn bản đã mã hóa
}

// Ví dụ sử dụng:
const permutationKey = generatePermutationKey(); // Sinh ra một khóa hoán vị
console.log('Khóa hoán vị:', permutationKey);

const originalText = "Hello World!";
const encryptedText = permutationEncrypt(originalText, permutationKey);
console.log('Văn bản gốc:', originalText);
console.log('Văn bản đã mã hóa:', encryptedText);
