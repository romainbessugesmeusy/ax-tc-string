import {TCModel, TCString, GVL} from '@iabtcf/core';

/**
 *  the IAB requires CMPs to host their own vendor-list.json files.  This must
 *  be set before creating any instance of the GVL class.
 */
GVL.baseUrl = "http://localhost:5000";
const tcModel = new TCModel(new GVL());
tcModel.cmpId = 123; // Todo change here
tcModel.cmpVersion = 1; // and here if necessary

function dispatchConsent(tcModel) {
    console.info('consent received from Axeptio', TCString.encode(tcModel));
}

window._axcb = window._axcb || [];
window._axcb.push(function onAxeptioSDKReady(sdk) {
    sdk.on('cookies:complete', choices => {
        const allowedVendorIds = [];
        Object.keys(choices).forEach(vendorName => {
            const matches = vendorName.match(/iab_([0-9]+)/);
            if (matches && choices[vendorName]) {
                const vendorId = parseInt(matches[1]);
                if (!isNaN(vendorId)) {
                    tcModel.vendorConsents.set(vendorId);
                }
            }
        });
        dispatchConsent(tcModel);
    })
});
