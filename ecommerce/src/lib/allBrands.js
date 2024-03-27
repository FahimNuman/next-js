export default async function getAllBrands(){
    try {
        const result = await fetch('http://localhost:5047/api/FrontendApi/Product/GetSkuBrand',{
            next: {
                revalidate: 5
            }
        });
        const data = await result.json();
        const brandNames = data.map(brand => brand.SkuBrandName);
        return brandNames;
    } catch (error) {
        console.error('Error fetching SkuBrandNames:', error);
        return [];
    }
}