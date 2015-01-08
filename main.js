'use strict';
var myApp = angular.module('photoStitch',[]);

myApp.controller('TilesCtrl', ['$scope', function($scope) {
   	
   	$scope.tileWidth = 188;
	$scope.tileHeight = 188;
	
	$scope.totalWidth = 625;
	$scope.totalHeight = 725;

	//$scope.baseUrl = "http://images2.flashphotography.com/Magnifier/MagnifyRender.ashx?O=26529390&R=10001&F=0144&A=71994&rand=0.5268328574020416"
    $scope.baseUrl = "http://images2.flashphotography.com/Magnifier/MagnifyRender.ashx?O=26529390&R=10008&F=0141&A=71994&rand=0.28094600001350045"
    
    $scope.tiles = [];

    stitch();
    function stitch () {
    	for(var x=0; x <= $scope.totalWidth ; x+=$scope.tileWidth){
    			for(var y=0; y <= $scope.totalHeight ; y+=$scope.tileHeight){
    	    		$scope.tiles.push({
    	    			'x': x,
    	    			'y': y,
    	    			top: y - ($scope.tileHeight / 2),
    	    			left: x - ($scope.tileWidth / 2),
    	    			url: $scope.baseUrl+"&X="+x+"&Y="+y
    	    		});
    	    	}    	
    	    }
    }
    
    $scope.$watch("baseUrl", function() {
    	stitch();
    });

}]);