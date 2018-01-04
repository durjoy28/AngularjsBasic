var app1=angular.module('module1',[]);
app1.controller('cntrl1',function($scope,$timeout){
	var mydatas=[{name:'sharifur rahman',salary:200000,age:25},{name:'Rakib',salary:250000,age:24}]
	$scope.mydatas=mydatas;
	var myData={ name:"Durjoy",age:35}
	$scope.myData=myData;
		$scope.employees=employees;
		$scope.var1="Bangladesh";
		$timeout(function(){
           $scope.var1="India";
		},3000);
	});
	