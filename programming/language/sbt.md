# sbtの神

## sbtでテスト

テスト

```
test
```

AmaonSpec.scalaだけでテスト

```
testOnly AmazonSpec
```

差分をテスト

```
testQuick
```

差分をテスト（待機して、コードが変更されたら自動起動）

```
&testQuick
```

## sbtを動かす

```console
setsid nohup sbt run &
```