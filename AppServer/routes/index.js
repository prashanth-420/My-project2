const express = require('express');
 const router = express.Router();
 const ctrlLocations = 
require('../controllers/locations');
 const ctrlOthers = require('../controllers/others');
 /* Locations pages */
 router.get('/', ctrlLocations.homelist);
 router.get('/location/review/new', ctrlLocations.addReview);
 router.post('/location/review', ctrlLocations.doAddReview);
 router.get('/location/:name', ctrlLocations.locationInfo);
 /* Other pages */
 router.get('/about', ctrlOthers.about);
 module.exports = router;
