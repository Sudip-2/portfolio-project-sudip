async function SendMail() {
  let First_Name = document.querySelector("#fname").value;
  let Email = document.querySelector("#femail").value;
  let User_Message = document.querySelector("#usermessage").value;
  // console.log(First_Name, Email, User_Message);
  let Body_Object = {
    name: First_Name,
    email: Email,
    message: User_Message,
  };
  let result = await fetch(
    "https://main--clever-longma-9048d0.netlify.app/submit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Body_Object),
    }
  );
  let Final_Result = await result.text();
  alert(Final_Result);
  // .then((result) => {
  //   return result.text();
  // })
  // .then((Final_Result) => {
  //   alert(Final_Result);
  // })
  // .catch((Error) => {
  //   alert(Error);
  // });
}
