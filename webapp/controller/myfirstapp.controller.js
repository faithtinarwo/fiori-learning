sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "../model/formatter"
], (Controller, JSONModel, MessageToast, formatter) => {
    "use strict";

    return Controller.extend("demo.myfirstapp.controller.myfirstapp", {

        formatter: formatter,

        onInit() {
            const oModel = new JSONModel({
                orderName: "",
                cakes: [
                    { name: "Vanilla", price: 45, stock: 12 },
                    { name: "Chocolate", price: 55, stock: 3 },
                    { name: "Red Velvet", price: 65, stock: 0 }
                ]
            });
            this.getView().setModel(oModel);
        },

        onOrderCake() {
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sCake = this.getView().getModel().getProperty("/orderName");
            MessageToast.show(
                oBundle.getText("orderConfirm", [sCake || oBundle.getText("surprise")])
            );
        }

    });
});