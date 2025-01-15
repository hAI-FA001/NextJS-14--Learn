import Link from 'next/link'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'

const SingleDrinkPage = async ({ params }) => {
  console.log(await params)
  const id = (await params).id

  const data = await fetch(`${url}?i=${id}`).then((res) => res.json())
  console.log(data)
  const drink = data.drinks[0]

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Go Back
      </Link>
      <h1 className="text-xl w-32">{drink.strDrink}</h1>
      <h2 className="text-xs w-16">{drink.strCategory}</h2>
      <br />
      <p className="text-sm truncate min-w-96">{drink.strInstructions}</p>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
    </div>
  )
}

export default SingleDrinkPage
