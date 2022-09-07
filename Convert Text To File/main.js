"use strict";

const textArea = document.querySelector("textarea");
const fileNameInput = document.querySelector(".file-name input");
const selectMenu = document.querySelector(".save-as select");
const saveBtn = document.querySelector(".save-btn");
const fileType = document.querySelector(".file-type");

selectMenu.addEventListener("change", () => {
  let selectOption = selectMenu.options[selectMenu.selectedIndex].text;
  fileType.textContent = selectOption.split(" ")[0];
});

saveBtn.addEventListener("click", () => {
  const blob = new Blob([textArea.value], { type: selectMenu.value });
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a"); // creating a tag
  link.download = fileNameInput.value; // passing filename as downlaod value of link
  link.href = fileUrl; // passing fileUrl as href value of link
  link.click(); // clicking link so the file download
});
