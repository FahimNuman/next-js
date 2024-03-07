export default async function getAllTherapeuticData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {

        next: {
            revalidate: 5
        }
    }
    )
    return result.json();
}
