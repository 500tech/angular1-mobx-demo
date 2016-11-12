import { reaction } from 'mobx';
import { frameworks } from '../../stores/frameworks';

export class HomeController {

  // @ngInject
  constructor($scope) {
    $scope.$on('$destroy', reaction(() => [
      frameworks.filteredItems,
      frameworks.selectedItems,
      frameworks.isAllChecked
    ], angular.noop));
  }
}
