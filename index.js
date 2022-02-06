function main() {
  fetch("http://127.0.0.1:3001/users", {
    method: "GET",
  })
    .then((it) => it.json())
    .then((it) => console.log("RESULT: ", it))
    .catch((err) => console.log("ERROR: ", err));
}

main();
