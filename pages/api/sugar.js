export default function handler(req, res) {
    const sugarData = [
        {
            id: 1,
            name: 'Lugazi Sugar',
            quantity: 5,
            price: 2000,
            country: 'Uganda',
            date: Date.now()
        },

        {
            id: 2,
            name: 'Kabras Sugar',
            quantity: 5,
            price: 322,
            country: 'Kenya',
            date: Date.now()
        },
        {
            id: 3,
            name: 'Mumias Sugar',
            quantity: 5,
            price: 955,
            country: 'Somalia',
            date: Date.now()
        },
        {
            id: 4,
            name: 'Dangote Sugar',
            quantity: 5,
            price: 20100,
            country: 'Nigeria',
            date: Date.now()
        }
    ]
    res.status(200).json(sugarData);
}