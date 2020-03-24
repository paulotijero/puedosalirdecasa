import Head from "next/head";

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Puedo salir de casa?</title>
        <link rel="icon" href="/question.png" />
      </Head>

      <main>
        <h1>NO</h1>
      </main>

      <footer>
        <a
          href="https://github.com/paulotijero"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Paulo Tijero-
        </a>
      </footer>
    </div>
  );
}
