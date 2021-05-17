const db = require('../config/database');

module.exports = {
    addClient: (req, res) => {

        function checkVatStatus(a) {
            if (a != null) {
                return 1;
            }
            else {
                return 0;
            }
        }

        const data = {
            NIP: req.body.NIP,
            REGON: req.body.REGON,
            Nazwa: req.body.Nazwa,
            VAT: checkVatStatus(req.body.VAT),
            Ulica: req.body.Ulica,
            Nrdomu: req.body.Nrdomu,
            Nrmieszkania: req.body.Nrmieszkania
        };


        const queryStr =
            `INSERT INTO clients (NIP,REGON,Nazwa,VAT,Ulica,NumerDomu,NumerMieszkania) VALUES ("${data.NIP}","${data.REGON}","${data.Nazwa}","${data.VAT}","${data.Ulica}","${data.Nrdomu}","${data.Nrmieszkania}")`;

        db.query(queryStr, (err, result) => {
            if (err) throw err;
            res.redirect('/clients');
        })

    },

    updateClient: (req, res) => {


        function checkVatStatus(a) {
            if (a == true) {
                return 1;
            }
            else {
                return 0;
            }
        }

        const data = {
            NIP: req.body.NIP,
            REGON: req.body.REGON,
            Nazwa: req.body.Nazwa,
            VAT: checkVatStatus(req.body.VAT),
            Ulica: req.body.Ulica,
            NumerDomu: req.body.NumerDomu,
            NumerMieszkania: req.body.NumerMieszkania
        };



        const queryStr =
            `UPDATE clients
        SET
            NIP = '${data.NIP}',
            REGON = '${data.REGON}',
            Nazwa = '${data.Nazwa}',
            VAT = '${data.VAT}',
            Ulica = '${data.Ulica}',
            NumerDomu = '${data.NumerDomu}',
            NumerMieszkania = '${data.NumerMieszkania}'
        WHERE
            NIP = '${data.NIP}'           
        `


        db.query(queryStr, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send({ msg: 'Bład bazy danych. Coś poszło nie tak...' })
            }
            else {
                res.status(200).send({ msg: 'Dane zostały zaktualizowane' })
            }
        })


    },

    deleteClient: (req, res) => {
        const data = {
            NIP: req.body.NIP,
        };

        const selectQuery =
            `SELECT * FROM clients
        WHERE NIP = '${data.NIP}';
        `

        const queryStr =
            `DELETE FROM clients        
        WHERE
            NIP = '${data.NIP}'           
        `



        db.query(queryStr, (err) => {
            if (err) {
                console.log(err);
                res.status(500).send({ msg: 'Bład bazy danych. Coś poszło nie tak...' })
            }
            else {
                res.status(200).send({ msg: 'Klient został usunięty z bazy danych' })
            }
        })
    }
}