// DES Encryption (dùng CryptoJS cho đơn giản)
function encryptDES() {
  let inputText = document.getElementById('inputText').value;
  let key = document.getElementById('key').value;

  console.log("Dữ liệu đầu vào:", inputText);
  console.log("Khóa:", key);

  if (key.length !== 8) {
    alert('Khóa phải có độ dài 8 ký tự.');
    return;
  }

  if (inputText.trim() === '') {
    alert('Dữ liệu đầu vào không được để trống.');
    return;
  }

  try {
    let encrypted = CryptoJS.DES.encrypt(inputText, key).toString();
    console.log("Dữ liệu đã mã hóa:", encrypted);
    document.getElementById('outputText').value = encrypted;
  } catch (error) {
    console.error("Lỗi trong quá trình mã hóa:", error);
    alert('Có lỗi trong quá trình mã hóa.');
  }
}

// Reset form
function resetForm() {
  document.getElementById('inputText').value = '';
  document.getElementById('key').value = '';
  document.getElementById('outputText').value = '';
}

// Lưu file
function saveFile() {
  let encryptedText = document.getElementById('outputText').value;
  if (encryptedText === '') {
    alert('Chưa có dữ liệu để lưu.');
    return;
  }

  let blob = new Blob([encryptedText], { type: 'text/plain' });
  let link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'encrypted.txt';
  link.click();
}

// DES Decryption (dùng CryptoJS cho đơn giản)
function decryptDES() {
  let encryptedText = document.getElementById('inputText').value;
  let key = document.getElementById('key').value;
  if (key.length !== 8) {
    alert('Khóa phải có độ dài 8 ký tự.');
    return;
  }

  try {
    let decrypted = CryptoJS.DES.decrypt(encryptedText, key);
    let originalText = decrypted.toString(CryptoJS.enc.Utf8);

    if (originalText === '') {
      alert('Dữ liệu giải mã không hợp lệ.');
    } else {
      document.getElementById('outputText').value = originalText;
    }
  } catch (e) {
    alert('Giải mã thất bại. Kiểm tra dữ liệu và khóa.');
  }
}

// Function to load file content into inputText when a file is selected
document.getElementById('inputFile').addEventListener('change', function(event) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    // Load file and set the content to inputText
    reader.onload = function(e) {
      document.getElementById('inputText').value = e.target.result;
    };

    reader.readAsText(file);
  }
});

function generateRandomKey() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let key = '';
  for (let i = 0; i < 8; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById('key').value = key;
}
