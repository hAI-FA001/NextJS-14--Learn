const SingleDrinkPage = async ({ params }) => {
  console.log(await params)

  return (
    <div>
      <h1 className="text-7xl">Drink ID - {(await params).id}</h1>
    </div>
  )
}

export default SingleDrinkPage
