import dotenv from "dotenv"
import { Character, NewCaracter } from "../interfaces/rickAndMorty"

dotenv.config()

const urlApi = process.env.API_KEY!;
const api = new URL(urlApi);



const getAllData = async (): Promise<Character[] | Error> => {
  try {
    const response = await fetch(api);
    if (!response.ok) {
      throw new Error("Recurso no encontrado.");
    }

    const rickandmortyData = await response.json();
    const resultsRAM = rickandmortyData.results;
    return resultsRAM;


  } catch (error) {
    return new Error();
  }
}


const getAllTitlesCharcters = async (): Promise<string[] | Error> => {
  try {
    const data = await getAllData();
    if (data instanceof Error) {
      throw data;
    }

    const characterNames = data.map((character: Character) => character.name);

    return characterNames;


  } catch (error) {
    return new Error();

  }
}



const getCharacterById = async (id: number): Promise<Character | Error> => {
  try {

    const data = await getAllData();
    if (data instanceof Error) {
      throw data;
    }
    const characterById = data.find((character: Character) => id === character.id)
    if (characterById === undefined) {
      return new Error();

    }
    return characterById;


  } catch (error) {
    return new Error();
  }
}





const getCharactersByGender = async (gender: string): Promise<Character[] | Error> => {
  try {
    const data = await getAllData();
    if (data instanceof Error) {
      throw data;
    }
    const charactersByGender = data.filter((character: Character) => character.gender.toLowerCase() === gender.toLowerCase());

    return charactersByGender;


  } catch (error) {
    return new Error();
  }
}



const getMappedCharactersData = async (): Promise<NewCaracter[] | Error> => {
  try {
    const data = await getAllData();
    if (data instanceof Error) {
      throw data;
    }

    const characterDetails = data.map((character: Character) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender
    }));

    return characterDetails;


  } catch (error) {
    return new Error();
  }
}







export { getAllData, getAllTitlesCharcters, getCharactersByGender, getCharacterById, getMappedCharactersData }



