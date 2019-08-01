# Scalaの神

## 今いるディレクトリがわからんときのまほう！

```scala
import scala.sys.process.Process
Process("pwd") run
```

## リスト操作

Listの先頭要素

```scala
List(1, 2, 3).head
// 1
```

Listの末尾要素

```scala
List(1, 2, 3).last
// 3
```

Listの最後だけ削除したものを返す

```scala
List(1, 2, 3).init
// List(1, 2)
```

Listの先頭だけ削除して返す（要素を1つ減らす）
```scala
List(1, 2, 3).tail
// List(2, 3)
```

streamから10個取り出す

```scala
stream.take(10)
```

Listを逆並びにする

```scala
List(1, 2, 3).reverse
// List(3, 2, 1)
```

## パターンマッチ

値の取り出し、中置パターン

リストの1個目が"A"だったら2個目と3個目をb,cに入れてbが"B"じゃなかったら処理する

```scala
lst: List[String] = List("A", "aiue", "okimochi")
lst match {
    case List("A", b, c) if b != "B" =>
        println("b = " + b)
        println("c = " + c)
    case _ =>
        println("nothing")
    }

こっちのが一般的らしいけどどういう動きするのかわかってない

    val lst = List(1, 2, 3, 4)
        lst match {
            case a +: b +: _ => println(a, b)
            case _ => println("other")
        }
```

## mapとflatmapの性質：for, foreach

mapは型ごと変換して返す
flatmapは受け取った型のままで返す
flatmapは中でmapとflatten使ってるような動き

for式は中でflatmap使ってる：yieldが必要
yieldが無いfor式はforeach：これは戻り値が無い

`None.foreach (value => 処理)`ではそもそも処理が発生しない

`Option型を返す関数.foreach (value => 処理)`とすれば関数の戻り値がSome()の時だけ処理する

## Futureの値を取りたい

```scala
val f = Future{
    5000
}
    
f.value.get.get
```

## 正規表現

参考 [https://docs.oracle.com/javase/jp/8/docs/api/java/util/regex/Pattern.html](https://docs.oracle.com/javase/jp/8/docs/api/java/util/regex/Pattern.html)

.matches()の引数に文字列として入れる

appleの後に任意の文字を0個以上（要するにあっても無くても良い）

```
"apple.*"
```

appleの後に任意の文字を1個以上

```
"apple.+"
```

appleの後にアルファベット小文字大文字数字を0個以上

```
"apple[a-zA-Z0-9]*"
```

```scala
val txt: String = "aAaa/dp/bbBb_/qQ"
// アルファベット小文字大文字アンダースコアスラッシュが0回以上出る（他の文字が出たらアウト）
val anyUrlStr = "[a-zA-Z_/0-9]*"
txt.matches(anyUrlStr + "/dp/" + anyUrlStr) // true
```

> 複雑な正規表現を書いて後々の自分が困りそうになったときはパーサコンビネータを活用することを検討してください。コメントが書ける、正規表現で表現できないことができるなどメリットがあります。
[https://github.com/scala/scala-parser-combinators](https://github.com/scala/scala-parser-combinators)

# ScalaTest

## 同値性と同一性

testでは同一性を見るので例外とかをnew Exceptionと書いてもダメ

TryValuesトレイトをミックスイン＆Matchers._をimportして下記のように書く

```scala
ama.getShortAmazonURL("aaaa/dp/bbbb/cccc").success.value === url + "bbbb"
    ama.getShortAmazonURL("[amazon.co.jp/dp/](http://amazon.co.jp/dp/)").failure.exception shouldBe an[ArrayIndexOutOfBoundsException]
```

こっちのがわかりやすそう

```
Try(Email("aaa")) shouldBe an[Failure[IllegalArgumentException]]
```

## DB操作

`DB ReadOnly`は1つで1トランザクション

だからメソッドごとに `DB ReadOnly`するとメソッドごとのトランザクションになる

すると一連のトランザクションとしてロールバックしたりできない

## Scala Play

cc:ControllerComponentはactionを使う所で必要

## `Ok(views.html.xxx)`のxxxが補完されない

起動中のsbtを止めたり `sbt run`すると読み込まれる

## 型注釈をつけるとテストが通らず ｀400 did not equal 303｀ になる (Bad Request)

型注釈つけるとフォームの入力内容が全て空で送られたような状態になるとのこと

> 型注釈が無いver (通る)

```scala
"post()" should {
    "正しい予定を入れれば入る" in {
            when(mockPostRepository.findAll).thenReturn(schedules :+ newSchedule)
            val request: FakeRequest[AnyContentAsFormUrlEncoded] =
            FakeRequest(POST, "/add").withFormUrlEncodedBody(
                "post-name" -> "aiue",
                "post-start" -> "2017-01-01 10:00",
                "post-end" -> "2017-01-01 10:01"
            )
                // ここ
            val result = controller.post().apply(request.withCSRFToken)
            val bodyText: String = contentAsString(result)
            assert(status(result) === SEE_OTHER)
        }
        }
```

> 型注釈があるver (通らない）

```scala
    "post()" should {
        "正しい予定を入れれば入る" in {
            when(mockPostRepository.findAll).thenReturn(schedules :+ newSchedule)
            val request: FakeRequest[AnyContentAsFormUrlEncoded] =
            FakeRequest(POST, "/add").withFormUrlEncodedBody(
                "post-name" -> "aiue",
                "post-start" -> "2017-01-01 10:00",
                "post-end" -> "2017-01-01 10:01"
            )
                // ここ
            val result: Accumulator[ByteString, Result] = controller.post().apply(request.withCSRFToken)
            val bodyText: String = contentAsString(result)
            assert(status(result) === SEE_OTHER)
        }
        }
```

## 型パラメータ付きのインターフェースをDIでbindするとNo implementationエラーが出る

型パラメータのときはclassOfではなくTypeLiteralを使う

```scala
    // ❌
    bind(classOf[MyInterface[T]]).to(classOf[MyImpl])
    
    // ⭕
    bind(new TypeLiteral[MyInterface[T]](){}).to(classOf[MyImpl])
``` 

## injectが原因ではないのに `Unexpected exception ProvisionException: Unable to provision, see the following errors: Error injecting constructor, java.lang.ExceptionInInitializerError`が出る

変数の初期化等で例外を吐いた時に回り回ってそうなる

例えばパスワードをクラスに閉じ込めて8文字以上の制約をつけたとき7文字で初期化しようとすると例外を吐く＝＞上に渡され続けて最終的になぜかinjectのエラーとして表示される

## Ok()が正しいのに `Cannot find any HTTP Request Header here`が出る

`Action { implicit request: Request[AnyContent] =>`の中で `form.bindFromRequest.fold(`してるときに `request =>`って書くとどっちのrequestかわからなくて爆死してた模様

## `@{}`内で`Type mismatch, expected: Html, actual: Unit`

該当するscala構文を `<div>`で囲むとHtmlになる