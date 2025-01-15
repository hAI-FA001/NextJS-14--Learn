import Link from 'next/link'
import DrinksList from '../components/DrinksList'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const addDelay = async () =>
  await new Promise((resolve) => setTimeout(resolve, 1000))

const throwError = () => {
  throw new Error('Failed to fetch')
}

const DrinksPage = async () => {
  // await addDelay()
  // throwError()

  const data = await fetch(url).then((res) => res.json())
  // console.log(data)

  return <DrinksList drinks={data.drinks} />
}

export default DrinksPage
