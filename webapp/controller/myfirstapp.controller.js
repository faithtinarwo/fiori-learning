sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("demo.myfirstapp.controller.myfirstapp", {

        onInit() {
        },

        onOrderCake() {
            const sCake = this.byId("cakeInput").getValue();
            MessageToast.show("Your " + (sCake || "surprise") + " cake is ordered!");
        }

    });
});