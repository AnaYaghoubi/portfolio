import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import ColorSelect from "../Components/projects/colorSelect/ColorSelect";
import ShoppingList from "../Components/projects/shoppingList/ShoppingList";
import SlotMachine from "../Components/projects/slots/Slots";
import Jokes from "../Components/projects/favoriteJoke/FavoriteJoke";
import TimerApp from "../Components/projects/interval/TimerApp";
import PokedexResult from "../Components/projects/pokemonApi/PokemonApi";
import PortfolioCard from "../Components/projects/portfolioCard/PortfolioCard";
import Calculator from "../Components/projects/calculator/Calculator";
import TodoApp from "../Components/projects/todoList/components/TodoApp";

export interface IPortfolio {
  id?: number;
  name: string;
  description: string;
  component: JSX.Element;
}

const ProjectSection = styled.section`
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const portfoliItems: IPortfolio[] = [
  {
    name: "Color Select",
    description:
      "Dit project bevat een overzicht van kleuren in een lijst. Als je op een van de kleuren klikt dan kan je deze weergeven.",
    component: <ColorSelect />,
  },
  {
    name: "Shopping List",
    description:
      "Dit project is voor je boodschappenlijst. Je kan een lijst maken door producten toe te voegen en te verwijderen indien nodig.",
    component: <ShoppingList />,
  },
  {
    name: "Pokedex",
    description:
      "Dit project geeft je de optie om Pokémons op te zoeken in een zoekveld aan de hand van hun naam. Je kan ook kiezen hoeveel Pokémons je wil tonen op het scherm.",
    component: <PokedexResult />,
  },
  {
    name: "Timer",
    description:
      "Dit project toont je de verstrekken tijd sinds het starten van de applicatie onder de klok van de huidige tijd. Per seconden wordt er ook een willekeurig getal tussen 1-100 en 100-200 getoond.",
    component: <TimerApp />,
  },
  {
    name: "Slot Machine",
    description:
      "Dit project is een speelautomaat. Je begint met een saldo van €100. Elk spel kost €1 dat je start door druk op de lever. Als alle 4 willekeurige symbolen overeenkomen dan win je €20.",
    component: <SlotMachine slots={4} />,
  },
  {
    name: "Calculator",
    description:
      "Dit project is een eenvoudige rekenmachine. Je kan volgende berekeningen uitvoeren: optellen, aftrekken, delen & vermenigvuldigen.",
    component: <Calculator />,
  },
  {
    name: "Todo App",
    description:
      "Dit project is voor het maken en raadplegen van een lijst met taken. Je kan deze toevoegen en verwijderen.",
    component: <TodoApp />,
  },
  {
    name: "Jokes",
    description:
      "Dit project toont een willekeurige grap op het scherm. Je kan een nieuwe opvragen met de knop next joke. Als je eentje leuk vindt kan je deze in je favoriete opslagen en blijft deze onderaan het scherm staan.",
    component: <Jokes />,
  },
];

const Portfolio = () => {
  const [portfolioList, setPortfolioList] = useState<IPortfolio[]>([]);
  const [filter, setFilter] = useState("");

  const loadList = () => {
    setPortfolioList(
      portfoliItems.map((portfolioList, i) => {
        return { ...portfolioList, id: i };
      })
    );
  };

  useEffect(() => {
    loadList();
  }, []);

  const filteredPortfolio = portfolioList.filter((p) =>
    p.name.toUpperCase().startsWith(filter.toUpperCase())
  );

  return (
    <>
      <input
        type="search"
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search"
        style={{
          border: "1px solid #0a3d66",
          borderRadius: "10px",
          padding: "10px",
          width: "98%",
          margin: "10px",
      
        }}
      />

      <ProjectSection>
        {filteredPortfolio.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </ProjectSection>
    </>
  );
};

export default Portfolio;
