import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const addDelay = async () =>
  await new Promise((resolve) => setTimeout(resolve, 100))

const throwError = () => {
  throw new Error('Failed to fetch')
}

const DrinksPage = async () => {
  await addDelay()
  // throwError()

  const data = await fetch(url).then((res) => res.json())
  console.log(data)

  return (
    <div>
      {data['drinks'].map((drink) => (
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

export default DrinksPage
