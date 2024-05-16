var users = [
    { Email: "test@gmail.com", password: "1234", username: "test" }
];
console.log(users);
function login() {
    var PS = document.getElementById("password").value;
    var Mail = document.getElementById("email").value;

    // Reset error message
    document.getElementById("msg").innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        if (users[i].Email === Mail && users[i].password === PS) {
            // alert("Bonjour " + users[i].username);
            // Optionally, redirect to another page or perform other actions after successful login
            return true;
        }
    }

    // Display error message
    document.getElementById("msg").innerHTML = "Adresse Email ou mot de passe incorrect";
    return false;
}

function signup() {
    var PS = document.getElementById("password").value;
    var Mail = document.getElementById("email").value;
    var USR = document.getElementById("user").value;

    console.log(PS);

    if (PS.length < 8) {
        alert("Mot de passe doit contenir au moins 8 caractères");
        return false;
    } else {
        var user = {
            Email: Mail.value.trim(),
            password: PS.value.trim(),
            username: USR.value.trim(),
        };

        users.push(user);
    }
    return true;
}
const tasklist = document.getElementById("to-do-list");
const taskform = document.querySelector(".add-task-form-container   ");

taskform.addEventListener("submit", function (event) {
    event.preventDefault();
});

function enregistrer_tache() {
    const Titre = document.getElementById("titre").value.trim();
    const Date = document.getElementById("date").value.trim();
    const Details = document.getElementById("desc").value.trim();
    
    console.log(Titre, Date, Details);

    if (Titre !== "" && Date !== "" && Details !== "") {
        const newTask = document.createElement("div");
        newTask.classList.add("task");

        const Task_li = document.createElement("li");
        Task_li.textContent = Titre;

        const Task_span = document.createElement("span");
        Task_span.textContent = "[" + Date + "]";

        const Task_p = document.createElement("p");
        Task_p.textContent = Details;

        Task_li.appendChild(Task_span);
        Task_li.appendChild(Task_p);

        newTask.appendChild(Task_li);

        // const Task_delete = document.createElement("img");
        // Task_delete.classList.add("delete-icon");
        // Task_delete.src = "X.svg";

        // newTask.appendChild(Task_delete);
        newTask.addEventListener("click",function(){
            this.classList.toggle("completed")
        });
        tasklist.appendChild(newTask);
        document.getElementById("titre").value = "";
        document.getElementById("date").value = "";
        document.getElementById("desc").value = "";
    }
}

// Assuming there's a button or another element triggering this function
document.getElementById("savetask").addEventListener("click", function() {
    console.log("Button clicked");
    enregistrer_tache();
    
});