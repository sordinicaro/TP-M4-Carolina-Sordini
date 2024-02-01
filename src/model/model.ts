import dotenv from "dotenv"
import { rickAndMorty } from "../interfaces/rickAndMorty"

dotenv.config()

const apiRAM: any = process.env.API_KEY
const character: any = process.env.CHARACTER




const getAllData = async (): Promise<rickAndMorty | undefined> => {
  try {
    const response = await fetch(apiRAM + character);

    if (!response.ok) {
      throw new Error("error to fetch");

    }

    const rickandmortyData = await response.json();
    const resultsRAM = rickandmortyData.results;
    return resultsRAM;
  } catch (error) {
    console.log(error);

  }



}

getAllData();




// const getAllTitlesCharcters = async () => {
//   try {

//     const characters: any = await getAllData();
//     if (characters instanceof Error) {
//       throw characters;
//     }

//     const characterNames = characters.filter((character: any) => character.results.name);

//     return characterNames;
//   } catch (error) {
//     console.log(error);

//   }
// }
// getAllTitlesCharcters()


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

const main = async () => {
  const allData = await getAllData();
  console.log(allData);
  // const allCharacters = await getAllTitlesCharcters();
  // console.log(allCharacters);
  const byId= await getCharacterById(18)
  console.log(byId);

}

main();

