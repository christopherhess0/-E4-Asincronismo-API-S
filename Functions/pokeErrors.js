const errorContainer = document.querySelector('.errorContainer')
export const maxPokeShowError = () => {

    if(errorContainer.contains('hidden')){
        errorContainer.classList.remove('hidden')
    }
    
}
export const removePokeError = () => {
    if(!errorContainer.contains('hidden')){
        errorContainer.classList.add('hidden')
        
    }
    
}
