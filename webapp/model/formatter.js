sap.ui.define([], () => {
    "use strict";

    return {
        stockState(iStock) {
            if (iStock === 0) {
                return "Error";
            }
            if (iStock < 5) {
                return "Warning";
            }
            return "Success";
        }
    };
});