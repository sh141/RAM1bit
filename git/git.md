# Git の神

## Git で扱いたくないファイルを無視：.gitignore

作業ディレクトリに `.gitignore`ファイルを置いて無視したいファイル名を列挙

例えば `sample.txt`と `.idea/`以下全てを無視したいなら

```
sample.txt
.idea/
```

## .gitignore を global で使う

（必要なのかどうか謎）

```
git config --global core.excludesfile ~/.gitignore_global
```

`~/.gitignore_global`に無視したいファイルを列挙

## リモートにある hoge.tmp を管理対象から削除

```
git rm --cached hoge.tmp
```

## 状態確認：status, diff, log, reflog

今の状態を見る

```
git status
```

最後の commit との差分を見る

```
git diff
```

mySource.scala ファイルだけ差分を見る

```
git diff mySource.scala
```

commit の履歴を見る

```
git log
```

それぞれの commit を 1 行にする

```
git log --oneline
```

commit 履歴をグラフっぽくする

```
git log --graph
```

あらゆる履歴を見る神の見えざる目

```
git reflog
```

## 変更履歴を追加：add

aaa.scala ファイルを commit 対象にする (staging)

```
git add aaa.scala
```

そこにある全てのファイルを staging

```
git add .
```

## 変更を確約：commit

ローカル変更を commit タイトル付きで確約する

```
git commit -m'タイトル'
```

ローカル変更を commit タイトルと内容付きで確約する

```
git commit -m'xxxを変更

こういう変更をした'
```

コミットメッセージ無しで commit

```
git commit --allow-empty-message -m ''
```

## 状態の退避：stash

今の状態を一時的にセーブしておく

```
git stash save
```

```
git stash
```

セーブした最新の状態を取り出す

```
git stash pop
```

セーブした番号 2 の状態を取り出す

```
git stash pop stash@{2}
```

セーブした最新の状態を取り出す（stash も残す）

```
git stash apply
```

セーブした最新の状態を削除

```
git stash drop
```

セーブした番号 2 の状態を削除

```
git stash drop stash@{2}
```

全ての状態を消す

```
git stash clear
```

## リモートに反映

ローカルにある全ての確約をリモートリポジトリに反映

```
git push
```

1 個前の変更などを強制 push（ダメ推奨）

```
git push -f
```

リモートリポジトリに無い aiue ブランチを push

```
git push --set-upstream origin aiue
```

## 取り消し

最後のコミットに戻る：ローカルの状態も戻る

```
git reset --hard
```

最後のコミットの 1 個前のコミットに戻る：ローカルの状態も戻る

```
git reset --hard head^
```

全体履歴の 1 番目に戻る

```
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

develop ブランチから反映

`git pull origin develop`

- リモートからコピー (clone)

sh141 の aiue リポジトリから clone
`git clone https://github.com/sh141/aiue.git`

dev ブランチを指定して clone
`git clone -b dev https://github.com/sh141/aiue.git`

- リモートリポジトリを後から追加

`git remote add origin [自分のリポジトリ.git]`

- 他のブランチを取り込み：merge

今のブランチに aiue ブランチを取り込む

`git merge aiue`

今のブランチに aiue ブランチを取り込む（commit しない）

`git merge --no-commit aiue`

merge を取り消して merge 前の状態に戻す

`git merge --abort`

## 問題解決

- Conflict を解消

  1. `git status`で状況確認
  2. エディタでどちらの変更を受け入れるか決めて修正
  3. 修正したファイルを `git add`でステージング
  4. 他に Conflict が無ければ
     `git commit` => `git push`

- ブランチ aiue から 1 ファイル aaa.md だけ pull する

  `git checkout origin/aiue -- aaa.md`

  ※今のブランチに無くて aiue ブランチにあるファイルはダメな模様

- 1 ファイル aaa.md だけ番号 `0bf1c82`の状態に戻す：reset

  `git checkout 0bf1c82 aaa.md`
