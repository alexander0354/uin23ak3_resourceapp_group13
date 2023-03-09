import resources from "../resources/ressurser";

export default function Resources({category}) {
    console.log(resources.map(item => item.category === category ? item.title : null))
    return (
        <ul>
            {resources.map(item => item.category === category ? <p>{item.title}</p> : null)}
        </ul>
    )
}