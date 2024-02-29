export default async function getAllPost(){
    const result = await fetch('http://localhost:4000/categories');

    return result.json();
};