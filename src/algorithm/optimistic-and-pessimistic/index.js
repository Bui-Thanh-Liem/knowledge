/**
 * Optimistic:
 *
 *  Không lock tài nguyên khi đọc.
 *
 * Cho phép nhiều tiến trình/requests đọc–ghi cùng lúc.
 *
 * Khi ghi, kiểm tra xem dữ liệu có bị thay đổi bởi người khác không (version, timestamp…).
 *
 * Nếu có xung đột → rollback hoặc báo lỗi → client retry.
 */

/**
 * Pessimistic:
 *
 * Optimistic Locking (DB): dùng version column.
 *
 * React / UI state: cập nhật UI ngay lập tức (optimistic update) rồi call API sau.
 *
 * E-commerce: hiển thị số lượng còn hàng mà không lock, đến khi checkout mới kiểm tra.
 *
 * Nhanh, scalable cao, nhưng phải handle conflict.
 *
 */
