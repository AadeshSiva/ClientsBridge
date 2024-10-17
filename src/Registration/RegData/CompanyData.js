import cdp from '../../assets/image/companyicon.svg'


const companyData = [
    { id: 1, image: cdp, cname: "Google", type: "Incorporated", phone: "9897654326", email: "contact@google.com" },
    { id: 2, image: cdp, cname: "Apple", type: "Incorporated", phone: "9876543210", email: "contact@apple.com" },
    { id: 3, image: cdp, cname: "Microsoft", type: "Incorporated", phone: "9765432109", email: "contact@microsoft.com" },
    { id: 4, image: cdp, cname: "Amazon", type: "Incorporated", phone: "9654321098", email: "contact@amazon.com" },
    { id: 5, image: cdp, cname: "Facebook", type: "Incorporated", phone: "9543210987", email: "contact@facebook.com" },
    { id: 6, image: cdp, cname: "Twitter", type: "Incorporated", phone: "9432109876", email: "contact@twitter.com" },
    { id: 7, image: cdp, cname: "Tesla", type: "Incorporated", phone: "9321098765", email: "contact@tesla.com" },
    { id: 8, image: cdp, cname: "Netflix", type: "Incorporated", phone: "9210987654", email: "contact@netflix.com" },
    { id: 9, image: cdp, cname: "Spotify", type: "Incorporated", phone: "9109876543", email: "contact@spotify.com" },
    { id: 10, image: cdp, cname: "Snapchat", type: "Incorporated", phone: "9098765432", email: "contact@snapchat.com" }
];

export const companyReducer = (state = companyData, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
