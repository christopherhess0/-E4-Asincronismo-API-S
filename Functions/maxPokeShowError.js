export const maxPokeShowError = () => {
    const errorContainer = document.querySelector('.errorContainer');
    
    if (errorContainer) { // Verificamos que el contenedor exista
        console.log('Mostrando error...');
        
        // Si la clase 'hidden' está presente, la eliminamos
        if (errorContainer.classList.contains('hidden')) {
            errorContainer.classList.remove('hidden');
        }
    } else {
        console.log("No se encontró el contenedor de error.");
    }
};
