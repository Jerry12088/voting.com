

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
