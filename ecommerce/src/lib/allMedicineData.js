export default async function getAllMedicine(){
    const result = await fetch('http://localhost:5047/api/FrontendApi/NavDropDown/GetAllDisease?CategoryID=30',{
    
        next:{
            revalidate: 5
        }
    }
    )

    return result.json();
}
