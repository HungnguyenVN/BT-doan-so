function playFunction(){
    let max = prompt("nguoi choi nhap vao khoang choi");
    let luckinumber = prompt('nguoi chu nhap so ngau nhien');
    let guessnumber = prompt(" nguoi choi nhap so du doan");
    count = 0;
    less = 3;
    while (guessnumber != luckinumber && count <3) {
        guessnumber = prompt(" Sai roi, ban con" + less +"lan du doan"+"nguoi choi vui long nhap so du doan");
        count += 1;
        less -= 1;
    }
    if (guessnumber == luckinumber){
    alert('ban la nguoi chien thang');
    }else{
        alert("ban da thua");
    }
}