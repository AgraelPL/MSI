
module.exports = {
    invoices:()=>{        
        var data = [
            {
                "rowID": "1",
                "description": 'Monitor dla Tomka',
                "MPK": "IT",
                "Knetto": 15.98,
                "Ilosc": 5,

            },
            {
                "rowID": "2",
                "description": 'Klawiatura dla Michała',
                "MPK": "IT",
                "Knetto": 25.99,
                "Ilosc": 2,
                "VAT": '0%',

            },
            {
                "rowID": "3",
                "description": 'Telefon dla Pauliny',
                "MPK": "IT",
                "Knetto": 100.99,
                "Ilosc": 10,
                "VAT": '0%',

            },
            {
                "rowID": "4",
                "description": 'Biurko dla przemka',
                "MPK": "IT",
                "Knetto": 59.02,
                "Ilosc": 7,
                "VAT": '0%',

            }
        ]
        
        return data;
    }
}