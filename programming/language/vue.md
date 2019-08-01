# Vueの神

## Vuexをimportすると`Uncaught SyntaxError: Unexpected identifier`エラー

既にimportされている時に同じライブラリをimportしようとするとそう言われる

例えば

```
import Vuex from 'vuex';
Vue.use(Vuex);
```

でエラーが出ている時に

```
// import Vuex from 'vuex';
Vue.use(Vuex);
```

こうするとブラウザのconsoleに`[vuex] already installed. Vue.use(Vuex) should be called only once.`が表示され、既にVuexがimport済みだとわかる。
