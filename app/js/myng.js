var myApp = angular.module('myApp', []);

myApp.controller('MainController', function($http) {
	var self = this;
	this.item = "";
	this.items = [];
	
	$http.get('assets/demo.json').success(function(response) {
		var str = "";
		angular.forEach(response, function(value, key) {
			this.push(value);
		}, self.items);
		
		$("#json").val(JSON.stringify(self.items));	
	});
	
	
	
	

	this.addItem = function() {
		this.items.push($('#item').val());
		$('#item').val("");
		$("#json").val(JSON.stringify(self.items));	
		
	};
	
	this.loadJson = function() {
		var val = $('#json').val().replace(/"/g, '').replace('[', '').replace(']','');
		console.log(val);
		self.items = val.split(",");
		
	};
	this.deleteItem =function(i) {
		console.log(i);
		self.items.splice(i, 1);
	};
	
	
});

myApp.directive('tableItems', function() {
	return {
		restrict: 'AE',
		templateUrl: 'directives/tableitems.html',
		replace: true		
	};
});