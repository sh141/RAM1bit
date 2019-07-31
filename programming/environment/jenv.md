# jenvの神

- インストール

    `$ brew install jenv`

- 初期化

    `$ jenv init -`をする

    `~/.bashrc`に書いとくと良い

- Javaのバージョンを追加

    Java SE12.0.1の場合

    `$ jenv add /Library/Java/JavaVirtualMachines/jdk-12.0.1.jdk/Contents/Home`

- バージョン切り替え

    特定ディレクトリ下でJava11.0.4を使う

    `jenv local 11.0.4`

    グローバルにJava11.0.4を使う

    `jenv global 11.0.4`

    ## 問題解決

- `jenv add`で `ln No such file or directory`言われる

    [初期化](https://www.notion.so/sh141/a3500041bf7b4ce78a9e46be927286c6#0bdd5b97df524a8c9658272a5523dd67)をするのだ