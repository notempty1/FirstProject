function requestMethod(url,par1,par2,par3,callback) {
    var xhr=new XMLHttpRequest();
    // 建立与服务器的链接
    xhr.open(par1,url,par2);
    //设置头信息，告诉服务器以表单的形式传递过去
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
    //第三步：向服务端发送请求
    xhr.send(par3);
    //接收返回的数据
    xhr.onreadystatechange=function(){
        //第四步：接收服务器返回的数据
        if(xhr.readyState == 4 && xhr.status == 200){
            //xhr.readyState == 4 数据请求完成
            //xhr.status==200 数据返回成功
            var responseData=JSON.parse(xhr.responseText);
            callback(responseData);
        }
    }

}