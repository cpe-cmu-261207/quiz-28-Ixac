const namee = document.getElementById("p-name");
const email = document.getElementById("p-email");
const address = document.getElementById("p-address");
const btn = document.getElementById("btn-random");
const load = document.getElementById("div-loading-card");
const icon = document.getElementById("span-gender-icon");
const imgcard = document.getElementById("div-user-card");
const gicon = document.getElementById("span-gender-icon");

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  imgcard.src = resp.data.results.picture;
  namee.value = resp.data.results.name;
  email.value = resp.data.results.email;
  address.value = resp.data.results.address;
}
callApi();

