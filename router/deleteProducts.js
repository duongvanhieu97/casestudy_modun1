// xem có đúng điều kiện category không
function reRender(category) {
    switch (category) {
        case "clock": {
            showClock()
            break
        }
        case "cosmetic": {
            showCosmetic()
            break
        }
        case "perfume": {
            showPerfume()
            break
        }
        case "lipstick": {
            showLipstick()
            break
        }
    }
}
//Xóa products bằng category
//i,j là 2 biến lặp của vòng for
function deleteProduct(i, j, category) {
    switch (category) {
        case "clock": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrClock[i][j].getName() + "?")) {
                arrClock[i].splice(j, 1)
            }
            break
        }
        case "cosmetic": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrCosmetic[i][j].getName() + "?")) {
                arrCosmetic[i].splice(j, 1)
            }
            break
        }
        case "perfume": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrPerfume[i][j].getName() + "?")) {
                arrPerfume[i].splice(j, 1)
            }
            break
        }
        case "lipstick": {
            if (confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrLipstick[i][j].getName() + "?")) {
                arrLipstick[i].splice(j, 1)
            }
            break
        }
    }
    reRender(category)
}