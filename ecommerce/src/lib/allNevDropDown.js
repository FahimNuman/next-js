export default async function getAllNevDropDown() {
    try {
      const serviceTypesResponse = await fetch('http://localhost:5047/api/FrontendApi/NavDropDown/GetServiceType');
      const serviceTypes = await serviceTypesResponse.json();
  
      const categoriesResponse1 = await fetchCategories(5);
      const categoriesResponse2 = await fetchCategories(10);
  
      const categories1 = await categoriesResponse1.json();
      const categories2 = await categoriesResponse2.json();
  
      const categories = [...categories1, ...categories2];
  
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
  