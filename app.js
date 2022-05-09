const myform = document.getElementById('myform')
const title = document.getElementById('title')
const body = document.getElementById('description')

const articles = document.getElementById('articles')

let articleId;

const insertData = (newData) => {
    fetch('http://localhost:5000/add', {
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newData)
    })
    .then(resp => resp.json())
    .then(() => { //.then((data) => {
        getAllData() // console.log(data)
    })
    .catch(error => console.log(error))
}

const getAllData = () => {
    fetch('http://localhost:5000/get', {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => renderArticles(data))
    .catch(error => console.log(error))
}

const deleteData = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })

    getAllData()
}

const getDataById = (id) => {
    fetch(`http://localhost:5000/get/${id}`, {
        method:'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        renderOneItem(data)
    })
}

const renderOneItem = (mydata) => {
    title.value = mydata.title
    body.value = mydata.body

    articleId = mydata.id;
}

const updateData = (articleId, mydata) => {
    fetch(`http://localhost:5000/update/${articleId}`, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(mydata)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
    })
}

function renderArticles(mydata){
    articles.innerHTML = '';
    mydata.forEach(data => {
        articles.innerHTML += `
        <div class = "card card-body my-2">
            <h2>${data.title}</h2>
            <p>${data.body}</p>
            <h5>${data.date}</h5>

            <p>
                <button class="btn btn-danger" onclick="deleteData('${data.id}')">Delete</button>
                <button class="btn btn-success" onclick="getDataById('${data.id}')">Update</button>
            </p>
        </div>
        `
    })
}

myform.addEventListener('submit', (e) => {
    e.preventDefault()

    const newData = {
        title:title.value,
        body:body.value
    }

    if(articleId) {
        alert("업데이트 실행!")
        updateData(articleId, newData)
    } else {
        insertData(newData)
    }
    
    myform.reset()
})

getAllData()