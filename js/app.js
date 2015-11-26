/**
 * Created by Deepankar Agrawal on 05-11-2015.
 */
var OsidisApp = angular.module('OsidisApp', ['ngRoute']); //dependency



//Loading Directive
OsidisApp.directive('showDuringResolve', function($rootScope) {

    return {
        link: function(scope, element) {

            element.addClass('ng-hide');

            var unregister = $rootScope.$on('$routeChangeStart', function() {
                element.removeClass('ng-hide');
            });

            scope.$on('$destroy', unregister);
        }
    };
});


//route locations in Angular
OsidisApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/',{
               templateUrl: 'splash.html'
            }).
            when('/Start', {
                templateUrl: 'mainLayout.html'
            }).
            otherwise({
                redirectTo: '/Lost',
                templateUrl: '404.html'
            });
    }]);