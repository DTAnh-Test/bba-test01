# Tổng hợp kiến thức Lesson 04
Ghi chú, tổng hợp lại các kiến thức đã học
---
---

## Kiến thức về Array - Object

1. **Object**
-   Khái niệm: Khai báo đối tượng, dữ liệu tổ chức theo thực thể.
-   Áp dụng: Khi cần tổ chức dữ liệu theo từng thực thể.
-   Cú pháp:
    ```
    const <object_name> = {
        [key1] : [Value1],
        [key2] : {
            [key3] : [Value3]
        }
    };
    ```
-   Có thể gán lại giá trị của phần tử trong object, không gán lại được cho cả object.
-   Có thể add thêm phần tử cho object `(Ex: obj.adress="{value}")`. Không thể khai báo trực tiếp lồng object được `(Ex: obj.adress.city="{value}")` mà phải khai báo từng lớp `(Ex: obj.adress={}; obj.adress.city = "{Value}")`.

2. **Array**
-   Array là kiểu dữ liệu dùng để lưu trữ danh sách các giá trị có thứ tự, có thể chứa nhiều kiểu dữ liệu khác nhau.
-   Cú pháp: 
    ```
    const <ten_mang> = [giá_tri_1, gia_tri_2,...,gia_tri_n];
    ```
    ```
    let <ten_mang> = new Array("giá_tri_1","gia_tri_2",...,"gia_tri_n");
    ```
 - Truy xuất dữ liệu trong mảng: Dùng index (chỉ mục/ vị trí): Index trong mảng bắt đầu từ 0 là vị trí của phần tử trong mảng.
     ```
    const <ten_mang> = [giá_tri_1, gia_tri_2,...,gia_tri_n];
    console.log(<ten_mang>[index])
    ```
- Lấy độ dài của mảng: `console.log(<ten_mang>.length);` : Trả ra số lượng phần tử trong mảng.
3. **Kết hợp Array và Object**
    ```
    const arr1 = [
        {
            key1 : value1;
            key2 : value2;
        },
        {
        
            key1 : value1;
            key2 : value2;
        },
    ]
    console.log(`[${arr1[i].key1}] ${arr1[i].key2}`);
    ```

