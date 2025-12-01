/**
 * multi => bắt đầu transaction
 *
 * exec => thực thi transaction
 *
 * discard => hủy transaction
 *
 * watch key [key ...] => theo dõi các key, nếu có thay đổi sẽ hủy transaction
 *
 * unwatch => hủy theo dõi các key
 *
 * - khi watch một giá trị, nếu giá trị bị thay đổi trước khi exec thì transaction sẽ bị huỷ
 *   không thực thi bất cứ lệnh nào
 *
 * - Nếu có lệnh sai cú pháp thì các lệnh khác sẽ không thực thi
 *
 * - Nếu sai do code (incr string) thì các lệnh khác vẫn thực thi bình thường
 *
 */
