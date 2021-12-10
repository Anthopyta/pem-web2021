var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol",
    "Penggaris"
];

function showbarang(){
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "";
    
    //cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+ i +")' > Edit</a>";
        var btnDelete = "<a href='#' onclick='deleteBarang("+ i +")' > Delete</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] +" ["+btnEdit +"]" + "["+ btnDelete +"]</li>";
    }
}

function addBarang(){
    var input = document.querySelector("input[name = barang]");
    dataBarang.push(input.value);
    showbarang();
}

function editBarang(){
    var newBarang = document.prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showbarang();
}

function deleteBarang(){
    dataBarang.splice(id, 1);
    showbarang();
}

showbarang();