/**
 * @file
 * A JavaScript file for the json formatter.
 */

'use strict';

function formatJSON() {
  const input = document.getElementsByClassName("json-textbox json-input")[0].value;

  try {
    const formattedJSON = JSON.stringify(JSON.parse(input), null, 2);
    document.getElementsByClassName("json-textbox json-output")[0].value = formattedJSON;
  } catch (error) {
    console.error(error);
    document.getElementsByClassName("json-textbox json-output")[0].value = "Invalid JSON format";
  }
}

function downloadJSON() {
  const input = document.getElementsByClassName("json-textbox json-input")[0].value;

  try {
    const formattedJSON = JSON.stringify(JSON.parse(input), null, 2);
    const blobJSON = new Blob([formattedJSON], { type: 'application/json' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blobJSON);
    link.download = "format.json";
    link.click();

    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error(error);
    document.getElementsByClassName("json-textbox json-output")[0].value = "Invalid JSON format";
  }
}

function clearInput() {
  document.getElementsByClassName("json-textbox json-input")[0].value = "";
  document.getElementsByClassName("json-textbox json-output")[0].value = "";
}