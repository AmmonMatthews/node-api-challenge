const express = require('express');

const Actions = require('../data/helpers/actionModel.js');

const router = express.Router();
// Tested
router.post("/", (req, res) => {
    
    const newAct = req.body
    
        Actions.insert(newAct)
        .then(action => { 
            res.status(201).json(action);
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "action could not be adde."})
          })
  
    

})


// Tested
router.get("/", (req, res) => {
    Actions.get()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "actions could not be found."})
          })
})
// Tested
router.get("/:id", (req, res) => {
    const { id } = req.params;
    Actions.get(id)
        .then(action => {
            res.status(200).json(action);
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "action could not be found."})
          })
        
})

// Tested
router.put("/:id", (req, res) => {
    const { id } = req.params;
    Actions.update(id, req.body) 
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch( err => {
            console.log(err)
            res.status(404).json({ error: "action could not be updated."})
          })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    Actions.remove(id)
        .then(deleted => {
            console.log(deleted);
            res.status(200).json({ message: "action was deleted"});
        })
        .catch(err => {
            console.log(err);
            res.status(404).json({errorMessage: "action was not deleted"});
        })
})




module.exports = router;