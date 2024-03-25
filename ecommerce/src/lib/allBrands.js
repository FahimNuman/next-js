export default async function getAllBrands(){
    const result = await fetch('http://localhost:5047/api/FrontendApi/Product/GetSkuBrand',{
    
        next:{
            revalidate: 5
        }
    }
    )
    const data = result.json();

    return data;
}
