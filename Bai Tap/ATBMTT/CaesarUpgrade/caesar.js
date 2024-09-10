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

// document.addEventListener('DOMContentLoaded', () => {
//     const encryptButton = document.getElementById('encryptButton');
//     const decryptButton = document.getElementById('decryptButton');
//     const resetButton = document.getElementById('resetButton');
//     const inputTextField = document.getElementById('inputText');
//     const keyField = document.getElementById('key');
//     const decryptedField = document.getElementById('decryptedText');
//     const encryptedField = document.getElementById('encryptedText');
//     const fileInputField = document.getElementById('inputFile');
//     const messageDisplay = document.getElementById('message'); // Message display element
//     const saveButton = document.getElementById('saveButton');

//     // Function to read file content
//     function readFileContent(file) {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.onload = (event) => resolve(event.target.result);
//             reader.onerror = (error) => reject(error);
//             reader.readAsText(file);
//         });
//     }

//     // Event handler for file input change
//     fileInputField.addEventListener('change', async () => {
//         const file = fileInputField.files[0];
//         if (file) {
//             try {
//                 const content = await readFileContent(file);
//                 inputTextField.value = content; // Display file content in inputText
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//     });

//     // Function to handle encryption
//     function encryptText() {
//         const key = parseInt(keyField.value);
//         const contentToEncrypt = inputTextField.value;

//         if (!isNaN(key)) {
//             const encryptedText = caesarEncrypt(contentToEncrypt, key);
//             encryptedField.value = encryptedText;
//         } else {
//             alert("Vui lòng nhập khóa hợp lệ!");
//         }
//     }

//     function decryptText() {
//         const key = parseInt(keyField.value);
//         const contentToDecrypt = inputTextField.value;

//         if (!isNaN(key)){
//             const decryptedText = caesarDecrypt(contentToDecrypt, key);
//             decryptedField.value = decryptedText;
//         } else{
//             alert("Vui lòng nhập khóa hợp lệ!");
//         }
//     }

//     // Event handler for encryption
//     encryptButton.addEventListener('click', (e) => {
//         e.preventDefault(); // Prevent form submission
//         encryptText(); // Encrypt the text
//     });

//     decryptButton.addEventListener('click', (e) => {
//         e.preventDefault();
//         decryptText();
//     });



//     // Event handler for reset
//     resetButton.addEventListener('click', (e) => {
//         e.preventDefault(); // Prevent form submission
//         // Reset all fields to empty or default state
//         inputTextField.value = ''; // Clear text input
//         keyField.value = ''; // Clear key input
//         encryptedField.value = ''; // Clear encrypted text area
//         fileInputField.value = ''; // Clear file input
//         messageDisplay.textContent = ''; // Clear message display
//     });


//     // Event handler for saving the encrypted text
//     saveButton.addEventListener('click', () => {
//         try {
//             inputTextField.value = encryptedField.value; // Save encrypted text back to inputText
//             messageDisplay.textContent = 'Lưu thành công!'; // Show success message
//             messageDisplay.style.color = 'green'; // Set message color to green
//         } catch (error) {
//             messageDisplay.textContent = 'Lưu thất bại!'; // Show failure message
//             messageDisplay.style.color = 'red'; // Set message color to red
//             console.error(error);
//         }
//     });
// });


document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html'; 
});
