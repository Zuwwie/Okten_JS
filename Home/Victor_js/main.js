function passCreate(length) {
    let pass = [];
    for (let i = 0; i < length; i++) {
        switch (Math.round(random()*3)) {
            case 0:
                let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                pass.push(arr_EN[Math.round(random() * (arr_EN.length - 1))]);
                break
            case 1:
                let arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
                pass.push(arr_symb[Math.floor(random() * (arr_symb.length - 1))]);
                break
            case 2:
                let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
                pass.push(arr_num[Math.round(random() * (arr_num.length - 1))]);
                break
            case 3:
                let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
                pass.push(arr_en[Math.round(random() * (arr_en.length - 1))]);
                break
        }
    }
    return console.log(pass.join(``))
}
let random = function () {
                return Math.random()
}
passCreate(10);
passCreate(10);
passCreate(10);
passCreate(10);


