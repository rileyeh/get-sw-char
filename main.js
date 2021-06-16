const form = document.querySelector('form')
const input = document.querySelector('input')

function submitHandler(e) {
    e.preventDefault()
    if (input.value < 1 || input.value > 83) {
        alert('number must be 1-83')
        input.value = ''
        return
    }
    axios.get(`https://swapi.dev/api/people/${input.value}/`) 
        .then(res => {
            const {name, birth_year: birthYear, mass, height} = res.data
            const card = document.createElement('div')
            card.innerHTML = `<h2>${name}</h2>
            <p>Born: ${birthYear}</p>
            <p>Mass: ${mass}</p>
            <p>Height: ${height}</p>`
            document.body.appendChild(card)
            input.value = ''
        })
}

form.addEventListener('submit', submitHandler)