/**
 * Quản lý transaction trong Redis
 * - Sử dụng MULTI, EXEC, DISCARD, WATCH để quản lý transaction
 * - Đảm bảo tính toàn vẹn dữ liệu khi thực hiện nhiều lệnh liên tiếp
 * - Sử dụng transaction để thực hiện các thao tác phức tạp một cách an toàn
 * - không có rollback như trong database truyền thống
 */
