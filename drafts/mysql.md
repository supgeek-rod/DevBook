MySQL
=======================

## 查看数据库所有表大小

```mysql
SELECT
    table_name AS '表名',
    table_schema AS '数据库名',
    engine AS '存储引擎',
    round(data_length / 1024 / 1024, 2) AS '数据大小 (MB)',
    round(index_length / 1024 / 1024, 2) AS '索引大小 (MB)',
    round((data_length + index_length) / 1024 / 1024, 2) AS '总大小 (MB)'
FROM
    information_schema.tables
WHERE
    table_schema = 'your_database_name'
ORDER BY data_length ASC;
```
