import { Router } from 'express'

import {getPersons, getPerson, createPerson, updatePerson, deletePerson,} from '../../models/persons'

const router = Router()

router.get('/', (req, res) => {
    const persons = getPersons ()
    res.send(persons)
})

router.get('/:id', (req, res) => {
    const person = getPerson ( id: req.params.id)
    res.send(person)
})

router.post('/', (req, res) => {
    res.send({msg: 'Creating a new Person'})
})

router.put('/:id', (req, res) => {
    res.send({msg: 'Updating Person ${req.params.id}' })
})

router.delete('/:id', (req, res) => {
    res.send({msg: 'Deleting Person ${req.params.id}' })
})



export default router