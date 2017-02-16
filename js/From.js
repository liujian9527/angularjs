var userInfoModule=angular.module('UserInfoModule',[]);
userInfoModule.controller('UserInfoCtrl',['$scope',function($scope){
	$scope.userInfo={
		email:"825588053@qq.com",
		password:"1234567890",
		autoLogin:true,
		color:"red"
	}
	
	$scope.getFormData=function(){
		console.log($scope.userInfo)
	}
	
	$scope.setFormData=function(){
		$scope.userInfo={
			email:"2312128762@qq.com",
			password:"1234567890",
			autoLogin:false
		}
	}
	
	$scope.resetFormData=function(){
		$scope.userInfo={
			email:"",
			password:"",
			autoLogin:false
		}
	}
	
	$scope.setFormCss=function(){
		$scope.userInfo={
			email:"2312128762@qq.com",
			password:"1234567890",
			autoLogin:false,
			color:"green"
		}
	}
	
}])



var myCSSModule=angular.module('MyCSSModule',[]);
myCSSModule.controller('CSSCtrl',['$scope',function($scope){
	$scope.color="red";
	$scope.setGreen=function(){
		$scope.color="green";
	}
}])

myCSSModule.controller('DeathrayMenuController',['$scope',function($scope){
	$scope.menuState={
		show:"false"
	};
	$scope.toggleMenu=function(){
		$scope.menuState.show= !$scope.menuState.show;
	}
}])


