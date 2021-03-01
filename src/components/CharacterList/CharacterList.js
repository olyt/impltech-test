import React, {useState, useMemo, useEffect} from 'react';
import CharacterItem from "../CharacterItem/CharacterItem";
import {fetchWrap} from "../../utils/fetchWrap";
import "./CharacterList.css"


const CharacterList = () => {
    const [charsList, setCharsList] = useState([]);
    const [next, setNext] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const {next, results} = await fetchWrap("https://swapi.dev/api/people/");
            setCharsList(results);
            setNext(next);
        };

        fetchData();
    }, [])

    const listToRender = useMemo(() => (charsList.map(char => {
        const {name, birth_year} = char;
        return <CharacterItem name={name} birth_year={birth_year} key={Date.now() * Math.random()}/>
    })), [charsList])

    const handleLoadMore = async () => {
        if (next) {
            const {next: newNext, results} = await fetchWrap(next);
            setCharsList((prevState) => ([
                ...prevState,
                ...results
            ]));
            setNext(newNext);
        }
    }

    return (
        <>
            <div className="char-list">
                {listToRender}
            </div>
            {next && <button className="btn" onClick={handleLoadMore}>Load More</button>}
        </>
    );
};

export default CharacterList;