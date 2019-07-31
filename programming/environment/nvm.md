# [NVM](https://github.com/nvm-sh/nvm)の神

## インストールと初期設定

    `curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh) | bash`

    nvmコマンドが使えるようになる

    もし使えなかったら `source ~./basshrc`する（nvmに関する記述が追記されてるので）

## Nodeインストール

Node6.14.4をインストール

```console
$ nvm install 6.14.4
```

Nodeの最新LTSをインストール

```console
nvm install --lts
```

## Nodeのバージョンを確認

今使ってるバージョン

```console
$ nvm use node
```

リモートに存在する全てのバージョンを調べる

```
$ nvm ls-remote
```