const copy = document.getElementById("copy-btn");
const textarea = document.getElementById("textarea");
const speak = document.getElementById("speak-btn");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

speak.addEventListener("click", function () {
  recognition.start(); //?Starts the speech recognition service listening to incoming audio
  textarea.innerHTML = "...listening to you 👂";
});

recognition.onresult = function (e) {
  var transcript = e.results[0][0].transcript; //checkout mdn for details
  textarea.innerHTML = transcript;
  textarea.style.fontSize = "2rem";
  textarea.style.color = "yellow";
};

//!clipboard

copy.addEventListener("click", function () {
  textarea.select();
  textarea.setSelectionRange(0, 99999);
  document.execCommand("copy");
  //? The executeCommand() method executes a specified command on selected text or section.

  //alert modified with sweetalert2
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your text has been copied to clipboard",
    showConfirmButton: false,
    timer: 1500,
  });
});
