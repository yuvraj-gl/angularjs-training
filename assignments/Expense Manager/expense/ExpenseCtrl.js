/**
 * @desc Controller for the expenses
 * @namespace ExpenseCtrl
 */

(function () {
  'use strict';
  eMApp.controller('ExpenseCtrl', ['$scope',
    function ($scope ) {

      /**
       * @desc Array of expenses object
       * @memberOf ExpenseCtrl
       */
      $scope.expenses = [{
          id : 0,
          payer: 'Yuvi',
          payee: 'Hemant',
          category: 'Rent',
          subCategory: 'sub',
          amount: '2000',
          date: '28/01/16',
          modeOfPayment: 'cash'
        }, {
          id : 1,
          payer: 'Yuvi',
          payee: 'Hemant',
          category: 'Rent',
          subCategory: 'sub',
          amount: '2000',
          date: '28/01/16',
          modeOfPayment: 'cash'
        }, {
          id : 2,
          payer: 'Yuvi',
          payee: 'Hemant',
          category: 'Rent',
          subCategory: 'sub',
          amount: '2000',
          date: '28/01/16',
          modeOfPayment: 'cash'
        }
      ];
    }]);
})();