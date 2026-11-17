# MolQuest – Dẫn xuất hydrocarbon Hóa học 11

Học liệu tĩnh chạy trên GitHub Pages, xây dựng từ nội dung tệp Word **DẪN XUẤT HYDROCARBON LỚP 11**. Dự án không cần cơ sở dữ liệu hoặc khóa API; tiến độ học tập được lưu trong `localStorage` của trình duyệt.

## Nội dung

- 69 câu/nhiệm vụ gốc: Dẫn xuất halogen (9), Alcohol (10), Phenol (9), Hợp chất carbonyl (19), Carboxylic acid (22).
- Đường đua Mol: nhân vật chạy tự động, dừng tại chướng ngại để mở câu hỏi; ghi tổng thời gian, lần thử và câu đã sửa được.
- Chế độ tổng hợp “Trận chiến sinh tử – chế độ học tập” với ba lá chắn và không dùng nội dung bạo lực.
- Dashboard: độ chính xác, thời gian học thực, tiến độ theo chủ đề, hoạt động gần đây.
- Năm sơ đồ tư duy có bản văn bản tương đương.
- Sáu lab ảo: thế/tách dẫn xuất halogen; ethanol–CuO; phenol–bromine; Tollens; acid–carbonate; ester hóa.
- Nhạc nền và âm báo đúng/sai do người dùng cung cấp; âm thanh mặc định tắt để phù hợp chính sách tự phát của trình duyệt.
- Xuất/nhập dữ liệu học tập bằng JSON.

## Đưa lên GitHub Pages

1. Giải nén ZIP.
2. Đẩy toàn bộ **nội dung bên trong thư mục** lên nhánh `main` của repository.
3. Mở **Settings → Pages**.
4. Chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`.
5. Chờ GitHub hiển thị địa chỉ website.

Tệp `index.html` phải nằm ngay ở thư mục gốc repository.

## Kiểm thử

```bash
python3 tests/verify.py
```

Bộ kiểm thử kiểm tra số lượng câu theo chủ đề, đáp án, nhãn phương án, đường dẫn tài sản, công thức khóa, âm thanh, cấu trúc GitHub Pages và các lỗi nguồn đã sửa.

## Lưu ý khoa học và an toàn

- Công thức, nhãn và phương trình được hiển thị bằng văn bản, không lấy chữ sinh tự động trong ảnh làm nguồn đáp án.
- Câu 9 dẫn xuất halogen dùng kết luận đúng `(a), (c)`.
- Chất khử được chuẩn hóa thành `LiAlH₄`/`NaBH₄`, không dùng `NaAlH₄`.
- HCN, phenol, bromine và thuốc thử Tollens chỉ được minh họa/mô phỏng kèm cảnh báo; không hướng dẫn học sinh tự thực hiện.
- Không có thao tác nếm hoặc ngửi trực tiếp hóa chất.

## Công nghệ

HTML5, CSS3 và JavaScript thuần; không tải font, thư viện hoặc nội dung từ CDN. Vì vậy dự án phù hợp để chạy trên GitHub Pages và giảm phụ thuộc mạng.
