var app = angular.module("myapp", ["firebase"]);

function MyController($scope, $firebase) {
debugger;
  var ref = new Firebase("https://chatrealtime-a13f1.firebaseio.com/");
  
  $scope.messages = $firebase(ref);
  
  $scope.addMessage = function(e) {
  debugger;
          if (e.keyCode != 13) return;
          $scope.messages.$add({from: $scope.name, body: $scope.msg});
          $scope.msg = "";
   }
}