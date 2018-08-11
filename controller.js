//JS Controller file
function funTopNavMenu(strID, strP) {
	
	var strTtl = document.getElementById(strID).innerHTML;
    var divItemDtls = document.getElementById("divItemDtls");
	var SubCatItem = document.getElementById("SubCatItem");
	var SubCatItemDesc = document.getElementById("SubCatItemDesc");
	
	if(strP!="Home"){
				
		divItemDtls.style.display="block";
		
		SubCatItem.innerHTML = strTtl;
		
	}	
	else{
		divSubCat.style.display="none";
	}
	
}