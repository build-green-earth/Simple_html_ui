const rowContainer = document.querySelector(".row");

for (var i = 1; i <= 100; i++) {
  var columnDiv = document.createElement("div");
  columnDiv.className = "column";
  columnDiv.innerHTML = rowContainer.querySelector(".column").innerHTML;
  rowContainer.appendChild(columnDiv);
}
