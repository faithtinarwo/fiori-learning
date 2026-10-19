sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "demo/myfirstapp/model/models"
], (UIComponent, JSONModel, models) => {
    "use strict";

    return UIComponent.extend("demo.myfirstapp.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // the shared data for every view (the default model)
            this.setModel(new JSONModel({
                orderName: "",
                cakes: [
                    { id: "vanilla", name: "Vanilla", price: 45, stock: 12 },
                    { id: "chocolate", name: "Chocolate", price: 55, stock: 3 },
                    { id: "red-velvet", name: "Red Velvet", price: 65, stock: 0 }
                ]
            }));

            // enable routing
            this.getRouter().initialize();
        }
    });
});