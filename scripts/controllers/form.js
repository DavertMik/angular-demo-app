'use strict';

/**
 * @ngdoc function
 * @name testAppJsonApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the testAppJsonApp
 */
angular.module('testAppJsonApp')
  .controller('FormCtrl', function($location, $timeout, $scope, $cookies, formResult) {
    var vm = this;
    vm.model = {};

    vm.getOpts = function() {
      $location.path('/options');
    }

    vm.options = {};
    vm.htmlEditor = '...';
    var myConfig = [{
        key: 'name',
        type: 'input',
        templateOptions: {
          label: 'Name',
          placeholder: 'Please enter a name',
          description: '',
          required: true,
          maxlength: 50,
          minlength: 2
        }
      }, {
        key: 'description',
        type: 'textarea',
        templateOptions: {
          label: 'Description',
          placeholder: '',
          description: '',
          maxlength: 1000,
          minlength: 2
        }
      },
      {
          key: 'date',
          type: 'datepicker',
          templateOptions: {
            label: 'Date of Event',
            type: 'text',
            datepickerPopup: 'dd-MMMM-yyyy'
          }
        }, {
          key: 'htmldesc',
          type: 'custom',
          templateOptions: {
            label: 'HTML Description'
          }
        },

      {
        key: 'for',
        type: 'multiCheckbox',
        templateOptions: {
          label: 'Interesting for',
          options: [{
            id: 'developers',
            name: '1112',
            title: "Web-Developers"
          }, {
            id: 'designers',
            title: "Designers",
            name: 'designers'
          }],
          valueProp: 'id',
          labelProp: 'title'
        }
      }, {
        "key": "price",
        "type": "radio",
        "templateOptions": {
          "label": "Price",
          "options": [{
            "name": "Free",
            "value": "0"
          }, {
            "name": "Cheap <10$",
            "value": "<10"
          },
          {
            "name": "Normal <100$",
            "value": "<100"
          },
          {
            "name": "Exclusive >100$",
            "value": "100+"
          }]
        }
      },
      {
        key: 'speaker1',
        type: 'select',
        templateOptions: {
          label: 'Guest Speaker',
          options: [{
            name: 'Iron Man',
            value: 'iron_man'
          }, {
            name: 'Captain America',
            value: 'captain_america'
          }, {
            name: 'Black Widow',
            value: 'black_widow'
          }, {
            name: 'Hulk',
            value: 'hulk'
          }, {
            name: 'Captain Marvel',
            value: 'captain_marvel'
          }]
        }
      }, {
        key: 'speaker2',
        type: 'select',
        templateOptions: {
          label: 'Speaker',
          options: [{
            name: 'Iron Man',
            value: 'iron_man',
            group: 'Male'
          }, {
            name: 'Captain America',
            value: 'captain_america',
            group: 'Male'
          }, {
            name: 'Black Widow',
            value: 'black_widow',
            group: 'Female'
          }, {
            name: 'Hulk',
            value: 'hulk',
            group: 'Male'
          }, {
            name: 'Captain Marvel',
            value: 'captain_marvel',
            group: 'Female'
          }]
        }
      }, {
        type: 'btnPOST',
        templateOptions: {
          onClick: SimplePost,
          text: 'submit'
        }
      }
    ];

    function SimplePost() {
      vm.wait = 'Please wait';
      formResult.resultSave(vm.model);
      $timeout(function() {
         $location.path('/result');
      }, 2000);
    }

    function SimpleDelete() {
      //$http.delete('url');
    }
    vm.fields = myConfig;
    vm.result = formResult.load();


  });
