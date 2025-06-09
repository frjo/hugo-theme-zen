/**
 * @file
 * A JavaScript file to add a copy code button to codeblocks.
 */

(function () {
  async function writeClipboardText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error(error.message);
    }
  }

  const copybuttons = document.querySelectorAll('[data-codebutton]');
  copybuttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      const codeblock = e.target.parentElement;
      const codeid = e.target.dataset.codebutton;
      const codesnippet = codeblock.querySelector('[data-codetext]').getAttribute('content');
      const codearea = codeblock.querySelector('pre');
      codearea.classList.add('flash-item');
      writeClipboardText(JSON.parse(codesnippet));
      setTimeout(function () {
        codearea.classList.remove('flash-item');
      }, 700);
    });
  });
})();
