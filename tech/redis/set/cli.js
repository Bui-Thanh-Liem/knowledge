/**
 * sadd key member [member ...]
 *
 * smembers key => trả về tất cả member trong set
 *
 * sismember key member
 *
 * scard key => trả về số lượng phần tử trong set
 *
 * srem key member [member ...] => xóa member khỏi set
 *
 * srandmember key [count] => lấy ngẫu nhiên member từ set
 *
 * spop key [count] => lấy và xóa ngẫu nhiên member từ set
 *
 * smove source destination member => di chuyển member từ set nguồn sang set đích
 *
 * sunion key1 key2 ... => hợp hai hay nhiều set
 *
 * sunionstore destination key1 key2 ... => lưu hợp hai hay nhiều set vào set đích
 *
 * sinter key1 key2 ... => giao hai hay nhiều set
 *
 * sinterstore destination key1 key2 ... => lưu giao hai hay nhiều set vào set đích
 *
 * sdiff key1 key2 ... => hiệu hai hay nhiều set
 *
 * sdiffstore destination key1 key2 ... => lưu hiệu hai hay nhiều set vào set đích
 */
