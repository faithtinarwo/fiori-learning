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
        const oModel = this.getView().getModel();
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sName = (oModel.getProperty("/orderName") || "").trim();

        if (!sName) {
            MessageToast.show(oBundle.getText("orderEmpty"));
            return;
        }

        const aCakes = oModel.getProperty("/cakes");
        const iIndex = aCakes.findIndex(
            (oCake) => oCake.name.toLowerCase() === sName.toLowerCase()
        );

        if (iIndex === -1) {
            MessageToast.show(oBundle.getText("orderUnknown", [sName]), { duration: 5000 });
            return;
        }

        const oCake = aCakes[iIndex];

        if (oCake.stock <= 0) {
            MessageToast.show(oBundle.getText("orderOutOfStock", [oCake.name]), { duration: 5000 });
            return;
        }

        if (oCake.stock <= 0) {
            MessageToast.show(oBundle.getText("orderOutOfStock", [oCake.name]));
            return;
        }

        oModel.setProperty("/cakes/" + iIndex + "/stock", oCake.stock - 1);
        MessageToast.show(oBundle.getText("orderConfirm", [oCake.name]));
    }

    });
});