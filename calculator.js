/**
 * Hàm máy tính đơn giản - Bài B1
 * @param {any} num1 - Số thứ nhất
 * @param {string} operator - Toán tử (+, -, *, /, %, **)
 * @param {any} num2 - Số thứ hai
 */
function calculate(num1, operator, num2) {
    // 1. Kiểm tra Edge Case: Input không phải số
    if (typeof num1 !== "number" || typeof num2 !== "number" || Number.isNaN(num1) || Number.isNaN(num2)) {
        return "Lỗi: Input không phải số";
    }

    // 2. Kiểm tra Edge Case: Toán tử không hợp lệ và thực hiện tính toán
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            // Kiểm tra Edge Case: Chia cho số 0
            if (num2 === 0) {
                return "Lỗi: Không thể chia cho 0";
            }
            return num1 / num2; //  Đã sửa: Chỉ còn 1 dấu /
        case "%":
            // Phép chia lấy dư cũng không được chia cho số 0
            if (num2 === 0) {
                return "Lỗi: Không thể chia cho 0";
            }
            return num1 % num2;
        case "**":
            return num1 ** num2; 
        default:
            //  Đã sửa: Bọc chuẩn bằng dấu backtick `` để truyền biến
            return `Lỗi: Operator '${operator}' không hợp lệ`;
    }
}

// ==========================================
// BỘ TEST CASES THEO YÊU CẦU CỦA ĐỀ BÀI
// ==========================================
console.log(calculate(10, "+", 5));    // → 15
console.log(calculate(10, "/", 0));    // → "Lỗi: Không thể chia cho 0"
console.log(calculate(10, "^", 5));    // → "Lỗi: Operator '^' không hợp lệ"
console.log(calculate("abc", "+", 5)); // → "Lỗi: Input không phải số"
console.log(calculate(2, "**", 10));   // → 1024

// Test thêm vài trường hợp đặc biệt cho chắc chắn
console.log(calculate(10, "%", 3));    // → 1
console.log(calculate(5, "-", 12));    // → -7