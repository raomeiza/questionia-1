function validation() {
  let pagePath = window.location.pathname;
  const { name, email, password, cpassword } = document.Formfill;
  if (email.value.trim() == "") {
    document.getElementById("email-error").innerHTML = "Enter Email*";
    return false;
  } else if (password.value.trim() == "") {
    document.getElementById("password-error").innerHTML =
      "PASSWORD CANNOT BE EMPTY*";
    return false;
  } else if (password.value.trim().length < 6) {
    document.getElementById("password-error").innerHTML =
      "PASSWORD MUST BE ABOVE SIX CHARACTERS*";
    return false;
  }
  if (pagePath === "/") {
    if (cpassword.value.trim() == "") {
      document.getElementById("cpassword-error").innerHTML =
        "PASSWORD CANNOT BE EMPTY*";
      return false;
    } else if (cpassword.value.trim() !== password.value.trim()) {
      document.getElementById("cpassword-error").innerHTML =
        "PASSWORD MISMATCHED*";
      return false;
    }

    // document.cookie = `username=${name.value.trim()}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
    document.cookie = `useremail=${email.value.trim()}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;
    document.cookie = `userpassword=${password.value.trim()}; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/`;

    localStorage.setItem('useremail', email.value.trim())
    localStorage.setItem('userpassword', password.value.trim())

    document.getElementById("popup").classList.add("show-validation");
    setTimeout(() => {
      document.location.replace('/login.html')
    }, 2000);
  } else if(pagePath === '/login.html') {
    try {
      // var useremail = document.cookie.split(";").find((c) => c.includes("useremail")).split("=")[1];
      // var userpassword = document.cookie.split(";").find((c) => c.includes("userpassword")).split("=")[1];
      var useremail = localStorage.getItem('useremail'),
        userpassword = localStorage.getItem('userpassword')
      if (useremail !== email.value.trim()) {
        document.getElementById("email-error").innerHTML = "User not found";
        return false
      } else if(userpassword !== password.value.trim()) {
        document.getElementById("password-error").innerHTML =
      "Password failed";
      return false
      }
      document.getElementById("popup").classList.add("show-validation");
    // setTimeout(() => {
    //   window.location.replace("login.html");
    //   document.getElementById("popup").classList.remove("show-validation");
    // }, 2000);
    return false;
    } catch (error) {
      console.log(error);
    }
  }
}

function closeSlide() {
  document.getElementById("popup").classList.add("closeslide");
  return false;
}
