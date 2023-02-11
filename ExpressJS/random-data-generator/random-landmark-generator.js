let landmark = ['Near Apollo Clinic','Near DPS School','Near City Hospital','Near Khadigram Shop','Near Haldirams','Near Police Station','Near Bus Stop','Near IIT Academy','CA Road','Near Zero miles','Near Ice Factory','Near Rainbow Lake','Near Government School']

function getLandmark(){
    let random = Math.floor(Math.random() * landmark.length)
    return landmark[random];
}

console.log(getLandmark())