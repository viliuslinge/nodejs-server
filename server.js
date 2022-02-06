const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };

  if (req.method === "GET") {
    return handleGetReq(req, res, headers);
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function handleGetReq(req, res, headers) {
  const { pathname } = url.parse(req.url);
  if (pathname !== "/users") {
    return handleError(res, 404);
  }

  res.writeHead(200, {
    ...headers,
    "Content-Type": "application/json;charset=utf-8",
  });
  res.end(
    JSON.stringify([
      {
        userName: "Name",
      },
    ])
  );

  return;
}

function handleError(res, code) {
  res.statusCode = code;
  res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}
