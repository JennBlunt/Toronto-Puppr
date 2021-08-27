// Breed form:

// 1. loop through breed names to generate list from which to select 
// 2. return number licenced for selected breed on SVGNumberList


// for each item in breen list, add a new option tag, 
//need to include value and name. Use birds as refrence

// Name form:

// 1. grab name entered from imput
// 2. use find() method to search for the name
// 3. retunr numer licenced with name, or a not found message


const dogs = [
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
        "breed": "American Bull D",
        "quan_licenced": "1"
    },
    {
        "breed": "American Bulldog",
        "quan_licenced": "463"
    }
]

const dogBreeds = document.getElementById('breeds');

for (let i = 0; i < dogs.length; i++) {

    const dogOption = document.createElement('option');
    dogOption.innerHTML = dogs[i].breed;
    dogOption.setAttribute('value', dogs[i].breed)
    dogOption.classList.add('dogOption');
    dogBreeds.appendChild(dogOption);

}