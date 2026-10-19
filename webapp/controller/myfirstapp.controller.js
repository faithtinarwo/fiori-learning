sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "../model/formatter"
], (Controller, MessageToast, formatter) => {
    "use strict";

    return Controller.extend("demo.myfirstapp.controller.myfirstapp", {

        formatter: formatter,

        onCakePress(oEvent) {
            const sId = oEvent.getSource().getBindingContext().getProperty("id");
            MessageToast.show("Clicked: " + sId);
            this.getOwnerComponent().getRouter().navTo("detail", { cakeId: sId });
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

            oModel.setProperty("/cakes/" + iIndex + "/stock", oCake.stock - 1);
            MessageToast.show(oBundle.getText("orderConfirm", [oCake.name]));
        }

    });
});