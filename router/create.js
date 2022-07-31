//Tạo sản phẩm mới
function createProducts() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let category = document.getElementById('category').value;
    if (name === "" || name === null ) {
        alert('Bạn cần phải nhập lại thông tin đẩy đủ và chính xác')
    }else {
        let create = new Products(name, price, image, category);
        switch (category) {
            case "clock": {
                arrClock.push([create])
                showClock()
                break
            }
            case "cosmetic": {
                arrCosmetic.push([create])
                showCosmetic()
                break
            }
            case "perfume": {
                arrPerfume.push([create])
                showPerfume()
                break
            }
            case "lipstick": {
                arrLipstick.push([create])
                showLipstick()
                break
            }
        }
    }
    reRender()
    clearCreateProducts()

}

//clear table khi tạo bảng xong
function clearCreateProducts() {
    document.getElementById('name').value = " ";
     document.getElementById('price').value = " ";
    document.getElementById('image').value = " ";
     document.getElementById('category').value = " ";

}