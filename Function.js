document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve form values
  const text1 = document.getElementById("text1").value;
  const text2 = document.getElementById("text2").value;
  const checkboxes = document.querySelectorAll(
    'input[name="checkbox"]:checked'
  );
  const checkedValues = Array.from(checkboxes)
    .map((cb) => cb.value)
    .join(", ");

  const radio = document.querySelector('input[name="radio"]:checked')
    ? document.querySelector('input[name="radio"]:checked').value
    : "None";
  const textarea = document.getElementById("textarea").value;
  const select = document.getElementById("select").value;

  // Populate the table
  const tableBody = document.querySelector("#resultTable tbody");
  tableBody.innerHTML = `
      <tr><td>Name</td><td>${text1}</td></tr>
      <tr><td>Password</td><td>${text2}</td></tr>
      <tr><td>Hobbies</td><td>${checkedValues}</td></tr>
      <tr><td>Gender</td><td>${radio}</td></tr>
      <tr><td>Comment</td><td>${textarea}</td></tr>
      <tr><td>Education</td><td>${select}</td></tr>
  `;
});
