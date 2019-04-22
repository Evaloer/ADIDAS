<?php
		header("Content-type:text/html;charset=utf-8");

		//1.接收数据
		$username=$_GET['username'];
		$userpass=$_GET['userpass'];
		//创建连接连接数据库
		$conn=mysql_connect('localhost','root','root');

		if(!$conn){
			echo "数据库没有连接成功";
		}else{
			mysql_select_db('adidas',$conn);
				//传输数据
			$sql1 = "select * from ad_table where username='$username'";
			$result1=mysql_query($sql1,$conn);

			if(mysql_num_rows($result1)>0){
				mysql_close($conn);
				echo 2;
			}else{
				$sql="insert into ad_table(username,userpass)values('$username','$userpass')";
				$result=mysql_query($sql,$conn);
				mysql_close($conn);
				if($result==1){
					echo 1;
				}else{
					echo 0;
				}
			}
		}
?>