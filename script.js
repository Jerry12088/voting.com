const API = "http://localhost:5000/api/votes";

function vote(option) {
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ option })
  }).then(loadResults);
}

function loadResults() {
  fetch(API)
    .then(res => res.json())
    .then(data => {
      const counts = {};
      data.forEach(v => counts[v.option] = (counts[v.option] || 0) + 1);

      const list = document.getElementById("results");
      list.innerHTML = "";
      for (let key in counts) {
        list.innerHTML += `<li>${key}: ${counts[key]}</li>`;
      }
    });
}

loadResults();
