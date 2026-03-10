import ButtonComponent from "./button";

export default async function contact() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);
    return (
        <div>
            <ButtonComponent/>
        </div>
    )
}