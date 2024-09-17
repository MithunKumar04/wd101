let formStore = document.getElementById("form-Store");
uservals = JSON.parse(localStorage.getItem("user-vals")) || [];

function displayvals() {
  let retrivevals = JSON.parse(localStorage.getItem("user-vals"));
  if (retrivevals == []) {
    return;
  }
  let tableentries = retrivevals.map((retrivevals) => `
      <tr>
          <td class="border px-4 py-2">${retrivevals.name}</td>
          <td class="border px-4 py-2">${retrivevals.email}</td>
          <td class="border px-4 py-2">${retrivevals.password}</td>
          <td class="border px-4 py-2">${retrivevals.date}</td>
          <td class="border px-4 py-2">${retrivevals.acceptance ? 'true' : 'false'}</td>
      </tr>
  `).join("");

  let details = document.getElementById("user-vals");
  details.innerHTML = tableentries;
};
function saveForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("pass").value;
  const email = document.getElementById("mail").value;
  const date = document.getElementById("date").value;
  const acceptance = document.getElementById("check").checked;
  const vals = {
    name,
    email,
    password,
    date,
    acceptance,
  };
  uservals.push(vals);
  localStorage.setItem("user-vals", JSON.stringify(uservals));
  displayvals();
};

formStore.addEventListener("submit", saveForm);
displayvals();
