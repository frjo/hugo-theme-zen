/**
 * @file
 * A JavaScript file for the css formatter.
 */

'use strict';

function formatCSS(css) {
  let formattedCSS = '';

  // Remove excessive whitespace
  css = css.trim().replace(/\s+/g, ' ');

  // Add indentation
  let indent = 0;
  for (let i = 0; i < css.length; i++) {
    const char = css[i];

    if (char === '{') {
      formattedCSS += ` ${char}\n${'\t'.repeat(++indent)}`; // Increase indentation
    } else if (char === '}') {
      formattedCSS += `\n${'\t'.repeat(--indent)}${char}`; // Decrease indentation
    } else if (char === ';') {
      formattedCSS += `${char}\n${'\t'.repeat(indent)}`; // Add line break after semicolon
    } else {
      formattedCSS += char;
    }
  }

  return formattedCSS.trim();
}

function displayFormattedCSS() {
  const input = document.getElementsByClassName("css-textbox css-input")[0].value;

  try {
    const formattedCSS = formatCSS(input);
    document.getElementsByClassName("css-textbox css-output")[0].value = formattedCSS;
  } catch (error) {
    console.error(error);
    document.getElementsByClassName("css-textbox css-output")[0].value = "Invalid CSS format";
  }
}

function downloadCSS() {
  const input = document.getElementsByClassName("css-textbox css-input")[0].value;

  try {
    const formattedCSS = formatCSS(input);
    const blobCSS = new Blob([formattedCSS], { type: 'application/text' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blobCSS);
    link.download = "format.css";
    link.click();

    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error(error);
    document.getElementsByClassName("css-textbox css-output")[0].value = "Invalid CSS format";
  }
}

function clearInput() {
  document.getElementsByClassName("css-textbox css-input")[0].value = "";
  document.getElementsByClassName("css-textbox css-output")[0].value = "";
}