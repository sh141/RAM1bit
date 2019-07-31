# Gitの神

## Gitで扱いたくないファイルを無視：.gitignore

作業ディレクトリに `.gitignore`ファイルを置いて無視したいファイル名を列挙

例えば `sample.txt`と `.idea/`以下全てを無視したいなら

```
sample.txt
.idea/
```

## .gitignoreをglobalで使う

（必要なのかどうか謎）

```console
git config --global core.excludesfile ~/.gitignore_global
```

`~/.gitignore_global`に無視したいファイルを列挙

## リモートにあるhoge.tmpを管理対象から削除

```console
git rm --cached hoge.tmp
``` 

## 状態確認：status, diff, log, reflog

今の状態を見る

```console
git status
```

最後のcommitとの差分を見る

```console
git diff
```

mySource.scalaファイルだけ差分を見る

```console
git diff mySource.scala
```

commitの履歴を見る

```console
git log
```

それぞれのcommitを1行にする

```console
git log --oneline
```

commit履歴をグラフっぽくする

```console
git log --graph
```

あらゆる履歴を見る神の見えざる目
```console
git reflog
```

## 変更履歴を追加：add

aaa.scalaファイルをcommit対象にする (staging)

```console
git add aaa.scala
```

そこにある全てのファイルをstaging

```console
git add .
```

## 変更を確約：commit

ローカル変更をcommitタイトル付きで確約する

```console
git commit -m'タイトル'
```

ローカル変更をcommitタイトルと内容付きで確約する

```console
git commit -m'xxxを変更

こういう変更をした'
```

コミットメッセージ無しでcommit

```console
git commit --allow-empty-message -m ''
```

## 状態の退避：stash

今の状態を一時的にセーブしておく

```console
git stash save
```

```console
git stash
```

セーブした最新の状態を取り出す

```console
git stash pop
```

セーブした番号2の状態を取り出す

```console
git stash pop stash@{2}
```

セーブした最新の状態を取り出す（stashも残す）

```console
git stash apply
```

セーブした最新の状態を削除

```console
git stash drop
```

セーブした番号2の状態を削除

```console
git stash drop stash@{2}
```

全ての状態を消す

```console
git stash clear
```

## リモートに反映

ローカルにある全ての確約をリモートリポジトリに反映

```console
git push
```

1個前の変更などを強制push（ダメ推奨）

```console
git push -f
```

リモートリポジトリに無いaiueブランチをpush

```console
git push --set-upstream origin aiue
```

## 取り消し

最後のコミットに戻る：ローカルの状態も戻る

```console
git reset --hard
```

最後のコミットの1個前のコミットに戻る：ローカルの状態も戻る

```console
git reset --hard head^
```

全体履歴の1番目に戻る

```console
git reset --hard "HEAD@{1}"
```

## ブランチ：branch, checkout

    aiueブランチを作る
    `git branch aiue`
    aiueブランチに移動
    `git checkout aiue`

    強制checkout

    `git checkout -f aiue`

    今いるブランチaiueをokimochiに変更

    `git branch -m okimochi`

    ブランチaiueをokimochiに変更

    `git branch -m aiue okimochi`

    ローカルブランチaiueを削除

    `git branch -d aiue`

    リモートブランチaiueを削除

    `git push --delete origin aiue`

- 更新を確認：fetch

    `git fetch`

- リモートをローカルに反映：pull

    `git pull`

    developブランチから反映

    `git pull origin develop`

- リモートからコピー (clone)

    sh141のaiueリポジトリからclone
    `git clone https://github.com/sh141/aiue.git`

    devブランチを指定してclone
    `git clone -b dev https://github.com/sh141/aiue.git`

- リモートリポジトリを後から追加

    `git remote add origin [自分のリポジトリ.git]`

- 他のブランチを取り込み：merge

    今のブランチにaiueブランチを取り込む

    `git merge aiue`

    今のブランチにaiueブランチを取り込む（commitしない）

    `git merge --no-commit aiue`

    mergeを取り消してmerge前の状態に戻す

    `git merge --abort`

## 問題解決

- Conflictを解消
    1. `git status`で状況確認
    2. エディタでどちらの変更を受け入れるか決めて修正
    3. 修正したファイルを `git add`でステージング
    4. 他にConflictが無ければ 
    `git commit`  => `git push`

- ブランチaiueから1ファイルaaa.mdだけpullする

    `git checkout origin/aiue -- aaa.md`

    ※今のブランチに無くてaiueブランチにあるファイルはダメな模様

- 1ファイルaaa.mdだけ番号 `0bf1c82`の状態に戻す：reset

    `git checkout 0bf1c82 aaa.md`