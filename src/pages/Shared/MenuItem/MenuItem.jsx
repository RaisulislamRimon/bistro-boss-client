export default function MenuItem({ item }) {
  const { image, price, name, recipe } = item;
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h3>{name} ----------</h3>
        <p>{recipe}</p>
      </div>
      <p>{price}</p>
    </div>
  );
}
