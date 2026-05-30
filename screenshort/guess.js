// 1. Máy tự động random một số ngẫu nhiên từ 1 đến 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Khởi tạo các biến quản lý trạng thái trò chơi
let attempts = 0;              // Đếm số lần đoán
const maxAttempts = 7;         // Giới hạn 7 lần đoán
const guessedNumbers = [];     // Mảng lưu lại các số user đã đoán để chống trùng
let hasWon = false;            // Trạng thái thắng cuộc

alert("Chào mừng bác đến với Mini Game Đoán Số!\nMáy đã bí mật chọn 1 số từ 1-100. Bác có tối đa 7 lượt để trổ tài!");

// 2. Vòng lặp chính điều khiển trò chơi (Chạy tối đa 7 lần)
while (attempts < maxAttempts) {
    let remaining = maxAttempts - attempts;
    let userInput = prompt(`Lượt thứ ${attempts + 1}/${maxAttempts} (Còn ${remaining} lượt).\nMời bác nhập một số từ 1 đến 100:`);

    // Nếu bấm nút "Hủy" (Cancel) trên hộp thoại -> Thoát game luôn
    if (userInput === null) {
        alert("Bác đã bấm hủy chơi. Hẹn gặp lại bác lần sau!");
        break;
    }

    // Chuyển đổi dữ liệu nhập vào thành số nguyên
    let guess = parseInt(userInput.trim(), 10);

    // 3. Yêu cầu thêm: Validate input (Chỉ chấp nhận số từ 1-100)
    if (Number.isNaN(guess) || guess < 1 || guess > 100) {
        alert("Lỗi: Vui lòng chỉ nhập số nguyên hợp lệ trong khoảng từ 1 đến 100 thôi bác ơi!");
        continue; // Bỏ qua lượt lỗi này, không tính lượt đoán, bắt nhập lại
    }

    // 4. Yêu cầu thêm: Kiểm tra nếu user nhập trùng số đã đoán trước đó
    let isDuplicated = false;
    for (let i = 0; i < guessedNumbers.length; i++) {
        if (guessedNumbers[i] === guess) {
            isDuplicated = true;
            break;
        }
    }
    if (isDuplicated) {
        alert(`Bạn đã đoán số ${guess} này rồi! Hãy thử một số khác nhé.`);
        continue; // Không tính lượt đoán, bắt nhập lại số khác
    }

    // Nếu vượt qua hết các bước check lỗi, chính thức ghi nhận 1 lượt đoán hợp lệ
    attempts++;
    guessedNumbers.push(guess); // Lưu số này vào danh sách đã đoán

    // 5. So sánh số đoán với đáp án của máy
    if (guess === targetNumber) {
        alert(`Đúng rồi!\nBạn đoán đúng sau ${attempts} lần! 🎉`);
        hasWon = true;
        break; // Đoán trúng thì dừng cuộc chơi luôn
    } else if (guess < targetNumber) {
        alert("Thấp hơn rồi bác ơi! Số của máy lớn hơn.");
    } else {
        alert("Cao hơn rồi bác ơi! Số của máy nhỏ hơn.");
    }
}

// 6. Xử lý trường hợp hết lượt (Thua cuộc)
if (!hasWon && attempts === maxAttempts) {
    alert(`Rất tiếc, bác đã hết lượt đoán! 😢\nĐáp án chính xác của máy là: ${targetNumber}. Chúc bác may mắn lần sau!`);
}