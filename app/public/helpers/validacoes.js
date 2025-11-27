function valTel(tel) {
    if(tel == '') return false;

    if (tel.length != 11)
        return false;

    if (tel == "000000000" || 
        tel == "111111111" || 
        tel == "222222222" || 
        tel == "333333333" || 
        tel == "444444444" || 
        tel == "555555555" || 
        tel == "666666666" || 
        tel == "777777777" || 
        tel == "888888888" || 
        tel == "999999999")
        return false;
}
