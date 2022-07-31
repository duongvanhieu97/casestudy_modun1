//Tạo sản phẩm mới
// function createProducts() {
//     let name = document.getElementById('name').value;
//     let price = document.getElementById('price').value;
//     let image = document.getElementById('image').value;
//     let category = document.getElementById('category').value;
//     if (name === "" || name === null ) {
//         alert('Bạn cần phải nhập lại thông tin đẩy đủ và chính xác')
//     }else {
//         let create = new Products(name, price, image, category);
//         switch (category) {
//             case "clock": {
//                 // console.log(arrClock)
//                 showClock()
//                 arrClock.push([create])
//                 // console.log(arrClock)
//                 break
//             }
//             case "cosmetic": {
//                 arrCosmetic.push([create])
//                 break
//             }
//             case "perfume": {
//                 arrPerfume.push([create])
//                 break
//             }
//             case "lipstick": {
//                 arrLipstick.push([create])
//                 break
//             }
//         }
//     }
//     showProducts()
//     clearCreateProducts()
//
// }
function createProducts() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('image').value;
    let category = document.getElementById('category').value;
    let i = localStorage.getItem("indexI")
    let j = localStorage.getItem("indexJ")
    if (name === "" || name === null ) {
        alert('Bạn cần phải nhập lại thông tin đẩy đủ và chính xác')
    }else {
        let create = new Products(name, price, image, category);
        switch (category) {
            case "clock": {
                // console.log(arrClock)
                arrClock.push([create])
                showClock()

                // console.log(arrClock)
                break
            }
            case "cosmetic": {
                arrCosmetic.push([create])
                break
            }
            case "perfume": {
                arrPerfume.push([create])
                break
            }
            case "lipstick": {
                arrLipstick.push([create])
                break
            }
        }
    }
    showProducts()
    clearCreateProducts()

}

//clear table khi tạo bảng xong
function clearCreateProducts() {
    document.getElementById('name').value = " ";
     document.getElementById('price').value = " ";
    document.getElementById('image').value = " ";
     document.getElementById('category').value = " ";

}