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

  const myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("accept-language", "en-US,en;q=0.9,fil;q=0.8");
  myHeaders.append(
    "cookie",
    "dtCookie=v_4_srv_41_sn_A259306269F1B58E101C098DBFDCD378_perc_100000_ol_0_mul_1_app-3A05708b5314b91204_0_rcs-3Acss_0; _gcl_au=1.1.890213589.1735277148; _gid=GA1.2.1095323129.1735277149; WZRK_G=f3ec1e087a304cd7a4fa5ebd397e26b2; WZRK_S_4WZ-974-465Z=%7B%22p%22%3A1%2C%22s%22%3A1735277147%2C%22t%22%3A1735277149%7D; __hstc=14789097.bcbdbcf0c5d503e2f12afc11f8171598.1735277149359.1735277149359.1735277149359.1; hubspotutk=bcbdbcf0c5d503e2f12afc11f8171598; __hssrc=1; __hssc=14789097.1.1735277149359; _ga_XFXXT1C87R=GS1.1.1735277148.1.1.1735277162.46.0.0; _ga_FS3NJ9ZM4S=GS1.1.1735277148.1.1.1735277162.0.0.0; _ga=GA1.1.1283340807.1735277148; _hjSession_3850744=eyJpZCI6IjhkYzQ4ZDg1LTAwNTUtNGQ2Yi05ZDM3LTIzZTYxYzhjYTRkOSIsImMiOjE3MzUyNzcxNzI5MTQsInMiOjAsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjoxLCJzcCI6MH0=; _hjSessionUser_3850744=eyJpZCI6Ijk5MGU5YWVjLTY2ZmItNTY0Yy1iMmVmLTc5YzQ3NTU4MDc4NiIsImNyZWF0ZWQiOjE3MzUyNzcxNzI5MTMsImV4aXN0aW5nIjp0cnVlfQ==; paymaya.checkout.sid=s%3AGYq_h_9dQh6j9MWPslvjFtpW-pWvnsGZ.qUJrB8YKPDr%2Fr44DqcYkFKjUcj1cJy63TKEibiw%2FhOc; _ga_DSWRE0GM4B=GS1.1.1735277171.1.1.1735277818.0.0.0; _ga_TSD971128Y=GS1.1.1735277619.1.1.1735277858.0.0.0; _ga_5X617NBDEK=GS1.1.1735277641.1.1.1735277858.0.0.0; _ga_GV5CSJ7N60=GS1.1.1735277642.1.1.1735277858.0.0.0; _ga_Y613GY3TVC=GS1.1.1735277768.1.1.1735277871.0.0.0; _ga_MXLFCRNEZE=GS1.1.1735277768.1.1.1735277871.0.0.0; paymaya.checkout.sid=s%3AkR93t1u9Rxs-XEY75g9_NbAx0UZvrjTe.iOGlaWM5okGUwbZnhKoxCkb6THmI17xfvMiaHgVD9sY"
  );
  myHeaders.append("priority", "u=1, i");
  myHeaders.append(
    "referer",
    "https://payments.maya.ph/invoice?id=28d463cd-ce53-48aa-ba12-b51a66d7a36f"
  );
  myHeaders.append(
    "sec-ch-ua",
    '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("sec-ch-ua-platform", '"Windows"');
  myHeaders.append("sec-fetch-dest", "empty");
  myHeaders.append("sec-fetch-mode", "cors");
  myHeaders.append("sec-fetch-site", "same-origin");
  myHeaders.append(
    "user-agent",
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
  );
  myHeaders.append(
    "x-dtpc",
    "41$77871498_642h6vHTMMHKJMLKBNCKTIPKURWUJVBMWKHAMR-0e0"
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    `https://payments.maya.ph/invoice/payment?id=${id}&amount=${amount}`,
    requestOptions
  )
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.error(error));
}
