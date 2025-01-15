import Link from 'next/link'

const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium"
          >
            <h1 className="text-xl w-32">{drink.strDrink}</h1>
            <h2 className="text-xs w-16">{drink.strCategory}</h2>
            <br />
            <p className="text-sm truncate min-w-96">{drink.strInstructions}</p>
            <img src={drink.strImageSource} alt={drink.strDrink} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DrinksList
