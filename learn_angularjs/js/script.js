angular.module('myApp',['drag','double','spicyApp','scopeInhertance','model','myServiceModule','expressionExample','ExampleController1','docsScopeProblemExample','controller1','docsTabsExample']);
angular.module('drag',[]).directive('draggable',function($document){
    // console.log($document);//html
    return function(scope,element,attr){
        // console.log(scope);
        // console.log(element);//具有draggable属性的元素
        // console.log(attr);
        var x=element[0].offsetLeft,y=element[0].offsetTop,startX=0,startY=0;
        // console.log(x);
        // console.log(y);
        element.on('mousedown',function(e){
            e.preventDefault();
            startX=e.screenX-x;
            startY=e.screenY-y;
            $document.on('mousemove',mousemove);
            $document.on('mouseup',mouseup);
        });
        function mousemove(e){
            x=e.screenX-startX;
            y=e.screenY-startY;
            element.css({
                left:x+'px',
                top:y+'px'
            })
        };
        function mouseup(){
            $document.unbind('mousemove',mousemove);
            $document.unbind('mouseup',mouseup);
        }
    }
});
angular.module('double',[]).controller('DoubleCtrl',function($scope){
    $scope.double=function(value){
        return value*2;
    }
});
angular.module('spicyApp',[]).controller('SpiceCtrl',function($scope){
    $scope.spice='vary';
    $scope.customSpicy='grece';
    $scope.spicy=function(spice){
        $scope.spice=spice;
    };
    // $scope.jalapeno=function(){
    //     $scope.spicy='Jalapeno';
    // }
});
angular.module('scopeInhertance',[]).controller('MainCtrl',function($scope){
    // $scope.time='Morning';
    // $scope.name='father';
    $scope.time=function(){
        return 'Morning';
    };
    $scope.name=function(){
        return 'father';
    }
}).controller('ChildCtrl',function($scope){
    // $scope.time='afternoon';

    // $scope.name='child';
    $scope.name=function(){
        return 'child';
    }
}).controller('GrandChildCtrl',function($scope){
    // $scope.time='afternoon';
    // $scope.name='grandchild';

    $scope.time=function(){
        return 'afternoon';
    };
    $scope.name=function(){
        return 'grandchild';
    }
});
// describe('controller',function(){
//     var spicyScope,mainScope,childScope,grandchildScope;
//     beforeEach(module('myApp'));
//     beforeEach(inject(function($rootScope,$controller){
//         console.log($rootScope);
//         console.log($controller);
//     }))
// })

angular.module('model',[]).controller('ModelController',function($scope){
    $scope.username='xml';
    $scope.sayHello=function(){
        $scope.greeting='hello '+$scope.username;
    }
})

angular.module('myServiceModule', []).
 controller('MyController', ['$scope', 'notify', function($scope, notify) {
   $scope.callNotify = function(msg) {
     notify(msg);
   };
 }]).
factory('notify', ['$window', function(win) {
    console.log(win);
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length === 3) {
       win.alert(msgs.join('\n'));
       msgs = [];
     }
   };
 }]);

 angular.module('expressionExample', [])
.controller('ExampleController', ['$scope', function($scope) {
  var exprs = $scope.exprs = [];
  $scope.expr = '3*10|currency';
  $scope.test=$scope.$eval($scope.expr);
  console.log($scope.test);
  $scope.addExp = function(expr) {
    exprs.push(expr);
  };

  $scope.removeExp = function(index) {
    exprs.splice(index, 1);
  };
}]);


var INTEGER_REGEXP = /^-?\d+$/;
angular.module('ExampleController1',[]).controller('ExampleController1',function($scope){
    $scope.master = {};


    $scope.user={};
    $scope.user.email='ff';
    $scope.update = function(user) {
        $scope.master = angular.copy(user);
    };

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reg1=new RegExp('[abc]');
    $scope.regTest="";

    $scope.testContext=function(){
        console.log(this);
        console.log($locals);
    }

    // $scope.reset();
}).directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function(modelValue, viewValue) {
        //   if (ctrl.$isEmpty(modelValue)) {
        //     // consider empty models to be valid
        //     return true;
        //   }
  
          if (INTEGER_REGEXP.test(viewValue)) {
            // it is valid
            return true;
          }
  
          // it is invalid
          return false;
        };
      }
    };
  }).directive('username', function($q, $timeout) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
  
        ctrl.$asyncValidators.username = function(modelValue, viewValue) {
  
        //   if (ctrl.$isEmpty(modelValue)) {
        //     // consider empty model valid
        //     return $q.resolve();
        //   }
  
          var def = $q.defer();
  
          $timeout(function() {
            // Mock a delayed response
            if (usernames.indexOf(modelValue) === -1) {
              // The username is available
              def.resolve();
            } else {
              def.reject();
            }
  
          }, 2000);
  
          return def.promise;
        };
      }
    };
  });


  angular.module('docsScopeProblemExample', [])
  .controller('NaomiController', ['$scope','$window', function($scope,$window) {
    $scope.customer1 = {
      address: '1600 Amphitheatre'
    };
    Object.defineProperty($scope.customer1,'name',{
      writable:false,
      value:'customer1'
    });

    $scope.customer2={
      name:'customer2',
      address:'customer2 address'
    };

    $scope.custom="custom";
  }])
//   .controller('IgorController', ['$scope', function($scope) {
//     $scope.customer = {
//       name: 'Igor',
//       address: '123 Somewhere'
//     };
//   }])
  .directive('myCustomer', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-customer.html',
      scope:{
        customer:'=',
        custom:'@'
      }
    };
  });

  angular.module('controller1',[]).controller('Controller1', ['$scope', function($scope) {
    $scope.format = 'M/d/yy h:mm:ss a';
  }])
  .directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
  
    function link(scope, element, attrs) {
      var timeoutId;
  
      function updateTime() {
        //   console.log(scope);
        element.text(dateFilter(new Date(), scope.format));
      }
  
    //   scope.$watch(attrs.myCurrentTime, function(value) {
    //     format = value;
    //     updateTime();
    //   });
  
      element.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });
  
      // start the UI update process; save the timeoutId for canceling
      timeoutId = $interval(function() {
        updateTime(); // update DOM
      }, 1000);
    }
  
    return {
      link: link
    };
  }]);


  angular.module('docsTabsExample', [])
.directive('myTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function MyTabsController($scope) {
      var panes = $scope.panes = [];
      console.log(this);

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };

      this.addPane = function(pane) {
        if (panes.length === 0) {
          $scope.select(pane);
        }
        panes.push(pane);
        console.log($scope);
      };
    }],
    templateUrl: 'my-tabs.html'
  };
})
.directive('myPane', function() {
  return {
    require: '^^myTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
        console.log(scope);
      tabsCtrl.addPane(scope);
    },
    templateUrl: 'my-pane.html'
  };
});

  