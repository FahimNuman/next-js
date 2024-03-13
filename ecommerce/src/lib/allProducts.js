export default async function getAllProducts(){
    const result = await fetch('http://localhost:4001/products',{
    
        next:{
            revalidate: 5
        }
    }
    )

    return result.json()
}