var request = require('request')
var unzip = require('unzip')
var csv = require('csv-parser')
var ldj = require('ldjson-stream')

var source = 'https://archive.ics.uci.edu/ml/machine-learning-databases/00275/Bike-Sharing-Dataset.zip'
var datasetname = 'day.csv' // alternatively hour.csv

request(source)
  .pipe(unzip.Parse())
  .on('entry', function (entry) {
    if(entry.path === datasetname) {
      entry
        .pipe(csv())
        .pipe(ldj.serialize())
        .pipe(process.stdout)
    }
    else entry.autodrain()
  })