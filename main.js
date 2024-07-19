import './style.css'
import Header from './components/Header/Header.js'
import Main from './components/Main/Main.js'
import Footer from "./components/Footer/Footer.js"

const init = ()=>{
  Header();
  Main();
  Footer();
  getPhotos('dogs');
}

const getPhotos = async (keyword)=>{
  const container = document.querySelector('#results');
  container.innerHTML='';
  const data= await fetch (`https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=${import.meta.env.VITE_CLIENT_ID}`)
  const result = await data.json();
  const photos = result.results
  printPhotos(photos)
}

const printPhotos = (photos) => {
  const container = document.querySelector('#results');
  const message = document.querySelector('#message')
  if (photos.length === 0){
    container.innerHTML='';
    message.textContent= "Desafortunadamente, no se encontraron resultados acorde a su criterio de búsqueda. Rogamos intente con otro parámetro."
  } else {
    container.innerHTML='';
    for (const photo of photos){
      const li = document.createElement('li');
      li.innerHTML=
      `
      <img src=${photo.urls.regular} alt=${photo.alt_description}/>
  
      `;
      container.appendChild(li)
    }
  }


}



//·Primero la web
init();

//··Luego inyectamos el listener
document.querySelector('#searchBtn').addEventListener('click', ()=>{
  const value = document.querySelector('#searchInput').value;
  getPhotos(value)
})