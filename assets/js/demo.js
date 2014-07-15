var app = angular.module("flatstrap-demo",[]);

app.controller("flatgrid-basic",function(){
	$scope.gridOptions = {
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
});