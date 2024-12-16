New Ubuntu
==========================

## hostname

```bash
sudo hostnamectl set-hostname prod-btpayments-io
```

## OhMyZSH

https://ohmyz.sh/

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

```markdown
## themes

### dev=strug
https://user-images.githubusercontent.com/49100982/108255755-b828fd00-716d-11eb-8dee-2d981777a2b3.jpg


### dev=ys
https://user-images.githubusercontent.com/49100982/108255792-be1ede00-716d-11eb-8c26-f7ad7ab3c4f2.jpg

### testing=xiong-chiamiov-plus
https://user-images.githubusercontent.com/49100982/108255786-bcedb100-716d-11eb-9f4d-540b75cc62c2.jpg

### production=darkblood
https://user-images.githubusercontent.com/49100982/108254782-7e0b2b80-716c-11eb-95db-b149bc1c0032.jpg
```

## spf13/vim

https://github.com/spf13/spf13-vim

```bash
curl https://j.mp/spf13-vim3 -L > spf13-vim.sh && sh spf13-vim.sh
```

## Larave@LNMP

```bash
sudo apt install supervisor
sudo apt install nginx sqlite3 mysql-server redis-server php-fpm composer php-dom php-mysql php-sqlite3
```

### MySQL

```SQL
CREATE USER 'mysql'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON dbname.* TO 'mysql'@'localhost';
FLUSH PRIVILEGES;

SHOW GRANTS FOR 'mysql';
```

## CERTBOT

https://certbot.eff.org/

```bash
sudo snap install --classic certbot

```

## Utils

```bash
sudo apt install tig ack apache2-utils
```%
