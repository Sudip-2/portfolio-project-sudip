async function SendMail() {
  let First_Name = document.querySelector("#fname").value;
  let Email = document.querySelector("#femail").value;
  let User_Message = document.querySelector("#usermessage").value;
  console.log(First_Name, Email, User_Message);
  fetch("https://main--clever-longma-9048d0.netlify.app/", {
    method: "POST",
    body: {
      name: First_Name,
      email: Email,
      message: User_Message,
    },
  })
    .then((result) => {
      return result.text();
    })
    .then((Final_Result) => {
      alert(Final_Result);
    })
    .catch((Error) => {
      alert(Error);
    });
}
