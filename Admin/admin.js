
        function showTable() {
            document.getElementById("userTable").style.display = "table";
            document.getElementById("getBtn").style.display = "inline-block";
        }

        function getUsers() {

            fetch("http://localhost:8080/alluser")
                .then(response => response.json())
                .then(data => {

                    const tableBody = document.getElementById("userData");
                    tableBody.innerHTML = "";

                    data.forEach(user => {

                        const row = `
                            <tr>
                                <td>${user.id}</td>
                                <td>${user.name}</td>
                                <td>${user.age}</td>
                                <td>${user.dept}</td>
                            </tr>
                        `;

                        tableBody.innerHTML += row;
                    });

                })
                .catch(error => {
                    console.error("Error:", error);
                });
        }
    
