require("dotenv").config();
const express = require("express");
const path = require("path");
const { handleError } = require("./helpers/error");
const PORT = process.env.PORT || 3001;

app = express();
app.use(express.static(path.join(__dirname, "client/build")));
app.use(express.json());

app.get("/", (_, res) => {
	res.send("Server running");
});

app.get("*", (_, res) => {
	res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use((err, req, res, next) => {
	handleError(err, res);
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});
