const dogNames = [
    {
        "name": "CHARLIE",
        "quan_licenced": 561
    },
    {
        "name": "LUNA",
        "quan_licenced": 423
    },
    {
        "name": "BELLA",
        "quan_licenced": 420
    },
    {
        "name": "MAX",
        "quan_licenced": 352
    },
    {
        "name": "COCO",
        "quan_licenced": 311
    }
]
// Name form:

// 1. grab name entered from imput
// 2. use find() method to search for the name
// 3. retunr numer licenced with name, or a not found message

const findName = document.getElementById('find-name');

findName.addEventListener('keyup', (e) => {
    const searchedName = e.target.value.toUpperCase();
    console.log(searchedName);
    if (searchedName === dogNames.name) {
        let nameResult = document.createElement('p');
        nameResult.innerHTML = dogNames[i].quan_licenced;
        findName.appendChild(nameResult);
    } else {
        //display mesage that name isn't found
        `<p>"We didn't find your pooche's name in the regestry"</p>`
    }
});