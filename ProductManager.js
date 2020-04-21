function displayTableFromArray(productList) {
    string = "<table>"
        + "<caption>Display all products: </caption>"
        + "<tr>"
        + "<th width='30%'>Product Name</th>"
        + "<th>&nbsp;</th>"
        + "<th>&nbsp;</th>"
        + "</tr>";
    for(let i=0;i<productList.length;i++){
        string+="<tr>";
        string+="<td>"+productList[i]+"</td>";
        string+="<td><input type='button' value='Edit' id='edit' onclick='"+editProduct(i,productList)+"'></td>";
        string+="<td><input type='button' value='Delete' id='delete'></td>";
        string+="</tr>";
    }
    string += "</table>";
    document.getElementById("displayTable").innerHTML = string;
}
function addProduct(productList){
    let product=document.getElementById("newProduct").value;
    productList.push(product);
    displayTableFromArray(productList);
}
function editProduct(index,productList){
    let newProduct=prompt("Nhap ten moi san pham:");
    productList[index]="newProduct";
    displayTableFromArray(productList);
}


