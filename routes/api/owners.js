const express = require('express');
const router = express.Router();
const db = require('../../database');

const getCommaSepQuotedString = (arr) => {
    let result = "";
    arr.forEach((element, index) => {
        result += "'" + element + "'";

        if (index < arr.length - 1) {
            result += ","
        }
    });
    return result;
}

router.get('/', function(req, res) {
    let builder = db.select().from('car_owners');

    let colors = req.query['colors'] ? req.query.colors.split(',') : null ;
    let countries = req.query['countries'] ? req.query.countries.split(',') : null ;
    let startYear = req.query['startYear'] ? req.query.startYear : null ;
    let endYear = req.query['endYear'] ? req.query.endYear : null ;
    let gender = req.query['gender'] ? req.query.gender : null ;


    if (colors) {
        builder.whereRaw(`car_color in (${getCommaSepQuotedString(colors)})`)
    }

    if (countries) {
        builder.andWhereRaw(`country in (${getCommaSepQuotedString(countries)})`)
    }
    
    if (startYear && endYear) {
        builder.andWhereBetween("car_model_year", [startYear, endYear])
    }

    if (gender) {
        builder.andWhere('gender', gender)
    }

    builder
    .then(result => {
       res.json({
           status:"ok",
           data: {
               count: result.length,
               result: result
           }
       })
    }).catch(err => {
        res.json({
            status: "error",
            message: err.message
        })
    });
})

module.exports = router;