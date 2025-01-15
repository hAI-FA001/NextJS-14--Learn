const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'

const DrinksPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const data = await fetch(url).then((res) => res.json())
  console.log(data)

  return <div>DrinksPage</div>
}

export default DrinksPage
