var totalProductAmt = 0;
var crudcrudBaseurl = 'https://crudcrud.com/api/0fc83f8c4d05474889f353ca74aecb0e/ProductDataSTR';
btn = document.getElementById("product_adder");
btn.addEventListener("click", function() {
    add_product();
});
var test = [];
var product_id = localStorage.getItem("product_id");
if(product_id == null) 
    product_id = 0;

fetchList();
function addHtml(data){
    console.table(data);
    var div = ''
    totalProductAmt = 0;
    data.forEach(product => {
        div += '<ul id="product'+product._id+'" class="list-group">';
            div += '<li class="list-group-item d-flex justify-content-between align-items-start">';
                div +='<div class="p-3 mb-0 bg-dark text-white name">'+product.name+'</div>';
                div +='<div class="p-3 bg-light amount">'+product.amount+'</div>';
                div +='<input type="button" id="product_del_'+product._id+'" name="delete" onclick="del_product(\''+product._id+'\')" value="Delete" class="btn btn-danger p-3 mb-2 ">';                             
            div += '<li class="row">';
        div +='</ul>';
        totalProductAmt += parseFloat(product.amount);
    });
    
    var newElement = document.createElement("div");
    newElement.innerHTML = div;
    newElement.className = 'col';
    document.getElementById("data").innerHTML ='';
    document.getElementById("data").appendChild(newElement);
    updateTotal();
}
function addItem(res){
    var div = '';
    product = res.data;
    div += '<ul id="product'+product._id+'" class="list-group">';
        div += '<li class="list-group-item d-flex justify-content-between align-items-start">';
            div +='<div class="p-3 mb-0 bg-dark text-white name">'+product.name+'</div>';
            div +='<div class="p-3 bg-light amount">'+product.amount+'</div>';
            div +='<input type="button" id="product_del_'+product._id+'" name="delete" onclick="del_product(\''+product._id+'\')" value="Delete" class="btn btn-danger p-3 mb-2 ">';                             
        div += '<li class="row">';
    div +='</ul>';
    var newElement = document.createElement("div");
    newElement.innerHTML = div;
    newElement.className = 'col';
    document.getElementById("data").appendChild(newElement);
    totalProductAmt += parseFloat(product.amount);
    updateTotal();
}
function updateTotal(){
    document.getElementById("productTotalAmt").innerText = totalProductAmt;
}
function fetchList(){
    axios
    .get(crudcrudBaseurl)
    .then( res => {
        console.log('Data fetched');
        if(res.status == 200)
            addHtml(res.data);
    })
    .catch( err => console.error(err));
}
function add_product(){
    let product_name = document.getElementById('product_name').value;
    let product_amt = document.getElementById('product_amt').value;
    product = {
        'id': product_id,
        'name': product_name,
        'amount': product_amt
    }
    axios
        .post(crudcrudBaseurl,product)
        .then( res => {
            appendItem(res);
        })
        .catch( err => console.error(err));
}
function del_product(product_id){
    axios
    .delete(crudcrudBaseurl+'/'+product_id)
    .then( res => { 
        removeItem(res, product_id);
    })
    .catch( err => console.error(err));
}
function removeItem(res, product_id){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log(res);
            if(res.status >= 200 & res.status < 206){
                let product_elem = document.getElementById('product'+product_id);
                let amt  = product_elem.querySelector('.amount').innerHTML;
                product_elem.parentNode.removeChild(product_elem);
                totalProductAmt -= parseFloat(amt);
                updateTotal();
            }
        }, 1000);
    })
    
}
function appendItem(res){
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            console.log(res);
            if(res.status >= 200 & res.status < 206){
                addItem(res);
            }
        },1000);
    })
} 
  