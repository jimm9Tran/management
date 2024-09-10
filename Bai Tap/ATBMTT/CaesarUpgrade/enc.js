document.addEventListener('DOMContentLoaded', () => {
    const encryptButton = document.getElementById('encryptButton');
    const resetButton = document.getElementById('resetButton');
    const inputTextField = document.getElementById('inputText');
    const keyField = document.getElementById('key');
    const encryptedField = document.getElementById('encryptedText');
    const fileInputField = document.getElementById('inputFile');
    const messageDisplay = document.getElementById('message'); // Message display element
    const saveButton = document.getElementById('saveButton');

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
                inputTextField.value = content; // Display file content in inputText
            } catch (error) {
                console.error(error);
            }
        }
    });

    function decryptText() {
        const key = parseInt(keyField.value);
        const contentToEncrypt = inputTextField.value;

        if (!isNaN(key)) {
            const encryptedText = caesarEncrypt(contentToEncrypt, key);
            encryptedField.value = encryptedText;
        } else {
            alert("Vui lòng nhập khóa hợp lệ!");
        }
    }

    encryptButton.addEventListener('click', (e) => {
        e.preventDefault();
        decryptText();
    });

    // Event handler for reset
    resetButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission
        inputTextField.value = ''; // Clear text input
        keyField.value = ''; // Clear key input
        encryptedField.value = ''; // Clear encrypted text area
        fileInputField.value = ''; // Clear file input
        messageDisplay.textContent = ''; // Clear message display
    });

    // Function to save to file
    function saveToFile(content, filename = 'encrypted_text.txt') {
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
        if (encryptedField.value) {
            saveToFile(encryptedField.value); // Save decrypted content to a new file
            messageDisplay.textContent = 'Lưu thành công!'; // Show success message
            messageDisplay.style.color = 'green'; // Set message color to green
        } else {
            messageDisplay.textContent = 'Không có nội dung để lưu!'; // Show failure message
            messageDisplay.style.color = 'red'; // Set message color to red
        }
    });

    // Back button handler
    document.getElementById('backButton').addEventListener('click', function () {
        window.location.href = 'index.html'; 
    });
});
