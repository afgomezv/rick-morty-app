import { createContext, useState, useEffect } from "react";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [pages, setPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const { info, results } = await response.json();
    setCharacters(results);
    setTotalResult(info.count);
    setPages(info.pages);
    setPrevPage(info.prev);
    setNextPage(info.next);
  };

  const goToPage = async (page, e) => {
    const type = e.target.dataset.type;
    switch (type) {
      case "prev":
        setActualPage(actualPage - 1);
        break;
      case "next":
        setActualPage(actualPage + 1);
        break;
      case "goTo":
        const number = Number(e.target.value);
        console.log(number);
        page = `https://rickandmortyapi.com/api/character?page=${number}`;
        setActualPage(number);
        break;
    }
    const response = await fetch(page);
    const { info, results } = await response.json();
    setCharacters(results);
    setPrevPage(info.prev);
    setNextPage(info.next);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        totalResult,
        pages,
        actualPage,
        prevPage,
        nextPage,
        goToPage,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
