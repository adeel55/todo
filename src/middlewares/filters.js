const { Op } = require('sequelize')
filters = (req,res,next) => {
    let date = {}
    req.filter = {}
    let offset = 0
    let limit = Number(req.query.pagesize) || 20
    //Pagination
    if(req.query.page){
        offset  = (limit * (+ req.query.page - 1))
    }
    req.pagination = { offset, limit}

    //Date Filters
    if(req.query.date){
        date = { ...date, [Op.eq]: req.query.date }
        req.filter.hasDate = true
    }
    if(req.query.dateTo){
        date = { ...date, [Op.lte]: req.query.dateTo }
        req.filter.hasDate = true
    }
    if(req.query.dateFrom){
        date = { ...date, [Op.gte]: req.query.dateFrom }
        req.filter.hasDate = true
    }

    req.filter.date = date
    
    next()
}

module.exports = {
    filters
}