var xmlHttpRequest;
function checkUserExists(oCtl) {
	var uname = oCtl.value;
	if (uname == "" || uname == null) {
		alert("用户名不能为空");
		oCtl.focus();
		return false;
	}
	doRequest(uname);
}
function createXMLHttpRequset() {
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest();
	} else if (window.ActiveXObject) {
		try {
			return new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				return new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
			}
		}
	}
}
function doRequest(uname) {
	// 请求字符串
	var url = "UserServlet?uname=" + uname;
	// 1.创建xmlHttpRequest组件
	xmlHttpRequest = createXMLHttpRequset();
	// 2.设置回调函数
	xmlHttpRequest.onreadystatechange = haoLeJiaoWo;
	// 3.初始化xmlHttpRequest组件
	xmlHttpRequest.open("GET", url, true);
	// 4.发送请求
	xmlHttpRequest.send(null);
}
function haoLeJiaoWo() {

	// 0: 请求未初始化
	// 1: 服务器连接已建立
	// 2: 请求已接收 接收到了响应头
	// 3: 请求处理中 正在下载响应体
	// 4: 请求已完成，且响应已就绪

	if (xmlHttpRequest.readyState == 4) {
		if (xmlHttpRequest.status == 200) {
			var b = xmlHttpRequest.responseText;
			if (b == "true") {
				alert("用户名已存在");
			}else{
				document.getElementById("spanBlock").innerHTML = "用户名可用";
			}
		} else {
			alert("您请求的页面有异常");
		}
	}
}


function  clsuser() {

}