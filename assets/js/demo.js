angular.module("flatstrapDemo",["flatstrap","ui.bootstrap"]);

angular.module("flatstrapDemo").controller("flatgridBasic",function($scope,$q){

	$scope.flatgridOptsBasic = {
		"rows" : [
			{
	            "Id" : "1"
	            ,"Name" : "Steve"
	            ,"Surname" : "Jobs"
	            ,"Company" : "Apple"
	        },	        
	        {
	            "Id" : "2"
	            ,"Name" : "Bill"
	            ,"Surname" : "Gates"
	            ,"Company" : "Microsoft"
	        },
	        {
	            "Id" : "3"
	            ,"Name" : "Larry"
	            ,"Surname" : "Page"
	            ,"Company" : "Google"
	        },
	        {
	            "Id" : "4"
	            ,"Name" : "Mark"
	            ,"Surname" : "Zuckerberg"
	            ,"Company" : "Facebook"
	        }
		],
		"columns" : [			
			{
				Name : 		"Name",
				Label : 	"First Name",
				Sortable  : true,
				AutoFocus : true,
				Form : 		"input"
			},
			{
				Name : 		"Surname",
				Label : 	"Surname / Last Name",
				Sortable  : true,
				AutoFocus : true,
				Form : 		"input"
			},
			{
				Name : 		"Company",
				Label : 	"Company",
				Sortable  : true,
				AutoFocus : true,
				Form : 		"input"
			}
		],
		options : {
			 onsave : "saveItem"
			,onadd : "addItem"
			,ondelete : "deleteItem"
		}
	}

    $scope.addItem = function(pkg) {
        var p = $q.defer();
        p.resolve(pkg.data);
        return p.promise;
    }
    $scope.saveItem = function(pkg) {
        var p = $q.defer();
        p.resolve(pkg.data);
        return p.promise;
    }
    $scope.deleteItem = function(pkg) {
        var p = $q.defer();
        p.resolve(null);
        return p.promise;
    }


});