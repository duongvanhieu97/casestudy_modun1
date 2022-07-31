//Tạo sản phẩm mới
function createProducts() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let category = document.getElementById('category').value;
    if (name === "" || name === null) {
        alert('Bạn cần phải nhập lại thông tin đẩy đủ và chính xác')
    } else {
        let create = new Products(name, price, category, image);
        showProducts(create)
    }
    showProducts();
    clearCreateProducts()

}

//clear table khi tạo bảng xong
function clearCreateProducts() {
    document.getElementById('name').value = " ";
    document.getElementById('price').value = " ";
    document.getElementById('image').value = " ";
    document.getElementById('category').value = " ";

}