Laravel MySQL锁
==========================================

## 乐观锁

### CAS 机制

```mysql
UPDATE stocks SET stock_num = 99 WHERE goods_id = 1 AND stock_num = 100;
```

### 版本号机制

CAS 机制无法避免 `ABA` 问题，版本号机制可以补足这个问题。

```mysql
UPDATE stocks SET stock_num = 99 WHERE goods_id = 1 AND updated_at = '2024-01-01 10:10:10';
```

## 悲观锁

### 共享锁

###