var todoArray = new Array();
var completeArray = new Array();


function addtask() {
    var taskName = document.getElementById("addbtn").value;
    if (taskName != '') {
        todoArray.push(taskName);
        todoDisplay();
        document.getElementById("addbtn").value = "";
    }
}

function todoDisplay() {
    var todolen = todoArray.length;
    var todo = "";
    for (var i = 0; i < todolen; i++) {
        todo += '<li><input type="checkbox" onclick="todoBox(' + i + ')"> <span>' + todoArray[i] + '</span> <input type="text" name="todoinput" id ="add' + i + '"> <button class="btn edit" onclick="todoEdit(' + i + ')"> Edit </button> <button class="btn del" onclick="todoDelete(' + i + ')"> Delete </button> </li>';
    }
    document.getElementById("todoul").innerHTML = todo;
}

function todoBox(x) {
    var element = todoArray[x];
    completeArray.push(element);
    todoArray.splice(x, 1);
    todoDisplay();
    completeDisplay();
}

function todoEdit(x) {
    var val = document.getElementById("add" + x).value;
    if (val != "") {
        todoArray[x] = val;
        todoDisplay();
        todoconfigure = true;
    }
}

function todoDelete(x) {
    todoArray.splice(x, 1);
    todoDisplay();
}

function completeDisplay() {
    var completelen = completeArray.length;
    var complete = "";

    for (var i = 0; i < completelen; i++) {
        complete += '<li><input type="checkbox" onclick="cmpltBox(' + i + ')" checked> <span>' + completeArray[i] + '</span> <input type="text" name="completeinput" id ="cadd' + i + '"> <button class="btn edit" onclick="cmpltEdit(' + i + ')"> Edit </button> <button class="btn del" onclick="cmpltDelete(' + i + ')"> Delete </button></li>';
    }
    document.getElementById("completeul").innerHTML = complete;
}

function cmpltBox(x) {
    var element = completeArray[x];
    todoArray.push(element);
    completeArray.splice(x, 1);
    todoDisplay();
    completeDisplay();
}

function cmpltEdit(x) {
    var val = document.getElementById("cadd" + x).value;
    if (val != '') {
        completeArray[x] = val;
        completeDisplay();
        completeconfigure = true;
    }
}

function cmpltDelete(x) {
    completeArray.splice(x, 1);
    completeDisplay();
}