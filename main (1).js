function megjelenites(){
    var items = [
        {
            "name": "Apple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/265px-Red_Apple.jpg",
            "price": 35
        },
        {
            "name": "Banana",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/320px-Bananas_white_background_DS.jpg",
            "price": 12
        },
        {
            "name": "Grapes",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Table_grapes_on_white.jpg/320px-Table_grapes_on_white.jpg",
            "weight": 0.1,
            "price": 45
        },
        {
            "name": "Pineapple",
            "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/286px-Pineapple_and_cross_section.jpg",
            "price": 200
        }
    ];
    var table = document.getElementById('tablazat');
    var s = '<table>';
    for (var i = 0; i < items.length; i++) {
        s += `<tr>
        <td>${items[i].name}</td> 
        <td><img src="${items[i].image}"></td>
        <td>${items[i].weight || ''} </td>
        <td>${items[i].price}</td>
        </tr>`;
    }
    s += '</table>';
    table.innerHTML = s;
}

megjelenites();