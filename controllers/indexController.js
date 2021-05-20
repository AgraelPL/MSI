const db = require('../config/database');
const invoicesData = require('../services/serverServices');

module.exports = {
    index: (req, res) => { res.render('home')},
    htmlElements: (req, res) => { res.render(`htmlelements`); },
    employees: (req, res) => { res.render(`employees`) },

    invoices: (req, res) => {
        var data = invoicesData.invoices;
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
        from delegats       
        `);   
        
        if (!data) {
            res.redirect('/')
        }
        else {           
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
        FROM clients
        WHERE Aktywny = 1
        `);

        if (!data) {
            res.redirect('/')
        }
        else {            
            res.render(`clients`, {
                payload: data[0]
            });
        }
    },
}