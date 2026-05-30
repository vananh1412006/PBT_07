// ==========================================
// VERSION 1: CLASSIC FIZZBUZZ (1 - 100)
// ==========================================
function classicFizzBuzz() {
    console.log("--- VERSION 1: CLASSIC FIZZBUZZ (1 - 100) ---");
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// ==========================================
// VERSION 2: CUSTOM FIZZBUZZ (NÂNG CAO)
// ==========================================
/**
 * Hàm FizzBuzz tùy biến theo bộ quy tắc rules truyền vào
 * @param {number} n - Số lượng phần tử in ra (từ 1 đến n)
 * @param {Array} rules - Mảng các đối tượng quy tắc [{ divisor, word }]
 */
function customFizzBuzz(n, rules) {
    console.log(`\n--- VERSION 2: CUSTOM FIZZBUZZ (1 - ${n}) ---`);
    
    for (let i = 1; i <= n; i++) {
        let resultStr = ""; // Chuỗi rỗng để tích lũy các từ thỏa mãn từng divisor

        // Duyệt qua tất cả các quy tắc trong mảng rules
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                resultStr += rules[j].word; // Nếu chia hết thì cộng dồn từ (ví dụ: "Fizz" + "Jazz")
            }
        }

        // Nếu chuỗi tích lũy không rỗng -> In chuỗi đó ra. Ngược lại -> In chính số đó.
        if (resultStr !== "") {
            console.log(`${i} = "${resultStr}"`);
        } else {
            console.log(i);
        }
    }
}

// ==========================================
// BỘ TEST CASES THEO YÊU CẦU CỦA ĐỀ BÀI
// ==========================================

// 1. Chạy thử bản Classic
classicFizzBuzz();

// 2. Chạy thử bản Nâng cao với 3 quy tắc: 3 (Fizz), 5 (Buzz), 7 (Jazz)
const myRules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

// Chạy thử từ 1 đến 35 (hoặc 105) để thấy rõ kết quả ghép chuỗi
customFizzBuzz(35, myRules);