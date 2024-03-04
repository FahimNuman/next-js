
export default async function getAllCategoriesByCare(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts',{
    
        next:{
            revalidate: 5
        }
    }
    )

    return result.json();
}