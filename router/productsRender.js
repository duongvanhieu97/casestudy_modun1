//Lấy tên sản phẩm với hình ảnh với giá với danh sách nhóm sản phẩm
let products = [new Products("",)];

//Hiển thị sản phẩm
// function showProducts() {
//     let data = "";
//     for (let i = 0; i < products.length; i++) {
//         data += "<table id = 'table' >" + "<tr>" + " <td>" + products[i].name + "</td>" + " <td>" + products[i].price + "</td>" + " <td>" + products[i].category + "</td>" + " <td>" + products[i].image + "</td>" + " <td><button>Edit</button></td>" + " <td><button onclick='deleteByIndex(" + i + ")'>Delete</button></td>" + "</tr>"
//     }
//     document.getElementById("listProduct").innerHTML = content;
//     document.getElementById("numberOfProduct").innerText = products.length;
// }
function products(text) {
    let data = ""
    data += "<table id='table'>" +
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
        "<button onclick='editProducts()'>&emsp;&emsp;" + text + "&emsp;&emsp;</button> " +
        "<button onclick='deleteProducts()'>&emsp;&emsp;Delete&emsp;&emsp;</button></td></tr>" +
        "</table>"
    document.getElementById("poster").innerHTML = data
}

// Cái này không biết có thêm vô không.
//kiểm tra xem đã đăng nhập đăng nhập chưa?
function checkLogin() {
    let username = localStorage.getItem("username")
    let data = ""
    if (username === null) {
        data += "<div id='admin'><a href='login.html'>Đăng nhập</a></div>"
        document.getElementById("header").innerHTML = data
        return true;
    } else {
        data += "<div id='admin'><p>Tài khoản: " + username + "</p>" +
            "<a onclick='logout()' href='index.html'>Đăng xuất</a></div>"
        document.getElementById("header").innerHTML = data
        return false;
    }
}

//Đăng xuất
function logout() {
    localStorage.clear()
}