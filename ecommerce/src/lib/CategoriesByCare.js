
export default async function getAllCategoriesByCare(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts',{
        cache:'no-cache',
        next:{
            revalidate: 5
        }
    }
    )

    return result.json();
}