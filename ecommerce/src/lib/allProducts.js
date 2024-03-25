export default async function getAllProducts(){
    const result = await fetch('http://localhost:5047/api/FrontendApi/Product/GetSku?SubCategoryID=2',{
    
        next:{
            revalidate: 5
        }
    }
    )

    return result.json()
}