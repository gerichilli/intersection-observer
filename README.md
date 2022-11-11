# GSAP ScrollTrigger

## Problems

- Chú ý khi muốn trigger animation ở các element sát góc màn hình (có thể event sẽ không được trigger nếu giá trị top/bottom của Trigger chưa chạm đến vị trí của element)
- Thêm dependency: Khoảng 23kb

## Advance

- Hỗ trợ animation với css properties clip-path
- Sử dụng với hoạt ảnh phức tạp (nhiều bước) mà không cần customize nhiều vì Gsap đã hỗ trợ.

# Intersection Observer

## Problems

- Phải customize nhiều với hoạt ảnh phức tạp
- Không hỗ trợ tốt với animation sử dụng clip-path, có thể sẽ không hoạt động trong trường hợp:

```css
clip-path: polygon(0 0, 0 0, 0 100%, 0 100%) => clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)
```

## Advance

- Có thể viết 1 custom hook để tái sử dụng
- Không phải thêm dependency

=> Với 1 trang web chỉ cần các animation đơn giản như thay đổi position / opacity => Dùng Intersection Observer. Với Object phức tạp hơn thì nên sử dụng ScrollTrigger.
