import dotenv from "dotenv"
import { rickAndMorty } from "../interfaces/rickAndMorty"

dotenv.config()

const urlApi:any = process.env.API_KEY;
const api = new URL(urlApi);







const getAllData = async (): Promise<rickAndMorty | undefined> => {
  try {
    const response = await fetch(api );

    if (!response.ok) {
      throw new Error("error to fetch");

    }

    const rickandmortyData = await response.json();
    const resultsRAM = rickandmortyData.results;
    return resultsRAM;
  } catch (error:any) {
    return error;

  }



}

getAllData();




const getAllTitlesCharcters = async () => {
  try {

    const characters:any = await getAllData();
    if (characters instanceof Error) {
      throw characters;
    }

    const characterNames = characters.map((character:any) => character.name);

    return characterNames;
  } catch (error) {
    return error;

  }
}
getAllTitlesCharcters()


const getCharacterById = async (id: any) => {
  try {

    const characters: any = await getAllData();
    if (characters instanceof Error) {
      throw characters;
    }
    const characterById = characters.find((character: any) => id === character.id)


    return characterById;
  } catch (error) {
    console.log(error);

  }
}

getCharacterById(18)



const getCharactersByGender = async (gender: string) => {
  try {
    const characters: any = await getAllData();
    if (characters instanceof Error) {
      throw characters;
    }
    const charactersByGender = characters.filter((character: any) => character.gender === gender);

    return charactersByGender;
  } catch (error) {
    console.log(error);
  }
}

getCharactersByGender("Female");

const getMappedCharactersData= async () => {
  try {
    const characters: any = await getAllData();
  if (characters instanceof Error) {
    throw characters;
  }

  const characterDetails = characters.map((character: any) => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    type: character.type,
    gender: character.gender
  }));

  return characterDetails;
} catch (error) {
  console.log(error);
}
}

getMappedCharactersData();







const main = async () => {
  // const allData = await getAllData();
  // console.log(allData);
  const allCharacters = await getAllTitlesCharcters();
  console.log(allCharacters);
  // const byId= await getCharacterById(18)
  // console.log(byId);
  // const byGender = await getCharactersByGender("Female");
  // console.log(byGender);
  // const mapCharactersData= await getMappedCharactersData();
  // console.log(mapCharactersData);

}

main();

