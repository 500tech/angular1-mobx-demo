import { reaction } from 'mobx';

export /* @ngInject */ function mobxAutorun($timeout) {
  return {
    restrict: 'A',
    scope: false,
    link: function($scope) {
      const dispose = reaction(
        () => $scope.$$watchers.map((watcher) => watcher.get($scope)),
        () => $timeout($scope.$digest.bind($scope))
      );
      $scope.$on('$destroy', dispose);
    }
  };
}
