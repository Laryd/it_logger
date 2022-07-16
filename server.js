const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./db.json");
const middlewares = jsonServer.defaults({
  static: "./build",
});
const path = require("path");
const PORT = process.env.PORT || 5000;

server.use(router);
//serve static assets in production
if (process.env.NODE_ENV == "production") {
  //set static folder
  server.use(middlewares);
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
  );
}
server.listen(PORT, () => {
  console.log("Server is running");
});
