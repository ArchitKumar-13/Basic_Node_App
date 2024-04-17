const express = require("express")
const app = express();


app.get("/", (req, res) => {
    res.send("<h1>Visitng Root!!!</h1>")
})


app.listen(8031, () => {
console.log("App is running on 8031");
});