import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { useFetch } from './hook/useFetch';

export default function Home(props) {

  const { data: pokemons } = useFetch("https://pokeapi.co/api/v2/pokedex/2");

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {pokemons && pokemons.pokemon_entries.map((pokemon) => {
            return (
              <li key={pokemon.entry_number}>
                <Link href={`pokemons/${pokemon.entry_number}`}>
                  <a>{pokemon.pokemon_species.name}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
};
