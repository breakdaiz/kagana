const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");

const amount = 2000;

const form = document.getElementById("paymayaForm");
const errMsg = document.getElementById("err-msg");

form.addEventListener("submit", formSubmit);

// // Validate a URL
// function validURL(str) {
//   var pattern = new RegExp(
//     "^(https?:\\/\\/)?" + // protocol
//       "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
//       "((\\d{1,3}\\.){3}\\d{1,3}))" +
//       "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
//       "(\\?[;&a-z\\d%_.~+=-]*)?" +
//       "(\\#[-a-z\\d_]*)?$",
//     "i"
//   );
//   return !!pattern.test(str);
// }

function formSubmit(e) {
  e.preventDefault();

  if (firstName.value === "") {
    errMsg.innerHTML = "First name is required";
    input.classList.add("border-red");
  }
  if (lastName.value === "") {
    errMsg.innerHTML = "Last name is required!";
    input.classList.add("border-red");
  }

  if (email.value === "") {
    errMsg.innerHTML = "Email is required!";
    input.classList.add("border-red");
  } else {
    checkout();
  }
}

async function checkout() {
  console.log("Checkouuuutt");
  const id = "28d463cd-ce53-48aa-ba12-b51a66d7a36f";
  const URL = "https://payments.maya.ph/invoice/payment";

  fetch(`https://payments.maya.ph/invoice/payment?id=${id}&amount=${amount}`, {
    method: "GET",
    headers: [
      {
        // source: "https://payments.maya.ph/invoice/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ],
  })
    .then(response => response.json())
    .then(data => console.log(data));
}
