const path = require('path');
const fs = require('fs');

const Controller = {
  index: (req, res) => {

    res.render(
      'index', 
      { title: 'Home'}
    );
  },



};

module.exports = Controller;