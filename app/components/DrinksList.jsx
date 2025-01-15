import Link from 'next/link'

const DrinksList = ({ drinks }) => {
  return (
    <div>
      {drinks.map((drink) => (
        <Link key={drink.idDrink} href={`/drinks/${drink.idDrink}`}>
          <h1 className="text-xl">{drink.strDrink}</h1>
          <h2 className="text-xs">
            {drink.strCategory} | {drink.strAlcoholic} | {drink.strGlass}
          </h2>
          <p className="text-md">{drink.strInstructions}</p>
          <img src={drink.strImageSource} alt={drink.strDrink} />
        </Link>
      ))}
    </div>
  )
}

export default DrinksList
