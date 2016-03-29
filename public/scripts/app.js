(function(){
    
    angular
    
    .module('tabApp',[])
    
    .controller('TabCtrl', ["$scope" ,function($scope){
       $scope.tab = 1;
       
       $scope.set = function (num) {
           return $scope.tab = num;
       }
       
       $scope.check = function (num) {
           if ($scope.tab === num) {
               return true;
           }  else {
               return false;
           }         
       }
       
       
    }]);
    
    
    
    
    
    
})();