//* Express 環境
const express = require("express");
const app = express();
const port = 3000;
//* 載入handlebars
const exphbs = require("express-handlebars");
//- 載入 body-parser
const bodyParser = require("body-parser");
//- 載入 method-override
const methodOverride = require("method-override");
//- 引用mongoose;
require("./config/mongoose");
//- 引用路由器
const routes = require("./routes");

//* 設定使用handlebars
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true })); //- 使用body-parser
app.use(methodOverride("_method")); //- 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(routes); //- 將 request 導入路由器

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
