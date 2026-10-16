/*global QUnit*/

sap.ui.define([
	"demo/myfirstapp/controller/myfirstapp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("myfirstapp Controller");

	QUnit.test("I should test the myfirstapp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
