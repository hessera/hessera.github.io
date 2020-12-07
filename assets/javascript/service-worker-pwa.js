let installPrompt;

const button = document.querySelector('#installButton');
// hide the button initially
button.style.display = "none";

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  // show the button if it makes sense
  button.style.display = "block";
  installPrompt = e;
});

button.addEventListener('click', () => {
  if (!installPrompt ) {
    // The deferred prompt isn't available.
    return;
  }

  // Show the install prompt.
  installPrompt.prompt();

  // Log the result
  installPrompt.userChoice.then((result) => {
    console.log('userChoice', result);
    // Reset the deferred prompt variable, since prompt() can only be called once.
    installPrompt = null;
    // Hide the install button.
    button.style.display = "none";
  });
});