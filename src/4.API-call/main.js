const postsContainer = document.querySelector(".posts-container");

//XHR
function fetchXHRData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhr.responseType = "json";
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      displayData(xhr.response);
    } else {
      console.log("ERROR!!!");
    }
  };
}
//NORMAL FETCH
function fetchData() {
  //   const data = fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "GET",
  //   });
  //   data
  //   .then((res) => res.json())
  //   .then((res)=>displayData(res));   OR below method
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((e) => console.log("ERROR!!!"));
}

//ASYNC AWAIT
async function fetchAsyncData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const data = await res.json();
  displayData(data);
}

//fetch using both XHR and ASYNC AWAIT and PROMISE
function helperMethod(method, url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.response);
      }
    };
  });
  return promise;
}
async function fetchAsyncXhrPromise() {
  const data = await helperMethod(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  displayData(data);
}

function displayData(list) {
  postsContainer.innerHTML = list
    .map(
      (item) => `
            <div>
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>`
    )
    .join(" ");
}

// fetchXHRData();
// fetchData();
// fetchAsyncData();
fetchAsyncXhrPromise();
