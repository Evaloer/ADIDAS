<?php
		header("Content-type:text/html;charset=utf-8");

		//1.接收数据
		$username=$_POST['username'];
		$userpass=$_POST['userpass'];

		//创建连接连接数据库
		$conn=mysql_connect('localhost','root','root');

		if(!$conn){
			echo "数据库没有连接成功";
		}else{
			mysql_select_db('adidas',$conn);
				//传输数据
			$sql="select * from ad_table where username='$username' and userpass='$userpass'";
			//执行sql语句
			$result=mysql_query($sql,$conn);

		//关闭数据库
			mysql_close($conn);
			if(mysql_num_rows($result)==1){
				echo"1";
			}else{
				echo"0";
			}
		}
?>