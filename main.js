'use strict';
var myApp = angular.module('photoStitch',[]);

myApp.controller('TilesCtrl', ['$scope', function($scope) {
   	
   	$scope.tileWidth = 188;
	$scope.tileHeight = 188;
	
	$scope.totalWidth = 625;
	$scope.totalHeight = 725;

	$scope.step = 32;
	//$scope.baseUrl = "http://images2.flashphotography.com/Magnifier/MagnifyRender.ashx?O=26529390&R=10001&F=0144&A=71994&rand=0.5268328574020416"
	//$scope.baseUrl = "http://images2.flashphotography.com/Magnifier/Magnify.aspx?O=26529390&R=10003&F=0141&A=71994"
    $scope.baseUrl = "http://images2.flashphotography.com/Magnifier/Magnify.aspx?O=26529390&R=10006&F=0141&A=71994"
    
    $scope.tiles = [];

    //stitch("26529390","10008","0141","71994");

    function stitch (O,R,F,A) {
    	for(var x=0; x <= $scope.totalWidth ; x+=$scope.step){
    			for(var y=0; y <= $scope.totalHeight ; y+=$scope.step){
    	    		$scope.tiles.push({
    	    			'x': x,
    	    			'y': y,
    	    			top: y - ($scope.tileHeight / 2),
    	    			left: x - ($scope.tileWidth / 2),
    	    			url: "http://images2.flashphotography.com/Magnifier/MagnifyRender.ashx?X="+x+"&Y="+y+"&O="+O+"&R="+R+"&F="+F+"&A="+A
    	    		});
    	    	}    	
    	    }
    }
    
    $scope.$watch("baseUrl", function(O,R,F,A) {
    	var u = $scope.baseUrl.substring($scope.baseUrl.indexOf('?'),$scope.baseUrl.length)
    	var o = p('O',u)
    	var r = p('R',u)
    	var f = p('F',u)
    	var a = p('A',u)
    	stitch(o,r,f,a);
    });

}]);

function p(name,u) {
    return decodeURI((RegExp(name + '=' + '(.+?)(&|$)').exec(u) || [, null])[1]);
}