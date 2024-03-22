export default async function getAllProducts(){
    const result = await fetch('http://localhost:4000/products',{
    
        next:{
            revalidate: 5
        }
    }
    )

    return result.json()
}