// const fileOne = document.getElementById("file_1");
const input = document.querySelector("input");
console.log(input);

fileOne.addEventListener("change",
                         () => {
  const output = fileOne.size;
  const output_n  = fileOne.name;
  document.getElementById("filesize_1").textContent = output;
  document.getElementById("filename_1").textContent = output_n;

});