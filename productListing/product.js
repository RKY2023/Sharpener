var totalProductAmt = 0;
var crudcrudBaseurl = 'https://crudcrud.com/api/852c99a5719c42fb8e6e503d2ea6bfe4/ProductDataSTR';
btn = document.getElementById("product_adder");
btn.addEventListener("click", function() {
    add_product();
});
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
                // div +='<div class="p-3 bg-info description">'+product.desc+'</div>';
                // div +='<input type="button" id="product_edit_'+product._id+'" name="edit" onclick="edit_product('+product._id+')" value="Edit" class="btn btn-warning p-3 mb-2">';
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
        .then( res => showOutput(res))
        .catch( err => console.error(err));
    fetchList();
}
function del_product(product_id){
    let product_elem = document.getElementById('product'+product_id);
    product_elem.parentNode.removeChild(product_elem);
    axios
    .delete(crudcrudBaseurl+'/'+product_id)
    .then( res => { 
        console.log('deleted');
        fetchList();
    })
    .catch( err => console.error(err));
}
