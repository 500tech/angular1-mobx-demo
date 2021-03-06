import { mobxAutorun } from './mobx-autorun';
import angular from 'angular';
import { ifEnv } from 'directives/if-env';

export default angular.module('NgMobx.directives', [])
  .directive('ifEnv', ifEnv)
  .directive('mobxAutorun', mobxAutorun);
