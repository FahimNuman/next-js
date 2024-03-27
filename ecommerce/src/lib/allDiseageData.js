export default async function getAllDiseases(){
    const result = await fetch('http://localhost:5047/api/FrontendApi/NavDropDown/GetAllDisease?CategoryID=33',{
    
        next:{
            revalidate: 5
        }
    }
    )
    return result.json();
}


