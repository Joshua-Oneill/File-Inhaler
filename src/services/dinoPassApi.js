 export const getDinoPass = async () => {
    const response = await fetch('http://www.dinopass.com/password/strong');
    const data = await response.text();
    return data;
 };