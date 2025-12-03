/**
 * Triển khai cấu trúc phân tán với RabbitMQ
 * 
 * - Message Broker: RabbitMQ
 * - Giao thức: AMQP
 * 
 * Tính năng chính:
 * - Hỗ trợ nhiều kiểu message queuing (Work Queues, Publish/Subscribe, Routing, Topics)
 * - Đảm bảo tin cậy với tính năng xác nhận message (Message Acknowledgments)
 * - Hỗ trợ giao dịch (Transactions) và xác nhận (Confirmations)
 * - Quản lý hàng đợi linh hoạt với TTL, Dead Letter Exchanges
 * - Hỗ trợ clustering và high availability
 * - Giao diện quản lý web dễ sử dụng
 * 
 * Ứng dụng:
 * - Tăng hiệu suất hệ thống bằng cách tách rời các thành phần
 * - Xử lý tác vụ nền (background jobs)
 * - Tích hợp hệ thống phân tán
 * - Cân bằng tải giữa các dịch vụ
 */