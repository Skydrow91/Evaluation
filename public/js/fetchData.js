window.addEventListener('DOMContentLoaded',()=>{
  const pokeP=document.getElementById('pokeInfo')
  const pokeDiv=document.getElementById('pokemon-info')
  const pokeAbilityBtn=document.getElementById('ability')

/**
 *
 * @async
 * @function fetchPokemon - Cherche un pokémon
 * @param {number} pokedexNum - Cherche un pokémon aléatoire dans le pokédex pour le choisir
 * @param {string} foundPokemon -Nom du pokémon trouvé
 * @param {string} jsonPokemon - 
 * @param {object} pokeInfo - Retourne les infos du pokémon
 * @return {Promise} -Retourne le nom du pokémon.
 */
  
  const fetchPokemon=async ()=>{
    const pokedexNum=Math.floor(Math.random() * 897)
    let foundPokemon=''
    let jsonPokemon=''
    const pokeInfo={}

    try{
      foundPokemon=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    }
    catch(error){console.error(error.message)}

    if(foundPokemon){
      try{
        jsonPokemon=await foundPokemon.json()
        pokeInfo.name=`${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1, jsonPokemon.species.name.length).toLowerCase()}`
      }
      catch(error){console.error(error.message)}

    }
    else{jsonPokemon='No Pokémon found...'}

    if(pokeP.innerText !== ''){pokeP.innerText=''}
    pokeP.innerText=`Your Pokémon is ${pokeInfo.name}.`
    pokeAbilityBtn.removeAttribute('disabled')
  }


  
/**

 *
 * @async
 * @function fetchPokemonAbilities - Cherche une technique pokémon
 * @param {number} pokedexNum - Cherche un pokémon aléatoire dans le pokédex pour le choisir
 * @param {string} foundAbilities -Cherche une technique pokémon
 * @param {string} jsonAbilities - 
 * @param {string} abilityToDisplay -Nom de la technique à afficher
 * @return {Promise} -Retourne la technique que le pokémon à appris.
 */
 
  const fetchPokemonAbilities=async()=>{
    const pokedexNum=Math.floor(Math.random() * 266)
    let foundAbilities=''
    const pokeAbility=document.getElementById('pokeAbility')
    let jsonAbilities={}
    let abilityToDisplay=''
  
    try {
      foundAbilities=await fetch(`https://pokeapi.co/api/v2/ability/${pokedexNum}`, {method: 'GET', headers: {'Content-Type': 'application/json'}})
    }
    catch(error){console.error(error.message)}

    if(foundAbilities){
      try{
        jsonAbilities=await foundAbilities.json();
        if('' !== jsonAbilities.name && undefined !== jsonAbilities.name){
          abilityToDisplay=`${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1, jsonAbilities.name.length).toLowerCase()}`
        }
        else{abilityToDisplay='Tackle'}
      }
      catch(error){console.error(error.message)}

    }
    else{jsonAbilities='No ability found...'}

    if(pokeAbility.innerText !== ''){pokeAbility.innerText=''}

    pokeAbility.innerText=`It now knows the move ${abilityToDisplay}!`
  }


  /**
   * @function  invoquePokemon -Fonction pour invocation d'un pokémon
   * @function pokeBtn - Bouton pour invoquer un pokémon
   * @param  {string} fetchPokemon - 
   * @param  {string} pokeDiv.appendChild -
   */
  
  const invoquePokemon=()=>{
    const pokeBtn=document.getElementById('pokemon')
    pokeBtn.addEventListener('click', fetchPokemon)
    pokeDiv.appendChild(pokeP)
  }


  
/**
 * @function  pokeAbility  -Fonction pour chercher une technique de pokémon
 * @function pokeAbilityBtn - Bouton à appuyer pour chercher une technique de pokémon
 * @param  {string} fetchPokemonAbilities - Recherche d'un technique pokémon
 * @param  {string} pokeDiv.appendChild
 */

  const pokemonAbility=()=>{
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities)
    pokeDiv.appendChild(pokeAbility)
  }
  
  
  /**
   * @function functionstartAll - Fonction pour commencer la création du pokémon (invocation du pokémon et de la technique attribuée).
   * @param  {string} invoquePokemon
   * @param  {string} pokemonAbility
   */

  (function startAll(){
    invoquePokemon()
    pokemonAbility()
  })()
})
