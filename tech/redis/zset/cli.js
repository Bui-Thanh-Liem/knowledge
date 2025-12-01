/**
 * Luôn có thứ tự sắp xếp theo score
 *
 * zadd key score member [score member ...]
 *
 * zrem key member [member ...] => xóa member khỏi zset
 * 
 * zcard key => trả về số lượng phần tử trong zset
 *
 * zrange key start stop [WITHSCORES] => trả về các member trong khoảng từ start đến stop
 *
 * zrevrange key start stop [WITHSCORES] => trả về các member trong khoảng từ start đến stop theo thứ tự giảm dần
 * 
 * zincrby key increment member => tăng score của member trong zset
 *
 * zscore key member => trả về score của member trong zset
 *
 * zrank key member => trả về vị trí (index) của member trong zset theo thứ tự tăng dần
 * 
 * zrangebyscore key min max [WITHSCORES] => trả về các member có score trong khoảng từ min đến max
 *
 * zrevrangebyscore key max min [WITHSCORES] => trả về các member có score trong khoảng từ max đến min theo thứ tự giảm dần
 *
 * zremrangebyscore key min max => xóa các member có score trong khoảng từ min đến max
 */
