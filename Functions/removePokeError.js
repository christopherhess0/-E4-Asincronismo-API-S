const errorContainer = document.querySelector('.errorContainer')
export const removePokeError = () => {
    if (!errorContainer.classList.contains('hidden')) {
        errorContainer.classList.add('hidden');
    }
};

