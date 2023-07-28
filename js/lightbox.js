const images = document.querySelectorAll('.img-gallery')
const imagesLight = document.querySelector('.add-image')
const containerLight = document.querySelector('.image-light')

images.forEach(image => {
    image.addEventListener('click', ()=> {
        showImage(image.getAttribute('src'))
    })
})

containerLight.addEventListener('click', (e)=>{
    if(e.target !== imagesLight){
        containerLight.classList.toggle('show')
        imagesLight.classList.toggle('showImage')
    }
})

const showImage = (image) =>{
    imagesLight.src = image;
    containerLight.classList.toggle('show')
    imagesLight.classList.toggle('showImage')
} 