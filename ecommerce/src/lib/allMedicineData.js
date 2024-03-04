export default async function getAllMedicine(){
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10',{
    
        next:{
            revalidate: 5
        }
    }
    )

    return result.json();
}
