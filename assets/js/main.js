function validation() {
  if (document.Formfill.email.value == "") {
    document.getElementById("email-error").innerHTML = "Enter Email*";
    return false;
  } else if (document.Formfill.password.value == "") {
    document.getElementById("password-error").innerHTML =
      "PASSWORD CANNOT BE EMPTY*";
    return false;
  } else if (document.Formfill.password.value.length < 6) {
    document.getElementById("password-error").innerHTML =
      "PASSWORD MUST BE ABOVE SIX CHARACTERS*";
    return false;
  } else if (document.Formfill.cpassword.value == "") {
    document.getElementById("cpassword-error").innerHTML =
      "PASSWORD CANNOT BE EMPTY*";
    return false;
  } else if (
    document.Formfill.cpassword.value !== document.Formfill.password.value
  ) {
    document.getElementById("cpassword-error").innerHTML =
      "PASSWORD MISMATCHED*";
    return false;
  } else if (
    document.Formfill.cpassword.value == document.Formfill.password.value
  ) {
    document.getElementById("popup").classList.add("show-validation");
    setTimeout(() => {
      window.location.replace("login.html");
      document.getElementById("popup").classList.remove("show-validation");
    }, 2000);
    return false;
  }

  if (document.getElementById("popup").classList.remove("show-validation")) {
  }
}

function closeSlide() {
  document.getElementById("popup").classList.add("closeslide");
  return false;
}
