/**
 * rpush key value1 [value2 ...]
 *
 * lpush key value1 [value2 ...]
 *
 * rpop key => trả về phần tử cuối cùng và xóa nó khỏi danh sách
 *
 * rpop key count => trả về và xóa nhiều phần tử từ cuối danh sách
 *
 * lpop key => trả về phần tử đầu tiên và xóa nó khỏi danh sách
 *
 * lpop key count => trả về và xóa nhiều phần tử từ đầu danh sách
 *
 * blpop key [key ...] timeout => chặn và lấy phần tử đầu tiên từ danh sách
 *
 * lindex key index
 *
 * llen key
 *
 * lset key index value => cập nhật phần tử tại vị trí index
 *
 * lrange key start stop
 *
 * lrem key count value => xóa các phần tử có giá trị bằng value
 *
 * ltrim key start stop => giữ lại các phần tử trong khoảng start đến stop
 *
 * linsert key BEFORE|AFTER pivot value => chèn giá trị trước hoặc sau phần tử pivot
 */
