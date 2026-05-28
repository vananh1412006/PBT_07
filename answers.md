# PHẦN A — KIỂM TRA ĐỌC HIỂU

## Câu A1 — var / let / const

### 1. Dự đoán Output (Trước khi chạy code)
* **Đoạn 1:** `undefined`
* **Đoạn 2:** Lỗi `ReferenceError: Cannot access 'y' before initialization`
* **Đoạn 3:** Lỗi `TypeError: Assignment to constant variable`
* **Đoạn 4:** `[1, 2, 3, 4]`
* **Đoạn 5:** * Trong block: `2`
  * Ngoài block: `1`

---

### 2. Giải thích chi tiết kết quả

* **Đoạn 1 (var x = 5;):** Do cơ chế **Hoisting**, biến khai báo bằng `var` sẽ được đưa định nghĩa lên đầu phạm vi nhưng chưa được gán giá trị. Vì vậy khi `console.log(x)` chạy trước dòng gán, trình duyệt hiểu là biến đã tồn tại nhưng mang giá trị `undefined`.
* **Đoạn 2 (let y = 10;):** Biến khai báo bằng `let` cũng bị hoisting nhưng rơi vào vùng chết tạm thời (**Temporal Dead Zone - TDZ**). JavaScript nghiêm cấm việc truy cập vào biến `let` trước dòng khai báo chính thức, dẫn đến lỗi `ReferenceError`.
* **Đoạn 3 (const z = 15; z = 20;):** Biến khai báo bằng `const` là hằng số (đọc duy nhất). Khi ta cố tình gán lại giá trị mới cho `z` bằng toán tử `=`, JavaScript sẽ lập tức ném ra lỗi loại dữ liệu `TypeError`.
* **Đoạn 4 (const arr = [1, 2, 3];):** Khai báo `const` với Object/Array nghĩa là ta không thể thay đổi **địa chỉ ô nhớ** của hằng số đó (không gán lại `arr = ...` khác được). Tuy nhiên, ta hoàn toàn có thể thay đổi, thêm bớt các phần tử **ruột bên trong** của mảng, nên lệnh `arr.push(4)` hoạt động hoàn toàn hợp lệ.
* **Đoạn 5 (Block Scope với let):** Biến khai báo bằng `let` có phạm vi trong khối lệnh (Block Scope - cặp ngoặc `{}`). Do đó, biến `let a = 2` ở bên trong khối lệnh độc lập hoàn toàn với biến `let a = 1` ở ngoài. Khi ra ngoài khối lệnh, biến `a` bên trong bị hủy, giao diện in ra giá trị của biến `a` bên ngoài.



## Câu A2 — Data Types & Coercion

### 1. Dự đoán Output (Trước khi chạy code)
* `typeof null` $\rightarrow$ `"object"`
* `typeof undefined` $\rightarrow$ `"undefined"`
* `typeof NaN` $\rightarrow$ `"number"`
* `"5" + 3` $\rightarrow$ `"53"`
* `"5" - 3` $\rightarrow$ `2`
* `"5" * "3"` $\rightarrow$ `15`
* `true + true` $\rightarrow$ `2`
* `[] + []` $\rightarrow$ `""` (Chuỗi rỗng)
* `[] + {}` $\rightarrow$ `"[object Object]"`
* `{} + []` $\rightarrow$ `0` (hoặc `"[object Object]"` tùy thuộc vào môi trường chạy console)

---

### 2. Giải thích sự khác biệt giữa "5" + 3 và "5" - 3

* **Đối với phép toán `"5" + 3`:** Toán tử `+` trong JavaScript có hai vai trò: cộng số học hoặc **nối chuỗi**. Khi một trong hai vế là chuỗi (`"5"`), JavaScript sẽ ưu tiên ép kiểu vế còn lại thành chuỗi (`3` biến thành `"3"`) và thực hiện nối chúng lại với nhau, tạo ra chuỗi `"53"`.
* **Đối với phép toán `"5" - 3`:** Toán tử `-` (trừ) **chỉ có duy nhất một vai trò** là toán tử toán học. Chuỗi không thể dùng trong phép trừ, nên JavaScript bắt buộc phải ép kiểu chuỗi `"5"` về dạng số học là `5`. Phép toán trở thành `5 - 3` và trả về kết quả là số `2`.

---

### 3. Giải thích thêm một số kết quả đặc biệt
* `typeof null` trả về `"object"` là một lỗi thiết kế lịch sử (bug) từ phiên bản JavaScript đầu tiên nhưng không thể sửa vì sợ hỏng các hệ thống web cũ.
* `typeof NaN` (Not a Number) là `"number"` vì về mặt kỹ thuật, nó đại diện cho một giá trị số học không hợp lệ.
* `true + true` bằng `2` vì khi làm toán, giá trị Boolean `true` bị ép kiểu thành số `1` ($1 + 1 = 2$).