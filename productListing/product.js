var totalProductAmt = 0;
var crudcrudBaseurl = 'https://crudcrud.com/api/8f63c3bb85514dc18db3598e807ff243/ProductDataSTR';
btn = document.getElementById("product_adder");
btn.addEventListener("click", function() {
    add_product();
});
var test = [];
var product_id = localStorage.getItem("product_id");
if(product_id == null) 
    product_id = 0;

fetchList();
function addHtml(product){
    let div = '';
    div += '<ul id="product'+product._id+'" class="list-group">';
        div += '<li class="list-group-item d-flex justify-content-between align-items-start">';
            div +='<div class="p-3 mb-0 bg-dark text-white name">'+product.name+'</div>';
            div +='<div class="p-3 bg-light amount">'+product.amount+'</div>';
            div +='<input type="button" id="product_del_'+product._id+'" name="delete" onclick="del_product(\''+product._id+'\')" value="Delete" class="btn btn-danger p-3 mb-2 ">';                             
        div += '<li class="row">';
    div +='</ul>';
    totalProductAmt += parseFloat(product.amount);
    return div;
}
function addItem(res,type){
    product = res.data;
    var div = '';
    if(type == 0){
        // console.table(data);
        totalProductAmt = 0;
        product.forEach(product => { div += addHtml(product);});
    }
    else{
        div = addHtml(product);
    }
    var newElement = document.createElement("div");
    newElement.innerHTML = div;
    newElement.className = 'col';
    if(type == 0)
        document.getElementById("data").innerHTML ='';
    document.getElementById("data").appendChild(newElement);
    updateTotal();
}
function updateTotal(){
    document.getElementById("productTotalAmt").innerText = totalProductAmt;
}
async function fetchList(){
    try{
        let fetchLst = await axios.get(crudcrudBaseurl)
        if(fetchLst.status == 200)
            addItem(fetchLst,0);
    }
    catch( err) {
        console.log(err);
    };
}
async function add_product(){
    let product_name = document.getElementById('product_name').value;
    let product_amt = document.getElementById('product_amt').value;
    product = {
        'id': product_id,
        'name': product_name,
        'amount': product_amt
    }
    try{
        let addProd = await axios.post(crudcrudBaseurl,product)
        appendItem(addProd);
    }catch(err){
        console.log(err);
    }
}
async function del_product(product_id){
    try{
        let res = await axios.delete(crudcrudBaseurl+'/'+product_id)
        removeItem(res, product_id);
    }catch(err){
        console.log(err);
    }
}
function removeItem(res, product_id){
    if(res.status >= 200 & res.status < 206){
        let product_elem = document.getElementById('product'+product_id);
        let amt  = product_elem.querySelector('.amount').innerHTML;
        product_elem.parentNode.removeChild(product_elem);
        totalProductAmt -= parseFloat(amt);
        updateTotal();
    }
}
function appendItem(res){
    if(res.status >= 200 & res.status < 206){
        addItem(res,1);
    }
} 
