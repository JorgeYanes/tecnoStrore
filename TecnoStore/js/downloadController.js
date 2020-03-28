'use strict';

function downloadController() {
    var ctrl = this;
    ctrl.img = 'img/';
    ctrl.apkList = [{
            name: 'whatsapp',
            version: '2.20.64',
            support: '4.0'
        },
        {
            name: 'messenger',
            version: '234.0.0.9',
            support: '5.0'
        }
    ];
};

angular
    .module('tecnoStore')
    .controller('downloadController', downloadController);