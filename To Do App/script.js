const addUser = document.querySelector("#addUser");
const userName = document.querySelector("#userName");
const list = document.querySelector("#list");

let userArray = [];

let editId = null;

let objStr = localStorage.getItem("user");
// console.log(objStr)
if(objStr != null){
    userArray = JSON.parse(objStr)
    // console.log(userArray)
}

displayInfo();

addUser.addEventListener("click", () => {
    let name = userName.value;
    // alert(name);
    if(editId != null){
        userArray.splice(editId, 1, {"name": name});
        editId = null;
    }
    else{
        userArray.push({"name": name});
    }
    userName.value = ""
    
    // console.log(userArray)
    saveInfo(userArray)
})

function saveInfo(userArray){
    let str = JSON.stringify(userArray)
    // console.log(str)
    localStorage.setItem("user",(str))
    displayInfo();
}

function displayInfo(){
    let statement = "";
    userArray.forEach((user, i) =>{
        statement += `<li>
        <span>${user.name}</span>
        <label>
          <i class="fa-solid fa-pen-to-square" onclick = "editInfo(${i})"></i>
          <i class="fa-solid fa-trash-can" onclick = "deleteInfo(${i})"></i>
        </label>
      </li>`
    })
    list.innerHTML = statement;
}

function editInfo(id){
    // alert(id)
    editId = id;
    userName.value = userArray[id].name;
}

function deleteInfo(id){
    // alert(id)
    let del = userArray.splice(id,1);
    console.log(del)
    saveInfo(userArray);
    displayInfo();
}

