
export default async function getAllCategoriesByCare(){
    const result = await fetch('http://localhost:4000/categories',{
        cache:'no-cache',
        next:{
            revalidate: 5
        }
    }
    )

    return result.json();
}