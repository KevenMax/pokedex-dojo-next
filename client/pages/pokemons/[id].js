export default function Pokemon(props){
  const { pokemon } = props;
  return(
    <div>
      <h1>{pokemon.species.name}</h1>
      <img src={pokemon.sprites.front_default}/>
    </div>
  )
}

export async function getStaticPaths(){
  const { data: paths } = await fetch("https://pokeapi.co/api/v2/pokedex/2")
  .then()


  return {
    paths: [
      {
        params: {
          id: "1",
        }
      }
    ],
    fallback: false,
  }
}

export async function getStaticProps({params}){
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  .then((response) => {
    if(response.ok){
      return response.json();
    }
  }) 
  .then((resObj) => resObj);

  return {
    props: {
      pokemon,
    }
  }
}