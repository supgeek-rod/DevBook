MySQL 初始化
=================================


## 1. 创建用户

```bash
create user 'mysql'@'localhost' identified by 'password';
grant all privileges on dbname.* to 'mysql'@'localhost';

GRANT CREATE ON *.* to 'mysql'@'localhost';
FLUSH PRIVILEGES;
```