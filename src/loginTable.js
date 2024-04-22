document.addEventListener("DOMContentLoaded", function () {
    let counter = 1;

    document.getElementById("createAccountBtn").addEventListener("click", appendValues);

    function appendValues() {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var role = document.getElementById("roles").value;

        if (name === "" || email === "") {
            return alert("Name and email are required!");
        }

        var tableBody = document.querySelector("#registrationTable tbody");
        var newRow = tableBody.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.textContent = counter;
        cell1.classList.add("border", "border-black");
        cell2.textContent = name;
        cell2.classList.add("border", "border-black");
        cell3.textContent = email;
        cell3.classList.add("border", "border-black");
        cell4.textContent = role;
        cell4.classList.add("border", "border-black"); 

        var editButton = document.createElement("button");
        editButton.className = "bg-blue-500 text-white p-1 editBtn";
        var editIcon = document.createElement("i");
        editIcon.className = "fas fa-edit";
        editButton.appendChild(editIcon);
        editButton.addEventListener("click", function () {
            editRow(newRow);
        });

        var deleteButton = document.createElement("button");
        deleteButton.className = "bg-red-500 text-white p-1 removeBtn";
        var deleteIcon = document.createElement("i");
        deleteIcon.className = "fas fa-trash-alt";
        deleteButton.appendChild(deleteIcon);
        deleteButton.addEventListener("click", function () {
            var rowToRemove = this.parentNode.parentNode;
            rowToRemove.parentNode.removeChild(rowToRemove);
            alert("Row with ID " + (counter - 1) + " removed.");
        });

        cell5.appendChild(editButton);
        cell5.appendChild(deleteButton);
        cell5.classList.add("border", "border-black");

        counter++;

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("roles").value = "";
    }

    function editRow(row) {
        var cells = row.getElementsByTagName("td");
        document.getElementById("name").value = cells[1].textContent;
        document.getElementById("email").value = cells[2].textContent;
        document.getElementById("roles").value = cells[3].textContent;
    }

    document.querySelectorAll("#registrationTable tbody tr button").forEach(function (button) {
        button.addEventListener("click", function () {
            var row = this.parentNode.parentNode;
            editRow(row);
        });
    });
});
