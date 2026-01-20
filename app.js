console.log("Hello!");

const img = document.querySelector("img");

async function getMyStuffFromOverThere() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP response:", response);
  const json = await response.json();
  console.log("JSON DATA", json);
}
getMyStuffFromOverThere();

async function fatchData() {
  const response = await fetch(
    "https://api.github.com/repos/leah348/05-using-apis",
  );
  console.log(response);

  const data = await response.json();
  console.log(data);
}
fatchData();
// google dont work on json
async function mydata() {
  const response = await fetch("https://www.google.com");

  console.log(response);

  const mydata = await response.jason();
  console.log(mydata);
}
mydata();
