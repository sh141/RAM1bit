# Vimの神

insert modeからvim modeになる： `Escape`または `Ctrl + [`

## オプション（ `:`）

行番号を表示 `:set number`

ペインを横に切る `:split`

ペインを縦に切る`:vsplit`

# normal modeでの操作
## カーソル移動

左 `h`

右 `l`

下 `j`

上 `k`

3文字左へ移動 `3 h`

対応する括弧へ移動 `%`

## insert modeに移行

カーソル位置からinsert mode `i`

カーソル位置の1文字後からinsert mode `a`

カーソル位置から改行してinsert mode `o`

カーソル位置の上に改行してinsert mode `Shift + o`

一時的にnormal modeに戻る `Ctrl + o` ※1行動するとinsert modeに戻る（`3 h`で移動とかできる）

## 切り取り・貼り付け

1文字切り取り `x`

カーソル行を切り取り `d d`

カーソル行から3行を切り取り `3 d d` 

## visualモード（同じコマンドで終了する）

1文字単位で選択モード `v`

行単位で選択モード `Shift + v`

## [オブジェクト操作](https://qiita.com/kasei-san/items/143af11bb2559cf0e540)（c, d, y）

[`コマンド + 回数指定 + オブジェクトの種類の指定`]に従う。

カーソル上の単語を消して入力を始める（変更） `c w`

直前の操作を実行（insert modeに入ってから出るまでの操作） `.`