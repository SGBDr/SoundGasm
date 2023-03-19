import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import { articleHref, getCookie } from "./Tools";

  const Search = React.memo(() => {
//   const router = useRouter();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredSneakers, setFilteredSneakers] = useState([]);
  const timeout = useRef();

  async function asyncEffect() {
    clearTimeout(timeout.current);

    if (search.trim().length === 0) {
      setLoading(false);
      setArticles([]);
      return;
    }

    timeout.current = setTimeout(async () => {
      try {
        const request = await fetch(`https://soundgasm.herokuapp.com/?controllers=music&method=GET&by=TERM&term=${search}&limit=5`, {
          headers: { Token: "TOKEN_5d8eb3591e61a4ff112aa5b9c3a5d80f51b50bb6" },
        });
        const response = await request.json();
        setLoading(false);
        setArticles(response);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }, 800);
  }

  useEffect(() => {
    asyncEffect();
  }, [search]);

  useEffect(() => {
    setFilteredSneakers(articles);
  }, [search, articles]);

  if (loading) {
    return <p>chargement...</p>;
  }

  return (
    <div className={`search-size ${articles.length !== 0 ? "z-30" : "z-0"}`}>
      <style jsx>{`
        .input-search {
          border-style: none;
          border-bottom: 1px solid black;
          display: flex;
          align-items: center;
          margin-top: 1px;
        }
        .result {
          width: 250px;
        }

        .input-search > input:focus {
          outline: none;
          border: none;
          outline-width: 0;
        }

        .input-search > i {
          font-size: 0.75rem;
        }

        .input-search > input::placeholder {
          color: black;
          font-size: 0.7rem;
        }

        @media screen and (min-width: 1280px) {
          .search-margin {
            margin-top: 0.5rem;
          }
        }

        @media screen and (min-width: 1440px) {
          .input-search > input::placeholder {
            color: black;
            font-size: 0.9rem;
          }
        }

        @media screen and (min-width: 1920px) {
          .input-search > input::placeholder {
            color: black;
            font-size: 1.2rem;
          }
          .search-margin {
            margin-top: 1rem;
          }
        }
      `}</style>
      <div className="mr-2 search-margin mt-3">
        <div className="relative search-box">
          <div className="input-search mr-3">
            <i className="fas fa-solid fa-search text-black pr-1 pt-1"></i>

            <input
              type="text"
              className="w-full border-none p-1 focus:outline-none focus:ring-0 text-sm"
              placeholder="Trouve ta paire..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <ul
            className={`absolute z-20 overflow-auto right-0 h-52 mt-2 result ${
              search.trim() === "" ? "hidden" : "block"
            }`}
          >
            {filteredSneakers?.map((sneaker, i) => {
              const model = sneaker.model;
              Object.size = function (obj) {
                var size = 0,
                  key;
                for (key in obj) {
                  if (obj.hasOwnProperty(key)) size++;
                }
                return size;
              };
              if (Object.size(search) != 0) {
                return (
                  <li key={i} className="border-b-2">
                    <a
                      className="block"
                      onClick={(e) => {
                        e.preventDefault();
                        // router.push(
                        //   articleHref(sneaker.brand, sneaker.model, sneaker.sku)
                        // );
                      }}
                      href={{}}
                    >
                      <div className="flex p-5 w-full bg-gray-100">
                        <div className="w-1/3 flex justify-start items-center">
                          <img
                            src={"/images/icons/search.svg"}
                            width={58}
                            height={58}
                            objectFit={`contain`}
                            objectPosition={`center`}
                            className={`text-2xs `}
                            alt={`${sneaker?.model} model`}
                          />
                        </div>
                        <div className="ml-4 w-2/3">
                          <p className="roboto text-center text-sm">
                            {sneaker.brand} {sneaker.model} {sneaker.color}
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
})

export default Search;
