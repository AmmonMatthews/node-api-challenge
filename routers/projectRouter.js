const express = require('express');

const Projects = require('../data/helpers/projectModel.js');


const router = express.Router();

// Tested
router.post("/", (req, res) => {
    Projects.insert(req.body)
    .then(newProject =>{
        res.status(201).json(newProject)
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({ error: "project could not be added."})
      })
})

// Tested
router.get("/", (req, res) => {
    
    Projects.get()
    .then(post => {
        res.status(200).json(post)
    })
    .catch( err => {
        console.log(err)
        res.status(404).json({ error: "projects could not be found."})
      })
    
})

// Tested
router.get("/:id", (req, res) => {
    const { id } = req.params;

    Projects.get(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "project could not be found."})
          })
})

// Tested
router.get("/:id/actions", (req, res) => {
    const { id } = req.params;

    Projects.getProjectActions(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "actions could not be found."})
          })
})
// Tested
router.put('/:id', (req, res) => {
    const { id } = req.params
    const updatedP = req.body

    Projects.update(id, updatedP)
        .then(project => {
            res.status(200).json(project);
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "projects could not be updated."})
          })

} )
// Tested
router.delete('/:id', (req, res) => {
    const { id } = req.params

    Projects.remove(id) 
        .then(deleted => {
            console.log(deleted)
            res.status(200).json({message: "this project was deleted"})
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "project could not be deleted."})
          })
})

module.exports = router;