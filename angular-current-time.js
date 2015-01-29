 (function(window, angular, undefined) {'use strict';
/**
 *  @module currentTime
 *
 *  @description Displays continuously the current time in the given format
 *
 *  @usage <h5 current-time="'dd/MM/yyyy HH:mm'"/>
 */
    angular.module('currentTime', [])
        .directive("currentTime", function(dateFilter) {
            return function(scope, element, attrs) {
                var format;

                scope.$watch(attrs.currentTime, function(value) {
                    format = value;
                    updateTime();
                });

                function updateTime() {
                    var dt = dateFilter(new Date(), format);
                    element.text(dt);
                }

                function updateLater() {
                    setTimeout(function() {
                        updateTime(); // update DOM
                        updateLater(); // schedule another update
                    }, 1000);
                }

                updateLater();
            }
        })
})(window, window.angular);