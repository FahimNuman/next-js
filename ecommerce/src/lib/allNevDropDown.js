export default async function getAllNevDropDown() {
  try {
    const serviceTypesResponse = await fetch('http://localhost:5047/api/FrontendApi/NavDropDown/GetServiceType');
    const serviceTypes = await serviceTypesResponse.json();

    const categoriesPromises = serviceTypes.map(async serviceType => {
      const categoriesResponse = await fetchCategories(serviceType.ServiceTypeID);
      return categoriesResponse.json();
    });

    const categoriesArrays = await Promise.all(categoriesPromises);
    const categories = categoriesArrays.flat(); //--------------- Flatten the array of arrays

    const subCategories = {};

    await Promise.all(categories.map(async category => {
      const subCategoriesResponse = await fetchSubCategories(category.CategoryID);
      subCategories[category.CategoryID] = await subCategoriesResponse.json();
    }));

    return { serviceTypes, categories, subCategories };
  } catch (error) {
    console.error('Error fetching dropdown data:', error);
    return null;
  }
}

async function fetchCategories(serviceTypeId) {
  try {
    const response = await fetch(`http://localhost:5047/api/FrontendApi/NavDropDown/GetCategory?ServiceTypeID=${serviceTypeId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching categories for ServiceTypeID ${serviceTypeId}:`, error);
    return null;
  }
}

async function fetchSubCategories(categoryId) {
  try {
    const response = await fetch(`http://localhost:5047/api/FrontendApi/NavDropDown/GetSubCategory?CategoryID=${categoryId}`);
    return response;
  } catch (error) {
    console.error(`Error fetching subcategories for CategoryID ${categoryId}:`, error);
    return null;
  }
}
