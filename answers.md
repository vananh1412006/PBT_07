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

## Câu A3 — So sánh == vs ===

### 1. Dự đoán Kết quả (true / false)
* `5 == "5"` $\rightarrow$ `true` (Do `==` chỉ so sánh giá trị, chuỗi `"5"` bị ép kiểu thành số `5`)
* `5 === "5"` $\rightarrow$ `false` (Do `===` so sánh cả giá trị và kiểu dữ liệu: Number khác String)
* `null == undefined` $\rightarrow$ `true` (Đây là quy tắc đặc biệt trong đặc tả của JavaScript)
* `null === undefined` $\rightarrow$ `false` (Vì kiểu dữ liệu khác nhau: Null khác Undefined)
* `NaN == NaN` $\rightarrow$ `false` (Quy tắc đặc biệt: `NaN` không bao giờ bằng chính nó)
* `0 == false` $\rightarrow$ `true` (Do `false` bị ép kiểu thành số `0`)
* `0 === false` $\rightarrow$ `false` (Vì kiểu dữ liệu khác nhau: Number khác Boolean)
* `"" == false` $\rightarrow$ `true` (Cả chuỗi rỗng `""` và `false` đều bị ép kiểu về số `0`)

---

### 2. Quy tắc cốt lõi: Nên dùng == hay ===? Tại sao?

**Lời khuyên:** Từ giờ trở đi, chúng ta **luôn luôn nên ưu tiên sử dụng toán tử `===` (so sánh nghiêm ngặt)** thay vì `==` (so sánh lỏng lẻo).

**Tại sao?**
1. **Tránh bug ngầm do ép kiểu tự động (Type Coercion):** Toán tử `==` tự động ép kiểu các vế một cách khó lường (như vế chuỗi rỗng `"" == false` lại ra `true`), rất dễ gây ra những lỗi logic cực kỳ khó tìm trong dự án thực tế.
2. **Tính minh bạch và rõ ràng:** Sử dụng `===` bắt buộc lập trình viên phải kiểm soát chặt chẽ kiểu dữ liệu đầu vào. Code trở nên tường minh, dễ đọc và dễ bảo trì hơn.
3. **Hiệu năng:** `===` không tốn thời gian thực hiện các bước ép kiểu ngầm định như `==`.

## Câu A4 — Truthy & Falsy

### 1. Danh sách TẤT CẢ các giá trị Falsy trong JavaScript
Trong JavaScript, chỉ có duy nhất **8 giá trị** dưới đây được coi là **Falsy** (khi đưa vào điều kiện `if` sẽ bị tính là `false`):
1. `false` (chính bản thân nó)
2. `0` (số không)
3. `-0` (số không âm)
4. `0n` (BigInt không)
5. `""` hoặc `''` hoặc `ReferenceError` (chuỗi rỗng)
6. `null`
7. `undefined`
8. `NaN` (Not a Number)

*Lưu ý: Tất cả các giá trị nằm ngoài danh sách 8 giá trị này thì ĐỀU LÀ TRUTHY (tính là `true`), bao gồm cả mảng rỗng `[]` và đối tượng rỗng `{}`.*

---

### 2. Dự đoán và giải thích kết quả chạy điều kiện `if`

* `if ("0") console.log("A");` $\rightarrow$ **CÓ IN "A"** (Vì `"0"` là một chuỗi có ký tự, thuộc nhóm Truthy).
* `if ("") console.log("B");` $\rightarrow$ **KHÔNG IN** (Vì `""` là chuỗi rỗng, thuộc nhóm Falsy).
* `if ([]) console.log("C");` $\rightarrow$ **CÓ IN "C"** (Vì tất cả các Object/Array trong JS kể cả rỗng đều là Truthy).
* `if ({}) console.log("D");` $\rightarrow$ **CÓ IN "D"** (Tương tự, đối tượng rỗng vẫn là Truthy).
* `if (null) console.log("E");` $\rightarrow$ **KHÔNG IN** (Vì `null` thuộc nhóm Falsy).
* `if (0) console.log("F");` $\rightarrow$ **KHÔNG IN** (Vì số `0` thuộc nhóm Falsy).
* `if (-1) console.log("G");` $\rightarrow$ **CÓ IN "G"** (Chỉ có số `0` là Falsy, các số khác `0` như `-1` đều là Truthy).
* `if (" ") console.log("H");` $\rightarrow$ **CÓ IN "H"** (Chuỗi có một dấu cách không phải chuỗi rỗng, thuộc nhóm Truthy).

**Kết quả in ra màn hình cuối cùng sẽ là:** `A`, `C`, `D`, `G`, `H`.

## Câu A5 — Template Literals

### Viết lại 3 cách nối chuỗi bằng Template Literals (Backtick)

#### Cách 1:
* **Gốc:** `var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";`
* **Sửa lại:**
```javascript
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

# PHẦN C — SUY LUẬN (20 điểm)

## Câu C1 (10đ) — Debug JavaScript

Qua quá trình rà soát và phân tích mã nguồn, em đã tìm ra chính xác **6 lỗi** (bao gồm cả lỗi cú pháp, lỗi logic và lỗi bất đồng bộ ẩn). Dưới đây là danh sách chi tiết:

### 1. Danh sách 6 lỗi, giải thích và cách sửa

#### ❌ Lỗi 1: Thiếu dấu chấm phẩy và dấu đóng hàm (Cú pháp)
* **Vị trí:** Dòng cuối cùng của hàm `return giaSauGiam}`.
* **Giải thích:** Thiếu dấu chấm phẩy `;` chốt câu lệnh và viết dính liền dấu đóng ngoặc nhọn `}` mà không xuống dòng, khiến code bị rối, không chuẩn convention.
* **Cách sửa:** Sửa thành:
  ```javascript
  return giaSauGiam;
  }

  