# Clojureの神

## 関数と変数
http://nyamtech.blogspot.com/2012/06/clojure_15.html

## S式丸ごとコメントアウト

```
#_(...
    ...)_
```
普通のコメントアウトは `;`

## クロージャ(clojureではない)

```
(defn messenger-builder [greeting]
    (fn [] (println greeting)))

(def hello-er (messenger-builder "Hello"))

(hello-er)
```

があったとして、

`(def hello-er (messenger-builder "Hello"))`で定義した時は`関数の戻り血`ではなく`関数`が入る

`(hello-er)`した時`hello-er`に入っている`(fn [] (println greeting))`の`greeting`is 何だよというのは`hello-er`定義時に入った引数（ずっと使える）

# `連なるもの`操作（配列、List, Vector, ...）
## 種類

```
'(1 2 3)     ; list (リスト)
[1 2 3]      ; vector (ベクター)
#{1 2 3}     ; set (セット)
{:a 1, :b 2} ; map (マップ)
```

## 共通操作

Vector `[1 2 3]`を変数 `aiue`に定義する（遅延評価を使う）
```
(def aiue '[1 2 3])
```

最初の要素

```
(first [1 2 3)
;;=> 1
```

最後の要素

```
(last [1 2 3])
;;=> 3
```

3を追加

```
(conj [1 2 3] 3)
;;=> [1 2 3 3]
```

## Set

定義

```
(#{"aiue" "okimochi"})
```

取り除く

```
(disj #{"aiue" "okimochi"} "aiue")
;;=> #{"okimochi"}
```

キー`"okimochi"`がSet内に存在するか確認

```
(contains? #{"aiue" "okimochi"} "okimochi")
;;=> true
```

ソートしたSetを返す

```
(conj (sorted-set) "gridman" "aiue" "okimochi")
;;=> #{"aiue" "gridman" "okimochi"}
```

※小文字より大文字が先にくる

## Map

Mapに`キー・値`のペアを追加する

```
(def scores {"Fred" 1400, "Bob" 1240, "Angela" 1024})

(assoc scores "Sally" 0)
;;=> {"Angela" 1024, "Bob" 1240, "Fred" 1400, "Sally" 0}
```

Mapから`キー・値`のペアを取り除く

```
(def scores {"Fred" 1400, "Bob" 1240, "Angela" 1024})

(dissoc scores "Bob")
;;=> {"Angela" 1024, "Fred" 1400}
```

Mapからキー`Angela`の値を取り出す

```
(def scores {"Fred" 1400, "Bob" 1240, "Angela" 1024})

(get scores "Angela")
;;=> 1024
```

Mapからキー`:north`でルックアップする

```
(def directions {:north 0
                :east 1
                :south 2
                :west 3})

(directions :north)
;;=> 0

(:north　directions)
;;=> 0

(directions :okimochi 100) ;;見つからなければデフォルト値を返す
;;=> 100
```

Mapからキーと値のペアを取り出す

```
(def directions {:north 0
                :east 1
                :south 2
                :west 3})

(find directions :d)
;;=> nil

sandbox.core> (find directions :north)
;;=> [:north 0]
```

Mapからキーだけ/値だけの集合を取り出す

```
(def directions {:north 0
                :east 1
                :south 2
                :west 3})

(keys directions)
;;=> (:north :east :south :west)

(vals directions)
;;=> (0 1 2 3)
```

2つのシーケンスをまとめてMap化する

```
(def players #{"Alice" "Bob" "Kelly"})

(zipmap players (repeat 0))
;;=> {"Alice" 0, "Kelly" 0, "Bob" 0}
```

2つのMapを結合する（キーが競合したら基本的に右のMapが勝つ）

```
(def scores {"Fred" 1400, "Bob" 1240, "Angela" 1024})

(def directions {:north 0
                :east 1
                :south 2
                :west 3})

(merge scores directions)
;;=> {"Fred" 1400, "Bob" 1240, "Angela" 1024, :north 0, :east 1, :south 2, :west 3}
```

ネストしたMapの`:address`内部の`:city`の値を取得する

```
(def company
  {:name "WidgetCo"
   :address {:street "123 Main St"
             :city "Springfield"
             :state "IL"}})

user=> (get-in company [:address :city])
"Springfield"
```

ネストしたMapの`:address`内部の`:street`を更新する

```
(def company
  {:name "WidgetCo"
   :address {:street "123 Main St"
             :city "Springfield"
             :state "IL"}})

(assoc-in company [:address :street] "303 Broadway")
;;=> {:name "WidgetCo",
 :address
 {:state "IL",
  :city "Springfield",
  :street "303 Broadway"}}
```

## レコード構造

レコード構造を定義する

```
(defrecord Person [first-name last-name age occupation])
```

コンストラクタを作る

```
(def kelly (->Person "Kelly" "Keen" 32 "Programmer"))

;;推奨されるのはむしろこっち
(def kelly (map->Person
             {:first-name "Kelly"
              :last-name "Keen"
              :age 32
              :occupation "Programmer"}))
```

## 任意の数だけ🍣をクリエイトする

`(defn 🍣 [num] (loop [i 0] (when (< i num) (print "🍣") (recur (+ i 1)))))`

実行は `(🍣 100)`

    (defn aaa ([] (println "please aaa")) ([num] (loop [i 0] (when (< i num) (print "a") (recur (+ i 1))))

## Duct

