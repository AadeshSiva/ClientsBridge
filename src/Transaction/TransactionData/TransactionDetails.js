const initialState = [
    {
        id: 1,
        name: 'Spotify Subscription',
        number: '#12548796',
        category: 'Shopping',
        card: '1234 ****',
        date: '28 Jan, 12.30 AM',
        status: 'up',
        color: 'rgb(0, 195, 0)',
    },
    {
        id: 2,
        name: 'Kubert Subscription',
        number: '#982548796',
        category: 'Shopping',
        card: '1234 ****',
        date: '29 Jan, 12.30 AM',
        status: 'down',
        color: 'red',
    },
];

// Reducer
export const TransReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
