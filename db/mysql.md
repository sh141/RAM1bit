# MySQLの神

MySQLサーバを起動


```console
$ mysql.server start
```

LinuxでMySQLサーバを停止

```console
$ mysql.server stop
```

設定ファイルmy.cnfどこだよって調べる

```console
$ mysql --help | grep my.cnf
```

## ログイン

ユーザ名user1でログイン

```console
$ mysql -u user1 -p;
```

rootでログイン

```console
$ mysql -u root
```

## ユーザ管理

ユーザaiueを作成

```sql
create user aiue;
```

ユーザuser1をパスワードuser1で作成

```sql
CREATE USER 'user1'@'%' IDENTIFIED BY 'user1';
```

ユーザuser1に全権限を付与

```sql
GRANT ALL PRIVILEGES ON *.* TO 'user1'@'%';
```

ユーザaiueを削除

```sql
drop user aiue;
```

全てのユーザ名とパスワードを表示

```sql
select user, password from mysql.user;
```
## DB操作


全てのDBを確認

```sql
show databases;
```

操作するDBをaiueに決める

```sql
use aiue
```

全てのテーブルを確認

```sql
show tables;
```

テーブルaiueのカラム名を確認

```sql
show columns from aiue;
```

テーブル作成

```sql
create table Customer (
        idx bigint not null primary key auto_increment,
        phone_number varchar(11) not null,
        name varchar(30) not null,
        mail varchar(255) not null,
        birth_date date not null,
        password varchar(1024) not null
        );
```

データ挿入

```sql
insert into Customer values(
        null,
        "1234567890",
        "おきもち",
        "a@a.a",
        "1994-10-22",
        "okimochi3"
        );
```

Stylistテーブルでidx=2の行のgradeを1に更新する

```sql
update Stylist set grade_idx = 1 where idx = 2;
```
