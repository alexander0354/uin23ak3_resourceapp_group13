import resources from "../resources/ressurser";

export default function Resources({category}) {
  const filteredResources = resources.filter(resource => resource.category === category);

  return (
    <ul>
      {filteredResources.map(item => (
        <li key={item.title}>
          <a href={item.url} target="_blank" rel="">{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
