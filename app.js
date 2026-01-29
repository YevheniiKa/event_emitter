import http from "http";

const PORT = process.env.PORT || 3006;

const server = new http.Server();

server.on("request", (req, res) => {
  res.end("Hello world!");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
