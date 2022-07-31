function renderUpdateProducts(text) {
    let data = ""
    data += "<table id='table' border='2px' style='margin-top: 10px'>" +
        "<tr><td colspan='2'><h2>" + text + "</h2></td></tr>" +
        "<tr><td><label for='name'>Tên sản phẩm</label></td>" +
        "<td><input type='text' name='name' size='25' maxlength='30' id='name'></td></tr>" +
        "<tr><td><label for='price'>Giá sản phẩm</label></td>" +
        "<td><input type='text' name='price' size='25' maxlength='30' id='price'></td></tr>" +
        "<tr><td><label for='image'>Ảnh sản phẩm</td>" +
        "<td><input type='text' name='image' size='25' maxlength='30' id='image'></label></td></tr>" +
        "<tr><td><label for='category'>Loại sản phẩm</label></td>" +
        "<td><select id='category'>" +
        "<option></option>" +
        "<option value='clock'>Đồng hồ</option>" +
        "<option value='cosmetic'>Mỹ phẩm</option>" +
        "<option value='perfume'>Nước hoa</option>" +
        "<option value='lipstick'>Son môi</option>" +
        "</select></td></tr>" +
        "<tr><td></td><td>" +
        "<button onclick='updateForm()'>&emsp;&emsp;" + text + "&emsp;&emsp;</button> " +
        "<button onclick='cancelUpdate()'>&emsp;&emsp;Hủy&emsp;&emsp;</button></td></tr>" +
        "</table>"
    document.getElementById("poster").innerHTML = data
}

function cancelUpdate() {
    document.getElementById("poster").innerHTML = "<img src=\"../image/logo.svg\" alt=\"Lỗi\" width=\"100%\" height=\"100%\">"
}

//edit khi click vào submit form
function updateForm() {
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let image = document.getElementById("image").value
    let category = document.getElementById("category").value
    let i = localStorage.getItem("indexI")
    let j = localStorage.getItem("indexJ")
    switch (category) {
        case "clock": {
            arrClock[i][j] = new Products(name, price, image, category)
            showClock()
            break
        }
        case "cosmetic": {
            arrCosmetic[i][j] = new Products(name, price, image, category)
            showCosmetic()
            break
        }
        case "perfume": {
            arrPerfume[i][j] = new Products(name, price, image, category)
            showPerfume()
            break
        }
        case "lipstick": {
            arrLipstick[i][j] = new Products(name, price, image, category)
            showLipstick()
            break
        }
    }
    cancelUpdate()
}

//edit khi click vào nút edit
function updateProduct(i, j, category) {
    localStorage.setItem("indexI", i)
    localStorage.setItem("indexJ", j)
    switch (category) {
        case "clock": {
            renderUpdate(arrClock[i][j])
            break
        }
        case "cosmetic": {
            renderUpdate(arrCosmetic[i][j])
            break
        }
        case "perfume": {
            renderUpdate(arrPerfume[i][j])
            break
        }
        case "lipstick": {
            renderUpdate(arrLipstick[i][j])
            break
        }
    }
}

function renderUpdate(product) {
    document.getElementById("name").value = product.getName()
    document.getElementById("price").value = product.getPrice()
    document.getElementById("image").value = product.getImage()
    document.getElementById("category").value = product.getCategory()
}
