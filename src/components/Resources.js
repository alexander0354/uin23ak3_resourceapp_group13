import resources from "../resources/ressurser";

export default function Resources({category}) {
    return (
        <ul>
            {resources.map(item => item.category === category ? (
                <li key={item.url}>
                    <a href={item.url} target="_blank">{item.title}</a>
                </li>
            ) : null)}
        </ul>
    )
}