


import {
    getAllData, getAllTitlesCharcters, getCharactersByGender, getCharacterById, getMappedCharactersData
} from "./model/model";

const main = async () => {
    try {
        const args = process.argv.splice(2);
        console.log(args);
        const action = args[0];


        switch (action) {
            case 'getAllData':
                const allData = await getAllData();
                console.log(allData);
                break;
            case 'getAllTitlesCharacters':
                const titles = await getAllTitlesCharcters();
                console.log(titles);
                break;
            case 'getCharacterById':
                const id = Number(args[1]);
                const character = await getCharacterById(id);
                console.log(character);
                break;


            case 'getCharactersByGender':
                const gender = await getCharactersByGender(args[1]);
                console.log(gender);
                break;
            case 'getMappedCharactersData':
                const mappedCharactersData = await getMappedCharactersData();
                console.log(mappedCharactersData);
                break;
            default:
                console.error('Método no reconocido');
                break;
        }
    } catch (error) {
        return error;
    }
};

main();