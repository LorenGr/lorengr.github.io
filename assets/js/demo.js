angular.module("flatstrapDemo",[
	"flatstrap",
	"ui.bootstrap"
]).controller("flatgridController",function($scope,$q){

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
				Form : 		"input"
			},
			{
				Name : 		"Company",
				Label : 	"Company",
				Sortable  : true,
				Form : 		"input"
			}
		],
		options : {
			 onsave : "saveItem"
			,onadd : "addItem"
			,ondelete : "deleteItem"
			,title  : "Basic Demo"
		}
	}

	$scope.flatgridOptsFormTypes = {
		"rows" : [
			{
				"Id"      : "1",
				"Event"   : "Jazz Festival",
				"SoldOut" : true,
				"Date"    : "2012-09-02T09:11:43Z"
			},
			{
				"Id"      : "2",
				"Event"   : "Annual Veterans Reunion",
				"SoldOut" : false,
				"Date"    : "2013-01-19T08:00:00Z"
			},
			{
				"Id"      : "3",
				"Event"   : "Salsa Dancing Show",
				"SoldOut" : false,
				"Date"    : "2013-12-24T00:00:00Z"
			},
			{
				"Id"      : "4",
				"Event"   : "Rock Festival",
				"SoldOut" : true,
				"Date"    : "2013-08-10T11:00:00Z"
			}

		],
		"columns" : [
			{
				Name       : "Event",
				Label      : "Event Name",
				Sortable   : true,
				AutoFocus  : true,
				Editable   : false,
				Form       : "input"
			},
			{
				Name       : "Date",
				Label      : "Event Date",
				Sortable   : true,
				Form       : "datetime"
			},
			{
				Name       : "SoldOut",
				Label      : "Sold Out",
				Sortable   : true,
				Form       : "checkbox"
			}
		],
		options : {
			 onsave : "saveItem"
			,onadd : "addItem"
			,ondelete : "deleteItem"
			,title    : "Form Types Demo"
			,controls : false
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