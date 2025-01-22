const url4 = 'https://dummyjson.com/products/'

const main = document.querySelector('main')


fetch(url4)
    .then(res => res.json())
    .then(producto => {

       

        producto.products.forEach(e => {

            const data = document.createElement('div')
            data.className="muestra"

            const img = document.createElement('img')
            img.src = e.images

            const precio = document.createElement('h5')
            precio.textContent = `$ ${e.price}`

            const titulo = document.createElement('h3')
            titulo.textContent = e.title

            const btn = document.createElement('button')
            btn.textContent = 'Comprar'

            data.append(img,titulo,precio,btn)
            main.append(data)

        })  

     
})
.catch('Error', Error)



