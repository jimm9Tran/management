document.getElementById('decryptButton').addEventListener('click', function() {
    const key = document.getElementById('key').value;
    const text = document.getElementById('inputText').value;
    if (!key || !text) {
        document.getElementById('message').innerText = 'Vui lòng nhập khóa và nội dung mã hóa!';
        return;
    }
    const decryptedText = vigenereDecrypt(text, key);
    document.getElementById('decryptedText').value = decryptedText;
    document.getElementById('message').innerText = 'Giải mã thành công!';
});

document.getElementById('inputFile').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        document.getElementById('inputText').value = event.target.result;
    };
    reader.readAsText(file);
});

function vigenereDecrypt(text, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < text.length; i++) {
        const letter = text[i];
        if (alphabet.includes(letter)) {
            const textIndex = alphabet.indexOf(letter);
            const keyIndex = alphabet.indexOf(key[j % key.length]);
            result += alphabet[(textIndex - keyIndex + alphabet.length) % alphabet.length];
            j++;
        } else {
            result += letter;
        }
    }
    return result;
}

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('inputText').value = '';
    document.getElementById('key').value = '';
    document.getElementById('decryptedText').value = '';
    document.getElementById('message').innerText = '';
});

document.getElementById('saveButton').addEventListener('click', function() {
    const blob = new Blob([document.getElementById('decryptedText').value], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'decrypted.txt';
    link.click();
});

document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
