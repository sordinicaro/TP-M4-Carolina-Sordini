import dotenv from "dotenv"

dotenv.config()

const apiRAM : any = process.env.API_KEY
const character : any = process.env.CHARACTER




const getAllData = async () => {
    try{
       const response = await fetch(apiRAM + character);
       
       if (!response.ok) {
        throw new Error("error to fetch");

    }
       
       const rickandmortyData = await response.json();
       const resultsRAM = rickandmortyData.results;
       console.log(resultsRAM);
    } catch (error) {
        console.log(error);

    }
    
    
    
}

getAllData();
