
function lowercase(string){
    return string.toLowerCase()
}

function getPokemon() {
    let name = document.getElementById("pokeId").value;
    let pokenonName = lowercase(name)
    

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokenonName}`)
        .then((response) => response.json())
        .then((result) => {
            let mostar = (document.getElementById("pokeCard").innerHTML = `
      <article class="Card">

    <div class="container-image">
      <img class="IMG" 
      src="${result.sprites.other["official-artwork"].front_default}" 
      alt="">
    </div>

    <div>
      <h1 class="name">${result.name}</h1> <br/>
      <p class="description">
        Habilidades : </p>
        
        <p class="description"><br/>${result.abilities[0].ability.name}</p>
        <p class="description"<br/>${result.abilities[1].ability.name}</p>
    </div>

  </article>
      `);

            console.log(result);
        })
        .catch((err) => {
            console.log(`Pokemon no encontrado`, err);
        });
}