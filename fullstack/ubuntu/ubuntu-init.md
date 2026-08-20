Ubuntu 24.04 新服务器安装 
=====================================

## 1.修改主机名

```bash
sudo hostnamectl set-hostname ProtobiaTech-testing-1
```

## 2. apt udpate & upgrade

```bash
apt update
apt upgrade -y
```

## 3. 工具 和 环境
```bash
apt install -y git zsh tig ack

apt install -y php-fpm composer nginx mysql-server sqlite3 php-sqlite3
apt install -y php8.3-xml php8.3-dom
```

## 4. ohmyzsh & spf13


## 5. create Laravel

```bash
### 使用 aliyun cloud composer mirror
composer config -g repo.packagist composer https://mirrors.aliyun.com/composer/

### 使用 tencent cloud composer mirror
composer config -g repos.packagist composer https://mirrors.cloud.tencent.com/composer/

## 取消 composer mirror
composer config -g --unset repos.packagist
```

```bash
composer create-project laravel/laravel Laravel11 "11.*"

sudo chown -R ubuntu:www-data .
chmod -R g+w storage/ bootstrap/cache/ database/database.sqlite
```
