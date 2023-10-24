var grid = {
    termekek: [], //termekek tömb.
    termekek2: [], //termekek2 tömb.
    
    //Getdata objectum.
    getData: function(){
        //A megjelenítendő weboldal URL:https://dummyjson.com/carts
        fetch("https://dummyjson.com/carts")
        .then(response => response.json())
        .then(adat=>{            

            //Termekek feltöltése az adat.carts tömbbel.
            grid.termekek=adat.carts;          
            
            //While ciklus a cartsban lévő products tömb kiolvasására.
            let i = 0;
            while (i < adat.carts.length) 
            {
                //... operátor használata a könnyebb 
                grid.termekek2.push(...adat.carts[i].products);
                i++;
            }
            
            //Show megjelenítése.
            this.show();
            this.show2();
            return;
        })

        //Ha nem éri el a weboldal.
        .catch(error => {return "Hiba!"+error})  
    },
    show: function(){
        //Az első táblázat fejléce.
        s=" ";
        s += `<thead class=fejlec>
                <tr>
                    <th>ID</th>
                    <th>Összeg</th>
                    <th>Kedvezményes összeg</th>
                    <th>Felhasználó ID</th>
                    <th>Összes termék</th>
                    <th>Összes mennyiség</th>
                </tr>
            </thead>  
            <tbody>`;
        //A táblázat tartalma.
        this.termekek.forEach(elem =>{
            s+=`<tr>
            <td>${elem.id}.</td>
            <td>${elem.total}$</td>
            <td>${elem.discountedTotal}$</td>
            <td>${elem.userId}</td>
            <td>${elem.totalProducts} Darab</td>
            <td>${elem.totalQuantity} Darab</td>
            </tr>`
        });
        s += `</tbody>`;
        //Visszaadása a HTML-nek.
        document.getElementById("megjelen").innerHTML = s;
    },

    show2: function(){
        //Második táblázat fejléce.
        s2=" ";
        s2 += `<thead class=fejlec>
                <tr>
                    <th>ID</th>
                    <th>Név</th>
                    <th>Ár</th>
                    <th>Mennyiség</th>
                    <th>Összeg</th>
                    <th>Kedvezmény százalék</th>
                    <th>Kedvezményes ár</th>
                </tr>
            </thead>
            <tbody>`;
        //A táblázat tartalma.
        this.termekek2.forEach(elem2 =>{
            s2+=`<tr>
            <td>${elem2.id}.</td>
            <td>${elem2.title}</td>
            <td>${elem2.price}$</td>
            <td>${elem2.quantity} darab</td>
            <td>${elem2.total}$</td>
            <td>${elem2.discountPercentage}%</td>
            <td>${elem2.discountedPrice}$</td>
            </tr>`
        });
        s2 += `</tbody>`;
        //Visszadása a HTML-nek.
        document.getElementById("megjelen2").innerHTML = s2;
    }
}
//Meghívássa.
grid.getData();
