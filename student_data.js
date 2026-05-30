// Mảng dữ liệu sinh viên đề bài cho
const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" }
];

// Khởi tạo các biến tích lũy để tính toán (Dùng cho đếm và tính trung bình môn)
let counts = { "Giỏi": 0, "Khá": 0, "Trung bình": 0, "Yếu": 0 };

let maxStudent = null;
let minStudent = null;

let totalMath = 0;
let totalPhysics = 0;
let totalCS = 0;

let totalMaleTB = 0, countMale = 0;
let totalFemaleTB = 0, countFemale = 0;

console.log("--- BẢNG KẾT QUẢ XẾP LOẠI SINH VIÊN ---");
console.log("| STT | Tên    | TB   | Xếp loại    |");
console.log("|-----|--------|------|-------------|");

// Sử dụng vòng lặp for thuần túy theo đúng yêu cầu của thầy
for (let i = 0; i < students.length; i++) {
    let sv = students[i];

    // 1. Tính điểm trung bình (math×0.4 + physics×0.3 + cs×0.3)
    let diemTB = sv.math * 0.4 + sv.physics * 0.3 + sv.cs * 0.3;
    // Làm tròn lấy 1 chữ số thập phân cho đẹp bảng
    diemTB = Math.round(diemTB * 10) / 10; 

    // 2. Xếp loại dùng cấu trúc if/else
    let xepLoai = "";
    if (diemTB >= 8.0) {
        xepLoai = "Giỏi";
    } else if (diemTB >= 6.5) {
        xepLoai = "Khá";
    } else if (diemTB >= 5.0) {
        xepLoai = "Trung bình";
    } else {
        xepLoai = "Yếu";
    }

    // Tích lũy đếm số lượng từng loại
    counts[xepLoai]++;

    // 3. In dòng kết quả của sinh viên hiện tại ra bảng
    // Sử dụng padEnd để căn lề chữ cho thẳng hàng tăm tắp như bảng mẫu
    let sttStr = String(i + 1).padEnd(3);
    let nameStr = sv.name.padEnd(6);
    let tbStr = String(diemTB.toFixed(1)).padEnd(4);
    console.log(`| ${sttStr} | ${nameStr} | ${tbStr} | ${xepLoai.padEnd(11)} |`);

    // 4. Tìm SV có điểm TB cao nhất và thấp nhất
    if (maxStudent === null || diemTB > maxStudent.diemTB) {
        maxStudent = { name: sv.name, diemTB: diemTB };
    }
    if (minStudent === null || diemTB < minStudent.diemTB) {
        minStudent = { name: sv.name, diemTB: diemTB };
    }

    // 5. Tích lũy điểm để tính TB môn toàn lớp
    totalMath += sv.math;
    totalPhysics += sv.physics;
    totalCS += sv.cs;

    // 6. Bonus: Tích lũy điểm theo giới tính
    if (sv.gender === "M") {
        totalMaleTB += diemTB;
        countMale++;
    } else if (sv.gender === "F") {
        totalFemaleTB += diemTB;
        countFemale++;
    }
}

console.log("|-----|--------|------|-------------|\n");

// ==========================================
// IN CÁC KẾT QUẢ THỐNG KÊ RA CONSOLE
// ==========================================
console.log("--- THỐNG KÊ SỐ LƯỢNG XẾP LOẠI ---");
console.log(`- Giỏi: ${counts["Giỏi"]} SV`);
console.log(`- Khá: ${counts["Khá"]} SV`);
console.log(`- Trung bình: ${counts["Trung bình"]} SV`);
console.log(`- Yếu: ${counts["Yếu"]} SV\n`);

console.log("--- THỐNG KÊ CAO NHẤT / THẤP NHẤT ---");
console.log(`- SV có điểm TB cao nhất: ${maxStudent.name} (${maxStudent.diemTB.toFixed(1)})`);
console.log(`- SV có điểm TB thấp nhất: ${minStudent.name} (${minStudent.diemTB.toFixed(1)})\n`);

console.log("--- ĐIỂM TRUNG BÌNH MÔN TOÀN LỚP ---");
console.log(`- Toán (Math): ${(totalMath / students.length).toFixed(2)}`);
console.log(`- Vật lý (Physics): ${(totalPhysics / students.length).toFixed(2)}`);
console.log(`- Khoa học máy tính (CS): ${(totalCS / students.length).toFixed(2)}\n`);

console.log("--- BONUS: ĐIỂM TRUNG BÌNH THEO GIỚI TÍNH ---");
console.log(`- Nam (M): ${(totalMaleTB / countMale).toFixed(2)}`);
console.log(`- Nữ (F): ${(totalFemaleTB / countFemale).toFixed(2)}`);