const router = require('express').Router();
let RadiologyCost = require('../models/radiologyCost.model');

//retrieve all
router.route('/').get((req, res) => {
    RadiologyCost.find()
        .then(radiologyCost => res.json(radiologyCost))
        .catch(err => res.status(400).json('Error: ' + err));
});


//create
router.route('/add').post((req, res) => {
    const _id = req.body._id;
    const patientname = req.body.patientname;
    const date = Date.parse(req.body.date);;
    const testingname = req.body.testingname;
    const scanCost = req.body.scanCost;
    const noOfScans = req.body.noOfScans;
    const totalCost = (scanCost * noOfScans);


    const newRadiologyCost = new RadiologyCost({

        _id,
        patientname,
        date,
        testingname,
        scanCost,
        noOfScans,
        totalCost


    });

    newRadiologyCost.save()
        .then(() => res.json('New radiologyCost entry added.\n Total RadiologyCost of patient: ' + totalRadiologyCost))
        .catch(err => res.status(400).json('Error: ' + err));
});

//retrieve function 
router.route('/:id').get((req, res) => {
    RadiologyCost.findById(req.params.id)
        .then(radiologyCost => res.json("Patient ID: " + radiologyCost._id + "\n" + "Patient name: " + radiologyCost.name + "\n" + "Total RCost: " + cost.totalCost))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete function
router.route('/:id').delete((req, res) => {
    RadiologyCost.findByIdAndDelete(req.params.id)
        .then(() => res.json('RadiologyCost entry deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update function
router.route('/update/:id').post((req, res) => {
    RadiologyCost.findById(req.params.id)
        .then(radiologyCost => {
            radiologyCost._id = req.body._id;
            radiologyCost.patientname = req.body.patientname;
            radiologyCost.date = Date.parse(req.body.date);
            radiologyCost.testingname = req.body.testingname;
            radiologyCost.scanCost = req.body.scanCost;
            radiologyCost.noOfScans = req.body.noOfScans;
            radiologyCost.totalCost = (scanCost * noOfScans);

            radiologyCost.save()
                .then(() => res.json('RadiologyCost entry updated.\n Total radiologyCost of patient: ' + totalRadiologyCost))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;