# fttl (fasttool)

🚀 **fttl** は Node.js / TypeScript 向けの  
**軽量・高速・即使えるユーティリティライブラリ**です。

Discord Bot / API / サーバーツールで  
「毎回書くのダルい処理」を一つにまとめました。

---

## ✨ 特徴（例ベース）

- ⏱ **時間処理を1行で**
  ```js
  fttl.time();
  fttl.unix();
  fttl.tz("Asia/Tokyo");
  ```

* 🖥 **サーバー情報をまとめて取得**

  ```js
  fttl.info(); // OS / CPU / メモリ / Node / 時刻
  ```

* ⏳ **クールダウン管理が即完成**

  ```js
  fttl.cooldown.hit(userId, "daily", "1h");
  ```

* 🌐 **fetch を簡潔＆安全に**

  ```js
  await fttl.fetch.post(url, data);
  ```

* 🔁 **失敗時の再試行も一発**

  ```js
  await fttl.retry(() => fttl.fetch(url), { times: 3 });
  ```

* 💤 **sleep / wait を毎回書かなくていい**

  ```js
  await fttl.sleep(1000);
  ```

* 🎲 **乱数・ガチャ処理が楽**

  ```js
  fttl.random.pick(items);
  ```

* 🪶 **依存ゼロ・軽量・TypeScript完全対応**

---

## 📦 インストール

```bash
npm install fttl
```

---

## 🚀 クイックスタート

```js
import fttl from "fttl";

console.log(fttl.time());
console.log(fttl.info());

await fttl.sleep(1000);
```

---

## 🕒 Time / Timezone

```js
fttl.time();
/*
{
  utc: string,
  jst: string,
  unix: number,
  unixMs: number
}
*/

fttl.unix();      // UNIX秒
fttl.unixMs();    // UNIXミリ秒
fttl.tz("UTC");   // 指定タイムゾーンの現在時刻
```

---

## 🖥 Server Info

```js
fttl.info();
```

取得できる情報：

* OS / platform / arch
* uptime
* CPU model / cores / load
* memory（used / free / total）
* Node.js version
* 現在時刻

👉 **ステータスページ・Botの /status コマンド向き**

---

## ⏳ Cooldown

```js
fttl.cooldown.hit("user1", "daily", "1h");

fttl.cooldown.left("user1", "daily");  // 残り秒数
fttl.cooldown.ready("user1", "daily"); // true / false
fttl.cooldown.clear("user1", "daily");
```

対応フォーマット：

* `500ms`
* `10s`
* `5m`
* `1h`
* `1d`

---

## 🌐 Fetch Utility

```js
await fttl.fetch("https://api.example.com");

await fttl.fetch.get(url);
await fttl.fetch.post(url, { hello: "world" });
```

返り値：

```js
{
  ok: boolean;
  status: number;
  data?: any;
  error?: string;
}
```

---

## 🔁 Retry

```js
await fttl.retry(
  () => fttl.fetch(url),
  { times: 3, delay: 1000 }
);
```

---

## 💤 Sleep

```js
await fttl.sleep(1000);
```

---

## ⏱ ms 変換

```js
fttl.ms("1h");   // 3600000
fttl.ms(60000);  // "1m"
```

---

## 📏 formatBytes

```js
fttl.formatBytes(123456789);
// "117.7 MB"
```

---

## 🎲 Random

```js
fttl.random.int(1, 10);
fttl.random.pick(["a", "b", "c"]);
```

---

## 🧠 想定ユースケース

* Discord Bot
* サーバーステータスページ
* API監視・ヘルスチェック
* Node.js 補助ツール
* 自作フレームワークの土台

---

## 🧩 なぜ fttl？

* **fast**：軽くて速い
* **tool**：よく使う処理を一箇所に
* **low stress**：書く量を減らす

👉 「最初に入れる便利箱」を目指しています。

---

## 📄 ライセンス

MIT

---

## 🔥 メモ

* 依存ゼロ
* ES Modules
* Node.js 18+ 推奨（fetch 使用）

---

Enjoy fast coding ✨
