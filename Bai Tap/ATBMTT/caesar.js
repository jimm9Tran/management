function caesarEncrypt(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            }
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}


function caesarDecrypt(text, key) {
    return caesarEncrypt(text, 26 - key);
}

document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encryptButton');
    const decryptButton = document.getElementById('decryptButton');
    const inputTextField = document.getElementById('inputText');
    const keyField = document.getElementById('key');
    const encryptedField = document.getElementById('encryptedText');
    const decryptedField = document.getElementById('decryptedText');
    const fileInputField = document.getElementById('inputFile');

    function readFileContent(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => resolve(event.target.result);
            reader.onerror = (error) => reject(error);
            reader.readAsText(file);
            // inputTextField.value = reader;
        });
    }

    // Event handler for file input change
    fileInputField.addEventListener('change', async () => {
        const file = fileInputField.files[0];
        if (file) {
            try {
                const content = await readFileContent(file);
                inputTextField.value = content;
                fileInfo.textContent = `Tên tệp: ${file.name}, Kích thước: ${file.size} bytes`;
            } catch (error) {
                fileInfo.textContent = 'Không thể đọc tệp!';
                console.error(error);
            }
        } else {
            fileInfo.textContent = '';
        }
    });

    async function processText(isEncrypt) {
        const key = parseInt(keyField.value);
        const file = fileInputField.files[0];
        let contentToProcess = inputTextField.value;

        if (!isNaN(key)) {
            if (file) {
                contentToProcess = await readFileContent(file);
                inputTextField.value = contentToProcess;
            } else if (!contentToProcess) {
                alert("Vui lòng nhập văn bản hoặc chọn một tệp!");
                return;
            }

            if (isEncrypt) {
                const encryptedText = caesarEncrypt(contentToProcess, key);
                encryptedField.value = encryptedText;
            } else {
                const decryptedText = caesarDecrypt(caesarEncrypt(contentToProcess), key);
                decryptedField.value = contentToProcess;
            }
        } else {
            alert("Vui lòng nhập khóa hợp lệ!");
        }
    };

    encryptButton.addEventListener('click', (e) => {
        e.preventDefault();
        processText(true);
    });

    decryptButton.addEventListener('click', (e) => {
        e.preventDefault();
        processText(false);
    });

    // Event handler for reset
    resetButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        // Reset all fields to empty or default state
        inputTextField.value = '';
        keyField.value = '';
        encryptedField.value = '';
        decryptedField.value = '';
        fileInputField.value = '';
    });
});
