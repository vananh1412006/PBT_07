function inHoaDon(danhSachMon, ngayTrongTuan, coTip = true) {
    // 1. Tính tổng tiền gốc
    let tongGoc = 0;
    danhSachMon.forEach(mon => {
        tongGoc += mon.gia * mon.soLuong;
    });

    // 2. Tính phần trăm giảm giá theo quy tắc
    let phanTramGiam = 0;
    if (tongGoc > 1000000) {
        phanTramGiam = 15;
    } else if (tongGoc > 500000) {
        phanTramGiam = 10;
    }

    // Nếu là thứ 3 (Wednesday), giảm thêm 5%
    if (ngayTrongTuan.toLowerCase() === 'wednesday' || ngayTrongTuan.toLowerCase() === 'thứ 3') {
        phanTramGiam += 5;
    }

    // 3. Tính các chi phí
    let tienGiam = (tongGoc * phanTramGiam) / 100;
    let tongSauGiam = tongGoc - tienGiam;

    let vat = Math.round(tongSauGiam * 0.08);
    let tip = coTip ? Math.round(tongSauGiam * 0.05) : 0;

    let thanhToan = tongSauGiam + vat + tip;

    // Helper hàm định dạng tiền tệ (Ví dụ: 130000 -> 130.000đ hoặc 130k tùy mục hiển thị)
    const formatVND = (num) => num.toLocaleString('vi-VN') + 'đ';
    const formatK = (num) => (num % 1000 === 0 && num > 0) ? `${num / 1000}k` : formatVND(num);

    // 4. In hóa đơn
    console.log("╔════════════════════════════════════════════╗");
    console.log("║               HÓA ĐƠN NHÀ HÀNG             ║");
    console.log("╠════════════════════════════════════════════╣");

    // In danh sách món ăn
    danhSachMon.forEach((mon, index) => {
        let stt = `${index + 1}.`;
        let thongTinMon = `${mon.ten.padEnd(12)} x${mon.soLuong}   @${formatK(mon.gia).padEnd(5)} = ${formatK(mon.gia * mon.soLuong)}`;
        // Căn lề hai bên cho đẹp
        let dongMon = `║ ${stt} ${thongTinMon}`;
        console.log(dongMon.padEnd(45) + "║");
    });

    console.log("╠════════════════════════════════════════════╣");
    
    // In phần tổng kết tiền
    const inDongTien = (nhãn, soTien) => {
        let chuoiTien = formatVND(soTien);
        let dong = `║ ${nhãn.padEnd(23)}${chuoiTien.padStart(19)} ║`;
        console.log(dong);
    };

    inDongTien("Tổng cộng:", tongGoc);
    inDongTien(`Giảm giá (${phanTramGiam}%):`, tienGiam);
    inDongTien("VAT (8%):", vat);
    inDongTien(`Tip (${coTip ? '5' : '0'}%):`, tip);

    console.log("╠════════════════════════════════════════════╣");
    inDongTien("THANH TOÁN:", thanhToan);
    console.log("╚════════════════════════════════════════════╝");
}

// === CHẠY THỬ NGHIỆM ĐÚNG THEO DATA VÍ DỤ ===
const dataMau = [
    { ten: "Phở bò", gia: 65000, soLuong: 2 },
    { ten: "Trà đá", gia: 5000, soLuong: 3 },
    { ten: "Bún chả", gia: 55000, soLuong: 1 }
];

// Chạy thử với ngày Thứ Hai (Monday) để test xem có giảm giá không
console.log("TEST CASE 1: Ngày thường (Monday)");
inHoaDon(dataMau, "Monday", true);

console.log("\nTEST CASE 2: Ngày Thứ 3 (Wednesday) + Tổng > 500k");
const dataLon = [
    { ten: "Lẩu Thái", gia: 450000, soLuong: 1 },
    { ten: "Bò ba chỉ", gia: 90000, soLuong: 2 },
    { ten: "Nước ngọt", gia: 15000, soLuong: 4 }
]; // Tổng gốc = 690k (>500k nên giảm 10%, gặp Thứ 3 cộng thêm 5% = 15%)
inHoaDon(dataLon, "Wednesday", true);