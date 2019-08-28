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


## 問題解決

## mysql8に繋ごうとした際のエラー
mysql8に何もせず繋ぐと`SQLException: Unable to load authentication plugin 'caching_sha2_password'`

1. my.cnfに default_authentication_plugin=mysql_native_password追記
2. その後でmysqlにユーザ作成と権限付与

create user 'user1'@'%' identified by 'user1';
`grant all privileges on . to 'user1'@'%';

すると SQLException: Unknown system variable 'query_cache_size'に変わる

3.そこでbuild.sbtの mysql-connector-javaをバージョン8にする必要がある（バージョン6.xだったので）

"mysql" % "mysql-connector-java" % "6.0.6"を
"mysql" % "mysql-connector-java" % "8.0.11"とかにする

- どうもconnector8がmysql8に対応してるらしい
- mysql側でテーブル作っとかないと IllegalStateException: No column found for Customer. If you use NamedDB, you must override connectionPoolName.になる
- なんかプログラム側のカラム名を勝手にスネークケースにされてる疑惑が無いでもない

