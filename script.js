var app=angular.module('myApp',['ui.router']);

app.config(['$stateProvider',function($stateProvider){

  $stateProvider
  .state('announcements',{
    url:'/announcements/:a',
    templateUrl:'announcement.html',
    controller:'announcementsCtrl'
  })
  .state('home',{
    url:'/',
    template:"Home Page"
  })
  .state('otherwise',{
    url:"*path",
    template:"404 error page"
  });


}]);

app.service('transporterService', function() {
  var List = [];

  this.addList = function(newList) {
      List.push(newList);
  };
  this.getList = function(){
      return List;
  };
});


app.controller('announcementsCtrl',['$scope','$stateParams','transporterService',function($scope,$stateParams,transporterService){

  $scope.announcementId=$stateParams.a;

  $scope.List=transporterService.getList();

  $scope.List2 = $scope.List[0].find(i => i.id == $scope.announcementId);

}]);

app.controller('myCtrl',['$scope','transporterService',function($scope,transporterService){

$scope.announcements=[
  {id:1,title:'announcement1',content:'Content1'},
  {id:2,title:'announcement2',content:'Content2'},
  {id:3,title:'announcement3',content:'Content3'}
];

transporterService.addList($scope.announcements);

}]);
