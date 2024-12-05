let url = "https://personal-blog-site-zeta.vercel.app/"
async function SendMail() {
  let First_Name = document.querySelector("#fname").value;
  let Email = document.querySelector("#femail").value;
  let User_Message = document.querySelector("#usermessage").value;
  // console.log(First_Name, Email, User_Message);
  if (First_Name && Email && User_Message) {
    let Body_Object = {
      name: First_Name,
      email: Email,
      message: User_Message,
    };
    let result = await fetch(
      `${url}mail/sendmail`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Body_Object),
      }
    );
    let Final_Result = await result.json();
    alert(Final_Result.message);
  } else {
    alert("Please Enter Proper Values To The Fields.");
  }
}
