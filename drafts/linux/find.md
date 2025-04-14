Linux
==================

## find 命令

```bash
find . ! -path "./exclude_dir"               ## 排除目录
find . ! -name ".*"                          ## 排除隐藏文件
```

## 重置目录和文件权限

```bash
find ./ -type f -exec chmod 644 {} \;
find ./ -type d -exec chmod 755 {} \;
```

```bash
ls | xargs sudo chown -R ubuntu:www-data
ls | xargs sudo chmod -R g+rw
```
