
// Name form:

// 1. grab name entered from imput
// let breedChosen = document.getElementById('breed-option').value;
// 2. use find() method to search for the name
// 3. retunr numer licenced with name, or a not found message


const dogs = [
    {
        "breed": "",
        "quan_licenced": "42 937"
    },
    {
        "breed": "Affenpinscher",
        "quan_licenced": "11"
    },
    {
        "breed": "Airedale Terrier",
        "quan_licenced": "73"
    },
    {
        "breed": "Akbash",
        "quan_licenced": "13"
    },
    {
        "breed": "Akita",
        "quan_licenced": "49"
    },
    {
        "breed": "Alaskan Husky",
        "quan_licenced": "76"
    },
    {
        "breed": "Alaskan Klee Kai",
        "quan_licenced": "7"
    },
    {
        "breed": "Alaskan Malamute",
        "quan_licenced": "69"
    },
    {
        "breed": "American Bulldog",
        "quan_licenced": "464"
    }
]

const dogBreeds = document.getElementById('breeds');


for (let i = 0; i < dogs.length; i++) {

    const dogOption = document.createElement('option');
    dogOption.innerHTML = dogs[i].breed;
    dogOption.setAttribute('value', dogs[i].quan_licenced)
    dogOption.setAttribute('id', 'breedOption');
    dogOption.classList.add('breed-option');
    dogBreeds.appendChild(dogOption);

}


function dispayNumber() {
    let breedLicenced = document.getElementById('breeds').value;
    // let breedName = document.getElementById('breeds').text;
    console.log('There are ' + breedLicenced + ' dogs registered in Toronto');
    let dogsLicenced = document.getElementById('breed-result');
    dogsLicenced.innerHTML = 'There are ' + breedLicenced + ' dogs registered';
}
dispayNumber();









