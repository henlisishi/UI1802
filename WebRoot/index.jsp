<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">
		<title>用户注册</title>
		<script type="text/javascript" src="ajax.js"></script>

		<!-- <script type="text/javascript">
    	     function checkUserExists(oCtl){
			    var uname = oCtl.value;
			    if(uname ==""||name==null){
			        alert("用户名不能为空");
					oCtl.focus();
				    return false;
			    }
			//发送请求到服务器，判断用户名是否存在
		    //...Ajax here...
			}
    	
    </script> -->
	</head>

	<body>
	<h3>
		用户注册：
	</h3>
	<hr />
	<form action="MyJsp.jsp">
	用户姓名：
	<input type="text" name="username" value="" onclick="clsuser();" onblur="return checkUserExists(this)" />
	<span id="spanBlock"></span>
	<br>
	用户密码：
	<input type="password" name="userpass" value="" current-password="" />
	<br>
	<input type="button" name="sub" value="注册" />
	<input type="submit" value="提交">
	</form>
	<br>
	</body>
</html>
