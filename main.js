import { getData } from "./API/data.js";
import { renderPokemons} from "./Functions/renderPokemons.js"

const buttonRender = document.querySelector('.buttonAdd')

const data = getData()



buttonRender.addEventListener('click', renderPokemons)


import { maxPokeShowError } from "./Functions/maxPokeShowError.js";
maxPokeShowError()
import { removePokeError } from "./Functions/removePokeError.js";
removePokeError()