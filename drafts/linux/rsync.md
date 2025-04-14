RSYNC
==================

```bash
rsync -avzP root@host.domain.com:/var/www/html ./                ## 复制目录
rsync -avzP root@host.domain.com:/var/www/html/ ./               ## 复制目录下的所有文件

rsync -avzP ./ ubuntu@host.domain.com:~
rsync -avzP ./ ubuntu@host.domain.com:/var/www
```
