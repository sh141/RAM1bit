# MySQLの神

- LinuxでMySQLサーバを起動

    $`mysql.server start`

- LinuxでMySQLサーバを停止

    $`mysql.server stop`

- 設定ファイルmy.cnfどこだよって調べる

    Mac

    $`mysql --help | grep my.cnf`

- ログイン

    ユーザ名user1でログイン

    `mysql -u user1 -p;`

    rootでログイン

    `mysql -u root`

- ユーザaiueを作成

    `create user aiue;`

    ユーザuser1をパスワードuser1で作成

    `CREATE USER 'user1'@'%' IDENTIFIED BY 'user1';`
    ユーザuser1に全権限を付与

    `GRANT ALL PRIVILEGES ON *.* TO 'user1'@'%';`

- ユーザaiueを削除

    `drop user aiue;`

- 全てのユーザ名とパスワードを表示

    `select user, password from mysql.user;`

- 全てのDBを確認

    `show databases;`

- 操作するDBをaiueに決める

    `use aiue`

- 全てのテーブルを確認

    `show tables;`

- テーブルaiueのカラム名を確認

    `show columns from aiue;`

- テーブル作成

        create table Customer (
        idx bigint not null primary key auto_increment,
        phone_number varchar(11) not null,
        name varchar(30) not null,
        mail varchar(255) not null,
        birth_date date not null,
        password varchar(1024) not null
        );
        
        create table Reservation (
        idx bigint not null primary key auto_increment,
        user_idx bigint not null,
        start_date_time datetime not null,
        end_date_time datetime not null,
        stylist_idx int not null,
        menu_idx int not null,
        discount_idx int not null
        );
        
        create table Stylist (
        idx bigint not null primary key auto_increment,
        name varchar(100) not null,
        grade_idx bigint not null
        );

- Customerテーブルにデータ挿入

        insert into Customer values(
        null,
        "1234567890",
        "おきもち",
        "a@a.a",
        "1994-10-22",
        "okimochi3"
        );

    パスワードがハッシュ値のとき

        insert into Customer values(
        null,
        "1234567890",
        "おきもち",
        "a@a.a",
        "1994-10-22",
        "$2a$10$RrC8GPpr6/ovWGCk7B8VxO9.FuHYhRqiqAWRJba1NnLa2WHaiwj9W"
        );

- Reservationテーブルにデータ挿入

        insert into Reservation values(
        null,
        1,
        "2019-07-26 10:00",
        "2019-07-26 11:00",
        1,
        1,
        1
        );
        
        insert into Reservation values(
        null,
        1,
        "2019-07-25 15:00",
        "2019-07-25 17:00",
        1,
        2,
        1
        );
        
        insert into Reservation values(
        null,
        1,
        "2019-07-24 12:00",
        "2019-07-24 13:00",
        2,
        3,
        1
        );

- Stylistテーブルでidx=2の行のgradeを1に更新する

        update Stylist set grade_idx = 1 where idx = 2;

- Customerテーブルでidxが1の行からpassword列を更新

        update Customer SET password = '$2a$10$geJ78sqP25wWGIe/kvjP9uikkYunkdaFBY2Vr4t5QZJf/J1VDokSG' where idx = 1;