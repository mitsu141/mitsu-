// タスクを追加する
function addTask(){

    // 入力を受け取る
    var task = document.getElementById("task").value;
    var date = document.getElementById("date").value;

    // 入力されているか確認
    if(task == ""){

        alert("タスク名を入力してください");
        return;

    }

    // 一覧を取得
    var list = document.getElementById("list");

    // liタグを作る
    var li = document.createElement("li");

    // 表示する内容
    li.innerHTML =
    task +
    "　期限：" +
    date +
    " <button onclick='deleteTask(this)'>削除</button>";

    // 一覧に追加
    list.appendChild(li);

    // 入力欄を空にする
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";

}

// タスクを削除する
function deleteTask(button){

    button.parentNode.remove();

}
