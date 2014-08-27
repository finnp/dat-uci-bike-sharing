var request = require('request')
var unzip = require('unzip')

var source = 'https://archive.ics.uci.edu/ml/machine-learning-databases/00275/Bike-Sharing-Dataset.zip'
var datasetname = 'day.csv' // alternatively hour.csv

request(source)
  .pipe(unzip.Parse())
  .on('entry', function (entry) {
    if(entry.path === datasetname) 
      entry.pipe(process.stdout)
    else
      entry.autodrain()
  })