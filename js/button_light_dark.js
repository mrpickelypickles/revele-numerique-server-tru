let btn = document.getElementById('btn-switch');
btn.addEventListener('click', darkMode);

function darkMode() {
  let element = document.body;
  element.classList.toggle('dark-mode');
  btn.classList.toggle('active');
}
/*
  // Load the button HTML file
  const iframe = document.createElement('iframe');
  iframe.src = 'botton_light_dark.html';
  iframe.style.display = 'none';
  iframe.onload = () => {
    // Get the button element from the iframe
    const button = iframe.contentDocument.querySelector('button');

    // Add the button to the main page
    const button_light_dark = document.getElementById('button_light_dark');
    button_light_dark.appendChild(button);

    // Remove the iframe
    iframe.remove();
  };
  document.body.appendChild(iframe);
  */