const db = require('../config/database');



module.exports = {
    index: (req, res) => {

        res.render('home')
    },


    htmlElements: (req, res) => {



        res.render(`htmlelements`);

    },
    employees: (req, res) => {



        res.render(`employees`);

    },
    invoices: (req, res) => {

        var data = [
            {
                "rowID": "1",
                "description": 'lorem insadsadsadasdasda',
                "MPK": "IT",
                "Knetto": 25.99,
                "Ilosc": 5,
                "VAT": '0%',
                "Kbrutto": 32.90,
                "Wnetto": 120,
                "WBrutto": 250

            },
            {
                "rowID": "2",
                "description": 'lorem insadsadsadasdasda',
                "MPK": "IT",
                "Knetto": 25.99,
                "Ilosc": 5,
                "VAT": '0%',
                "Kbrutto": 32.90,
                "Wnetto": 120,
                "WBrutto": 250
            }


        ]


        res.render(`invoices`, {
            payload: data
        });

    },

    delegats: async (req, res) => {

        let data = await db.promise().query(`
        SELECT 
            CONCAT(imie, " ", nazwisko) AS FullName,
            DATE_FORMAT(dataod, "%d/%m/%Y") AS dataod,
            DATE_FORMAT(dataod, "%d/%m/%Y") AS datado,
            miejsceod,
            miejscedo
        from delegats `);

        if (!data) {
            res.redirect('/')
        }
        else {
            console.log(data[0]);
            res.render(`delegats`, {
                payload: data[0]
            });
        }

    },
    clients: async (req, res) => {

        let data = await db.promise().query(`
        SELECT
            Id, 
            NIP,
            REGON,
            Nazwa,
            VAT,
            Ulica,
            NumerDomu,
            NumerMieszkania
        from clients `);

        if (!data) {
            res.redirect('/')
        }
        else {
            console.log(data[0]);
            res.render(`clients`, {
                payload: data[0]
            });
        }
      

    },
}