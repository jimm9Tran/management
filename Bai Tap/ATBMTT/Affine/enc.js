// enc.js

/**
 * Hàm tính Ước chung lớn nhất (GCD) của hai số bằng thuật toán Euclid.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} GCD của a và b
 */
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}

/**
 * Hàm kiểm tra xem hai số có coprime hay không.
 * @param {number} a 
 * @param {number} b 
 * @returns {boolean} true nếu a và b coprime, ngược lại false
 */
function areCoprime(a, b) {
    return gcd(a, b) === 1;
}

/**
 * Hàm lấy nội dung từ tệp được chọn và hiển thị vào textarea.
 * @param {File} file 
 * @param {HTMLElement} textarea 
 */
function readFile(file, textarea) {
    const reader = new FileReader();
    reader.onload = function(event) {
        textarea.value = event.target.result;
    };
    reader.onerror = function() {
        displayMessage('Không thể đọc tệp.', 'error');
    };
    reader.readAsText(file);
}

/**
 * Hàm tải xuống nội dung dưới dạng tệp.
 * @param {string} filename 
 * @param {string} content 
 */
function downloadFile(filename, content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}
