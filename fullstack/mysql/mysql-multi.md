MySQL Multi
============================


## 1. 创建配置

```conf
### /etc/mysql/my.conf

[mysqld_multi]
mysqld     = /usr/bin/mysqld_safe
mysqladmin = /usr/bin/mysqladmin


[mysqld19336]
user       = mysql
port       = 19336
datadir    = /var/lib/mysql-19336
socket     = /var/run/mysqld/mysqld-19336.sock
pid-file   = /var/run/mysqld/mysqld-19336.pid
log_error  = /var/log/mysql/19336-error.log

slow_query_log          = 1
long_query_time         = 2
slow_query_log_file     = /var/log/mysql/19336-mysql-slow.log
```

## 2. 创建数据目录
```bash
mysqld --initialize-insecure --datadir=/var/lib/mysql-19336
```

## 3. mysqld_multi 管理

```bash
mysqld_multi report
mysqld_multi start
sudo -u mysql mysqld_multi start 19336
sudo -u mysql mysqld_multi stop 19336

```