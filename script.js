let inputText = "";

let inputDOM = document.getElementById("inputBox").addEventListener("change", function say() {
    inputText = document.getElementById("inputBox").value;

}
);

let todos = [];


function yenile() {
    let result = "";

    if (todos.length === 0) {
        result = "Liste Boş !";
    } else {
        let sira = 0;
        todos.forEach((item) => {
            sira++;
            result += `
            <li class="border-2 p-2 mb-2 flex justify-between items-center">
                    <span>${sira} - ${item.todoTitle}</span>
                    <button class="text-red-400 p-2 px-4" onclick="deleteItem(${item.id})">Sil</button>
            </li>  
            `;
        }
        )
    }
    document.getElementById("liste").innerHTML = result;
    result = "";
}

document.getElementById("addTodo").addEventListener("click",
    function addTodo() {
        event.preventDefault();
        todos.push({ id: todos.length, todoTitle: inputText });
        yenile()
        document.getElementById("inputBox").value = "";
    }
);


function deleteItem(say) {
    event.preventDefault();

    todos.forEach((item) => {
        if (item.id == say) {
            todos.splice(item, 1);
        }
    }
    );
    yenile();
}

function clearALL() {
    event.preventDefault();
    document.getElementById("inputBox").value = "";
    todos.length = 0;
    yenile();

}






