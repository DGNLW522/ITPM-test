const router = require('express').Router();
let Addmadicines = require('../models/Madicines');

//retrieve all
router.route('/').get((_req, res) => {
    Addmadicines.find()
        .then(madicines => res.json(madicines))
        .catch(err => res.status(400).json('Error: ' + err));
});

//create
router.route('/add').post((req, res) => {  
    const cname = req.body.cname;
    const cemail = req.body.cemail;
    const caddress = req.body.caddress;
    const nic = req.body.nic;
    const gender = req.body.gender;
    const mobileno = req.body.mobileno;

    const newAddmadicines = new Addmadicines({ 
        cname,
        cemail,
        caddress,
        nic,
        gender,
        mobileno
    });
    newAddmadicines.save()
        .then(() => res.json('New Madicines Added Successfully...'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    Addmadicines.findById(req.params.id)
        .then(madicines => res.json(madicines))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    Addmadicines.findByIdAndDelete(req.params.id)
        .then(() => res.json('Madicines Details Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    Addmadicines.findById(req.params.id)
        .then(madicines => {
            madicines.cname = req.body.cname;
            madicines.cemail = req.body.cemail;
            madicines.caddress = req.body.caddress;
            madicines.nic = req.body.nic;
            madicines.gender = req.body.gender;
            madicines.mobileno = req.body.mobileno;
            madicines.save()
                .then(() => res.json('Madicines Details Updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;