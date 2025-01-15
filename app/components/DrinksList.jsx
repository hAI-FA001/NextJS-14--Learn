import Image from 'next/image'
import Link from 'next/link'

const DrinksList = ({ drinks }) => {
  return (
    <ul className="menu menu-vertical pl-0 w-fit">
      {drinks.map((drink) => (
        <li key={drink.idDrink}>
          <Link
            href={`/drinks/${drink.idDrink}`}
            className="text-xl font-medium w-full"
          >
            <h1 className="text-xl w-28">{drink.strDrink}</h1>
            <h2 className="text-xs w-16">{drink.strCategory}</h2>
            <br />
            <p className="text-sm truncate">{drink.strInstructions}</p>
            <Image
              src={drink.strDrinkThumb}
              alt={drink.strDrink}
              className="rounded-md object-cover opacity-50"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DrinksList
