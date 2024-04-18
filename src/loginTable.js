document.addEventListener("DOMContentLoaded", function () {
    const createAccountBtn = document.getElementById("createAccountBtn");
    const registrationForm = document.getElementById("registrationForm");
    const registrationBody = document.getElementById("registrationBody");

    createAccountBtn.addEventListener("click", function (event) {
        event.preventDefault();
        const firstName = document.getElementById("firstName").value;
        const email = document.getElementById("email").value;
        const role = document.getElementById("roles").value;

        if (firstName.trim() === '' || email.trim() === '') {
            alert("Please fill in all fields.");
            return;
        }

        appendValues(firstName, email, role);
    });

    registrationBody.addEventListener("click", function (event) {
        if (event.target.classList.contains("removeBtn")) {
            event.target.closest("tr").remove();
        } else if (event.target.classList.contains("editBtn")) {
            // You can implement edit functionality here
            console.log("Edit button clicked");
        }
    });

    function appendValues(firstName, email, role) {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td class="border border-black">${registrationBody.children.length + 1}</td>
            <td class="border border-black">${firstName}</td>
            <td class="border border-black">${email}</td>
            <td class="border border-black">${role}</td>
            <td class="border border-black">
                <button class="bg-blue-500 text-white p-1 editBtn"><i class="fas fa-edit"></i></button>
                <button class="bg-red-500 text-white p-1 removeBtn"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        registrationBody.appendChild(newRow);
    }
});
