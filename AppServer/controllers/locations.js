 /* GET 'home' page */
 const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
     sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint?Let Loc8r help you find the place you're looking for.",               
    locations: [{
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '100m'
    },{
      name: 'Cafe Hero',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    },{
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '500m'
    }]
  });
 };
 /* GET 'Location info' page */
 const locationInfo = (req, res) => {
  const locationName = req.params.name;

  // Find location data based on name
  const locations = {
    'starcups': {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      openingHours: {
        'Monday - Friday': '7:00am - 7:00pm',
        'Saturday': '8:00am - 5:00pm',
        'Sunday': 'closed'
      },
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      reviews: [
        {
          author: 'Simon Holmes',
          date: '16 February 2017',
          review: 'What a great place.'
        },
        {
          author: 'Charlie Chaplin',
          date: '14 February 2017',
          review: 'It was okay. Coffee wasn\'t great.'
        }
      ],
      description: 'Starcups is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.'
    },
    'cafe-hero': {
      name: 'Cafe Hero',
      address: '158 High Street, Reading, RG6 1PS',
      openingHours: {
        'Monday - Friday': '6:00am - 8:00pm',
        'Saturday': '7:00am - 6:00pm',
        'Sunday': '8:00am - 4:00pm'
      },
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      reviews: [
        {
          author: 'Jane Doe',
          date: '15 February 2015',
          review: 'Great coffee and atmosphere!'
        }
      ],
      description: 'Cafe Hero is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done. They also serve great coffee and have a cozy atmosphere.'
    },
    'burger-queen': {
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 1PS',
      openingHours: {
        'Monday - Friday': '10:00am - 10:00pm',
        'Saturday': '10:00am - 11:00pm',
        'Sunday': '11:00am - 9:00pm'
      },
      facilities: ['Food', 'Premium wifi'],
      reviews: [
        {
          author: 'Jack Smith',
          date: '20 February 2017',
          review: 'Food was okay, but wifi was slow.'
        }
      ],
      description: 'Burger Queen is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done. They offer a variety of burgers and quick bites perfect for lunch breaks.'
    }
  };
  
  const locationKey = locationName.toLowerCase().replace(' ', '-');
  const location = locations[locationKey];

  if (!location) {
    const err = new Error('Location not found');
    err.status = 404;
    return res.render('error', {
      title: 'Error',
      message: 'Location not found',
      error: err
    });
  }
  
  res.render('location-info', { 
    title: location.name,
    location: location
  });
 };
 /* GET 'Add review' page */
 const addReview = (req, res) => {
  const locationName = req.query.location || '';
  res.render('location-review-form', {
    title: 'Add review',
    locationName: locationName,
    error: null,
    formData: null
  });
 };
 /* POST 'Add review' */
 const doAddReview = (req, res) => {
  const { name, rating, review } = req.body;

  if (!name || !rating || !review) {
    return res.render('location-review-form', {
      title: 'Add review',
      error: 'All fields are required',
      formData: req.body
    });
  }

  // In a real application, you would save the review to a database
  // For now, we'll just redirect back to the home page
  res.redirect('/');
 };
 module.exports = {
  homelist,
  locationInfo,
  addReview,
  doAddReview
 };
