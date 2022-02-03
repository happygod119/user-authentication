//* Express 環境
const express = require("express");
const app = express();
const port = 3000;
//* 載入handlebars
const exphbs = require("express-handlebars");
//- 引用mongoose;
require("./config/mongoose");
//- 引用路由器
const routes = require("./routes");

//* 設定使用handlebars
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(routes); //- 將 request 導入路由器

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
