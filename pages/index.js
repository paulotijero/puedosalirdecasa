import fetch from "isomorphic-unfetch";

Index.getInitialProps = async function () {
  const res = await fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=" + process.env.GIPHY_KEY + "&tag=no"
  );
  const data = await res.json();
  return { gif: data.data };
};

export default function Index({ gif }) {
  return (
    <div className="h-full mx-auto flex flex-col items-center justify-center md:justify-between">
      <main className="flex justify-center h-64 w-full md:h-full">
        <div className="w-11/12 max-w-screen-sm md:w-full">
          <img
            className="object-contain w-full h-full "
            src={gif.image_original_url}
            alt={gif.title}
          />
        </div>
      </main>
      <footer className="text-gray-500 py-4">
        <a
          href="https://paulotijero.dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="Code with love by Paulo Tijero"
        >
          <span className="font-bold">{"<>"}</span>
          <span> with 🖤 by </span>
          <span className="font-bold">Paulo Tijero</span>
        </a>
      </footer>
    </div>
  );
}
