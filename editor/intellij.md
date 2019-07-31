# Intellijの神

クラスや関数を参照する

呼び出してる関数を見る`Command + クリック`

抽象的な関数の実装を見る`Command + Option + クリック`

## Scala

### build.sbtでnameとか読まない

Intellijのbuild.sbtでscala部分を読んでくれない問題（nameとかversionとかが真っ赤になる）

プロジェクトフォルダ右クリック => Open Module Settings => Global Libraries
    （scala-sdk-2.12.8がある）

同名のを追加（scala-sdk-2.12.8 (2) ）

それを削除

なぜか解決

> 直接は解決にならなかった集

- .idea/を消して再びプロジェクトを開く
- intellij再起動（解決した事例あり）
- File > Invalidate Caches / Restart
- intellij再インストール
- Mac再起動
- intellijのプラグイン（sbt, scala）再インストール

### xxx.scala.htmlとcontroller間で変数の補完が効かない

補完を効かせるにはsbtプロジェクトをリフレッシュせなあかんらしい

ついでにそのファイルを何か編集しないと反映されない？


## Python

### pip installにあたる操作

File > Project Structure > SDKs > [Pythonのキット] > Packages