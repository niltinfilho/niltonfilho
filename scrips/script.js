function sendWhatsapp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("msg").value;

  let phoneNumber = '+5517991248918';

  let url = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text="
    + "*Nome:* " + name + "%0A"
    + "*Email:* " + email + "%0A"
    + "*Mensagem:* " + msg + "%0A"
    ;

  window.open(url, "_blank");
}