//tạo chức năng tìm kiếm
function search() {
    let search = document.getElementById('search').value;

    //lấy ra products
    let list  = showClock()
    for (let j = 0; j < list.length  ; j++) {
        let str = list[i].name;
        if (str.includes(search) ) {
            return true
        }else  {
            return  false
        }
    }
}
