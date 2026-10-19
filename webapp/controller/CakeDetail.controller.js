sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "../model/formatter"
], (Controller, History, formatter) => {
    "use strict";

    return Controller.extend("demo.myfirstapp.controller.CakeDetail", {

        formatter: formatter,

        onInit() {
            this.getOwnerComponent().getRouter()
                .getRoute("detail")
                .attachPatternMatched(this._onRouteMatched, this);
        },

        _onRouteMatched(oEvent) {
            const sId = oEvent.getParameter("arguments").cakeId;
            const aCakes = this.getView().getModel().getProperty("/cakes");
            const iIndex = aCakes.findIndex((oCake) => oCake.id === sId);

            if (iIndex === -1) {
                this.getOwnerComponent().getRouter().navTo("list", {}, true);
                return;
            }

            this.getView().bindElement("/cakes/" + iIndex);
        },

        onNavBack() {
            if (History.getInstance().getPreviousHash() !== undefined) {
                window.history.go(-1);
            } else {
                this.getOwnerComponent().getRouter().navTo("list", {}, true);
            }
        }

    });
});