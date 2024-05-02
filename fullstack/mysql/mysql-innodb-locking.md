InnoDB locking
=========================

## 定义

S锁: 共享锁，行级锁，已加S锁的行，不允许其它事务再加X锁，但可以继续加S锁   
X锁: 排它锁，行级锁，已加S锁的行，不允行其它事务再加S或X锁   

IS: 意向共享锁，表级锁，已加S锁的表，肯定会有IS锁，反过来，有IS锁的表，不一定会有S锁   
IX: 意向排它锁，表级锁，已加X锁的表，肯定会有IX锁，反过来，有IX锁的表，不一定会有X锁   


## 共享锁 (Shared lock)

```mysql
SELECT * FROM users WHERE id = 1 LOCK IN SHARE MODE;
```

## 排它锁 / 互斥锁 (Exclusive lock)

```mysql
SELECT * FROM users WHERE id = 1 FOR UPDATE;
```

## 乐观锁

以上 `共享锁` 或 `排它锁/互斥锁` 都属于是悲观锁。还有一种从逻辑层面实现的乐观锁。

```mysql
/* CAS 机制 */
UPDATE stocks SET stock_num = 99 WHERE goods_id = 1 AND stock_num = 100;


/* 版本号机制 */
UPDATE stocks SET stock_num = 99 WHERE goods_id = 1 AND updated_at = '2024-01-01 10:10:10';
```

## 参考资料
- [MySQL 8.0 Reference Manual / InnoDB Locking](https://dev.mysql.com/doc/refman/8.0/en/innodb-locking.html#innodb-intention-locks)