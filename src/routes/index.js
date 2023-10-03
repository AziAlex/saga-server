const express = require('express');
const Table = require('../models/table');
const TableColumns = require('../models/tableColumns');

const router = express.Router()


router.get('/tables', async (req, res) => {
    const tables = await Table.find()

    res.send(tables)
})

router.post('/tables', async (req, res) => {
    const data = req.body
    const newTable = new Table(data)

    newTable.save().catch((e) => {
        res.status(400).json({error: e.message})
    })

    res.send({message: 'Success post table'})
})

router.delete('/tables/:id', async (req, res) => {
    const id = req.params.id

    try {
        await Table.deleteOne({id: id})
        res.send({message: 'Success delete table'})
    } catch (e) {
        res.status(404).json({error: 'Table not found'})
    }
})

router.get('/tableColumns/:id', async (req, res) => {
    const id = req.params.id

    let tables = await TableColumns.findOne({id: id})

    if (!tables) {
        res.status(404).json({error: 'Table not found'})
    }

    res.send(tables)
})

router.post('/tableColumns', async (req, res) => {
    const data = req.body
    const newTable = new TableColumns(data)

    newTable.save().catch((e) => {
        res.status(400).json({error: e.message})
    })

    res.send({message: 'Success post table column'})
})

router.put('/tableColumns/:id', async (req, res) => {
    const id = req.params.id
    const newTable = req.body

    let tables = await TableColumns.findOne({id: id})

    if (!tables || !newTable) {
        res.status(404).json({error: 'Table not found'})
    }

    tables.columnOrder = newTable.columnOrder
    tables.columns = newTable.columns
    tables.tasks = newTable.tasks

    tables.save().catch((e) => {
        res.status(400).json({error: e.message})
    })

    res.send({message: 'Success update table'})
})

router.delete('/tableColumns/:id', async (req, res) => {
    const id = req.params.id

    try {
        await TableColumns.deleteOne({id: id})
        res.send({message: 'Success delete table'})
    } catch (e) {
        res.status(404).json({error: 'Table not found'})
    }
})

module.exports = router;