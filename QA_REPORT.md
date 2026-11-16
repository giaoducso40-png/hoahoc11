# BÁO CÁO KIỂM THỬ CHEMVERSE 11

Ngày kiểm thử: 16/11/2026

## Phạm vi

- 5 chủ đề: Dẫn xuất halogen, Alcohol, Phenol, Hợp chất carbonyl, Carboxylic acid.
- 25 câu hỏi trắc nghiệm có đáp án và giải thích.
- Dashboard, lưu tiến độ, sơ đồ tư duy, 3 trò chơi, luyện tập, nhật ký sai, hồ sơ, xuất–nhập–đặt lại dữ liệu.
- Chạy tĩnh, không CDN, không API, đường dẫn tương đối phù hợp GitHub Pages.

## Vòng hồi quy 1

Kết quả: ĐẠT.

- JavaScript của dữ liệu và ứng dụng qua kiểm tra cú pháp.
- Gói đủ 5 chủ đề, 25 ID câu hỏi duy nhất, mỗi câu có 4 phương án, đúng một đáp án và giải thích.
- Đã khóa các biểu thức: `a/2 H₂`, `3n/2 O₂`, `n(n+1)/2`, `LiAlH₄`, `prop-2-en-1-ol`, `prop-2-enal`, đáp án Câu 9 là `(a), (c)`.
- Không có URL runtime bên ngoài, đường dẫn gốc `/assets/...` hoặc tài nguyên thiếu.
- Kiểm thử trực tiếp bằng Chrome: trang mở đầu, dashboard, mở bài, đánh dấu hoàn thành, lưu sau tải lại, chấm câu hỏi, phản hồi sai, mở trò chơi, sơ đồ tư duy và cá nhân hóa hồ sơ đều đạt.
- Rà trực quan các màn hình chính: không thấy chữ đè, ảnh méo, nội dung cắt hoặc công thức mất chỉ số.
- Không phát hiện lỗi JavaScript của ứng dụng trong console. Nhật ký lỗi của tiện ích trình duyệt kiểm thử không thuộc học liệu.

## Lỗi đã phát hiện và vá

1. Sửa lỗi đóng khối JavaScript trong bản dựng đầu.
2. Bổ sung câu hỏi Phenol để đủ đúng 25 câu như giao diện công bố.
3. Bổ sung lưu phiên bằng `sessionStorage` để tiếp tục lượt quiz/trò chơi sau khi tải lại.
4. Tăng phiên bản bộ nhớ đệm offline để trình duyệt nhận đúng bản đã vá.

## Vòng hồi quy 2

Kết quả: ĐẠT trên bản ZIP cuối được giải nén vào thư mục sạch.

- Cấu trúc ZIP đúng: `index.html` ở cấp gốc.
- Kiểm tra lại toàn bộ công thức khóa, câu hỏi, ID, tài nguyên và đường dẫn: đạt.
- Kiểm tra cú pháp JavaScript trên bản giải nén: đạt.
- So sánh byte giữa thư mục phát hành và bản giải nén: trùng khớp.
- Tổng dung lượng nhỏ hơn 1 MB; 7 ảnh WebP nội bộ; không tải font, thư viện hay ảnh từ mạng.

## Giới hạn sử dụng

- Tiến độ được lưu trên từng trình duyệt; cần dùng chức năng Xuất tiến độ nếu chuyển thiết bị hoặc xóa dữ liệu trình duyệt.
- Thí nghiệm chỉ là mô phỏng giáo dục. Không tự thực hiện với phenol, bromine, methanol, HCN hoặc thuốc thử Tollens ngoài phòng thí nghiệm có giám sát.
