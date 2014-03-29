'use strict';
angular.module('quickApp')
	.factory('Hellow', function ($resource) {

		return $resource('/api/hellow');

	});
