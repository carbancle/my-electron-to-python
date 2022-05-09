const myform = document.getElementById('myform')
const title = document.getElementById('title')
const body = document.getElementById('description')

const insertData = (newData) => {
    fetch('http://localhost:5000/add', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newData)
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
    })
    .catch(error => console.log(error))
}

myform.addEventListener('submit', (e) => {
    e.preventDefault()

    const newData = {
        title:title.value,
        body:body.value
    }

    insertData()
    console.log("Hello World")
})