## 安裝

```bash
$ npm i --save youmeb-lab/lovecode
```

## 使用

`lovecode` 提供 JS Array 的資料，但是查詢上不可能去搜整個陣列，所以提供一個 method 來建立欄位名稱跟資料的對應物件

```javascript
var map = require('lovecode').index('name');
console.log(map['財團法人台灣兒童暨家庭扶助基金會附設彰化縣私立家扶發展學園']);
```
