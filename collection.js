/*var productContainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredValue = event.target.value.toUppercase()

    for(cout=0;count<productlist.length;count=count+1)
    {
        var productname = productlist[count].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"

        }
        else{
            productlist[count].style.display="block"
        }
    }
})*/
const productContainer = document.getElementById("products");
const search = document.getElementById("search");
const productList = productContainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    const enteredValue = event.target.value.toUpperCase();

    productList.forEach(product => {
        const productName = product.querySelector("p").textContent.toUpperCase();

        if (productName.indexOf(enteredValue) < 0) {
            product.style.display = "none";
        } else {
            product.style.display = "block";
        
        }
    });
});
