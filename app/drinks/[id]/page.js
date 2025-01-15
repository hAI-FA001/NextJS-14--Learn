import Link from 'next/link'
import drinkImg from './pexels-tasveerwala-2842876.jpg'
import Image from 'next/image'

// console.log(drinkImg)  // is an object

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'

const SingleDrinkPage = async ({ params }) => {
  console.log(await params)
  const id = (await params).id

  const data = await fetch(`${url}?i=${id}`).then((res) => res.json())
  //   console.log(data)
  const drink = data.drinks[0]

  return (
    <div>
      <Link href="/drinks" className="btn btn-primary mt-8 mb-12">
        Go Back
      </Link>
      <h1 className="text-xl w-32">{drink.strDrink}</h1>
      <h2 className="text-xs w-16">{drink.strCategory}</h2>
      <br />
      <Image
        src={drinkImg}
        className="w-48 h-48 rounded-lg"
        alt={drink.strDrink}
      />
      <p className="text-sm truncate min-w-96">{drink.strInstructions}</p>
      {/* <img src={drink.strDrinkThumb} alt={drink.strDrink} /> */}
      {/* <img src={drinkImg.src} alt="" /> */}{' '}
      {/* very slow + layout shifting */}
    </div>
  )
}

export default SingleDrinkPage
