# dat-uci-bike-sharing

Import the static UCI bike sharing dataset into dat with

```
node index.js | dat import --csv
```
## Alternative way with temporary file

```
wget https://archive.ics.uci.edu/ml/machine-learning-databases/00275/Bike-Sharing-Dataset.zip
unzip -p "Bike-Sharing-Dataset.zip" "day.csv" | dat import --csv
```


## Source
https://archive.ics.uci.edu/ml/datasets/Bike+Sharing+Dataset
https://archive.ics.uci.edu/ml/machine-learning-databases/00275/
https://archive.ics.uci.edu/ml/machine-learning-databases/00275/Bike-Sharing-Dataset.zip