# [spacemacs](https://github.com/syl20bnr/spacemacs)の神
使えるコマンド一覧は `Space Space`で探す

エラーメッセージは`Messages`バッファで見られる

## Macでのインストール

### emacs-plusをダウンロード
### あああ
### [共通設定](#共通設定)へ

## Windowsでのインストール

### まずEmacsのダウンロード

[GNU公式](http://ftp.gnu.org/pub/gnu/emacs/windows/)からEmacs26.2をダウンロード。

（[公式のここ](https://github.com/syl20bnr/spacemacs#windows)だと日本語IMEのインライン変換で詰む。具体的には日本語は変換を確定するまで表示されないので超不便。[ここ](https://minejima.jp/blog/2017/11/05/emacs-25-3をwindows10にインストール/)にもインライン変換の不具合について書かれている）

解凍したファイル群（binとか色々）を `emacs-26.2`のようなディレクトリにまとめて好きな所に置いとく（例えば `C:\Program Files\emacs-26.2`）

### システム環境変数の設定

`コントロールパネル > システムとセキュリティ > システム > システムの詳細設定 > システムのプロパティ > 環境変数 > (システム環境変数の) Path`で、 `.emacs.d`があるディレクトリを変数名HOMEで新規追加する（例えばホームディレクトリ`C:\Users\user1`）

（基本的に`.emacs.d`はホームディレクトリ直下に作られるので、ホームディレクトリを追加で良い）


### spacemacsのダウンロード

残念ながら`brew install`はできない

ホームディレクトリで `git clone https://github.com/syl20bnr/spacemacs ~/.emacs.d`

Emacsは `~/.emacs.d`以下の設定ファイルを読み込むので、そこでspacemacsを適用させるという意図

※各ファイルが`~/.emacs.d/spacemacs/...`ではダメ。 `~/.emacs.d/...`とならねば読み込まれない

### EmacsがあるディレクトリでPowerShellあたりを使って `.\runemacs.exe --insecure`
※ `runemacs.exe`はコンソールが出ずに起動できる。

### spacemacsの黒い画面が出たらOK。[共通設定](#共通設定)へ

## 共通設定

色々訊かれるので矢印キーとEnterで答えていく。

> What is your preferred editing style?
> -> Among the stars aboard the Evil flagship (vim)
>    On the planet Emacs in the Holy control tower (emacs)

キー操作をVim風にするかEmacs風にするかという意味

> What distribution of spacemacs whould you like to start with?
> —> The standard distribution, recommended (spacemacs)
>    A minimalist distribution that you can build on (spacemacs-base)

標準の機能を使うか最低限の機能だけ使うかという意味

> What type of completion framework do you want?
> —> A heavy one but full-featured (helm)
>    A lighter one but still very powerful (ivy)

補完機能をフルで使うか軽量で使うかという意味

全て答えるとインストールが始まる。


## ファイル・バッファ操作
| 目的                                | コマンド       |
| ---------------------------------- |:--------------:|
| 設定ファイル`~/.spacemacs`を編集     | `Space f e d` |
| 設定ファイルの更新を反映             |`Space f e R`   |
| ディレクトリから辿ってファイルを開く  
| `Ctrl + {hjkl}`でファイル候補を選べる<br>直接入力すると候補を絞れる<br>`Tab`でどんどん補完できる<br>Enterを押してしまうとバッファ内操作となる  | `Space f f` |
| バッファを閉じる                     | `Space b d` |
| バッファ一覧を表示                   | `Space b b` |

## ウィンドウ操作
| 目的                                                | コマンド     |
| --------------------------------------------------- |:-----------:|
| 隣に移動                                             | `Space w w` |
| vimっぽく上下左右に移動                                | `Space w h` / `Space w j` / `Space w k` / `Space w l` |
| 今のウィンドウを最大化                                  | `Space w m` |
| ウィンドウ2分割（直前の分割バッファがあればそれを割り当てる） | `Space w 2` |
| ウィンドウを1つに戻す                                  | `Space w 1` |
| 選択範囲内の文字数を数える (count region)               | `Space x c` |
| ナビゲーションを表示                                   | `Space f t` |

## フレーム操作
| 目的                 | コマンド        |
| ------------------- | :------------: |
| 新しいフレームを作成   | `Ctrl-x 5 2`  |
| 現在のフレームを削除   | `Space F d`   |
| 別のフレームに移動     | `Space w o`   |

## Clojureモード操作
| 目的                                                                    | コマンド     |
| ---------------------------------------------------------------------- |:-----------:|
| 整形                                                                    | `Space m f l` |
| バッファごと整形？                                                         | `Space m f b` |
| `cider-jack-in clj`を使う<br>Ciderモード（cljファイルを開いている時）だけ使える | `, '` |
| カーソル上の関数だけをコンパイル                                             | `, f e` |
| 定義ジャンプ                                                             | `Space g g` |
| 定義ジャンプ先から戻る                                                     | `Space g b` |

## Cider-jack-in操作
| 目的                    | コマンド                       |
| ---------------------- | :---------------------------: |
| 履歴を上に遡る / 下に戻る  | `Ctrl + k` / `Ctrl + j`       |
| 更新                    | `(use 'sandbox.core :reload)` |

## spacemacsの設定 (`.spacemacs`)

## コマンドの反応速度を上げる
初期設定では入力から反応まで0.4秒の遅延時間がある。

それを例えば0.1秒にする。

```
(defun dotspacemacs/init ()

  (setq-default

   dotspacemacs-which-key-delay 0.1

  ))
```

## 行番号を表示する
vimで言う`:set number`状態にできる（逆に`:set number`は使えない）

```
(defun dotspacemacs/init ()

  (setq-default

   dotspacemacs-line-numbers t

  ))
```

## フォントを変える

```
(defun dotspacemacs/init ()

  (setq-default

   dotspacemacs-default-font '("Dejavu Sans Mono"
                               :size 20
                               :weight normal
                               :width normal
                               :powerline-scale 1.1)
  ))
```


## 起動時に最大化する
初期設定では起動する度に小さい画面のままだが、これを自動で最大化させる。

```
(defun dotspacemacs/init ()

  (setq-default

   dotspacemacs-maximized-at-startup t

  ))
```

## insert modeでも`hjkl`でカーソル移動する

```
(defun dotspacemacs/user-config ()

  ;;Ctrl-hで左移動
  (define-key evil-insert-state-map (kbd "C-h") 'left-char)

  ;;Ctrl-lで右移動
  (define-key evil-insert-state-map (kbd "C-l") 'right-char)

  ;;Ctrl-jで次の行へ移動
  (define-key evil-insert-state-map (kbd "C-j") 'next-line)

  ;;Ctrl-kで前の行へ移動
  (define-key evil-insert-state-map (kbd "C-k") 'previous-line)

  ;;normal modeでは挙動を封じる
  (bind-key "C-h" 'nil)
  (bind-key "C-l" 'nil)
  (bind-key "C-j" 'nil)
  (bind-key "C-k" 'nil)

)
```

## cider-replで`()`内を入力中に`Ctrl + Enter`で改行する

```
(defun dotspacemacs/user-config ()

  (with-eval-after-load 'cider
    (evil-define-key 'insert cider-repl-mode-map
      ;;Ctrl-Enterで改行
      (kbd "C-<return>") 'cider-repl-newline-and-indent)))
```

## 問題解決

### `emacs --insecure`したら `Unknown option --insecure`と言われる
spacemacsの各ファイルが`~/.emacs.d/...`となっていない可能性。`~/.emacs.d/spacemacs/...`では読み込まれないので、spacemacsのオプションである `--insecure`も認識されない

### ciderを起動しようとしたら `.emacs.d/elpa/26.2/develop/queue-0.2/queue.elc failed to provide feature 'queue'`
`queue0.2`をダウンロードしてきて`~/.emacs.d/elpa/26.2/develop/queue-0.2/`をディレクトリごと入れ替えたら直った
