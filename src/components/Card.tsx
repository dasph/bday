import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useCypher } from '../useCypher'
import { birthdayWishes } from '../utils'

type Params = {
  userName: string;
  userAge: string;
}

const getRandomAge = () => 40 + ~~(Math.random() * 20)

export const Card = () => {
  let { userName, userAge } = useParams<Params>()

  const values = ['${userName}', 'useState()', `<h2>result</h2>`, 'values[0]', '{slot}', 'U u = new U()'].sort(() => .5 - Math.random())
  const [name, setName] = useCypher(values[0])
  const [age, setAge] = useCypher()

  const [wish, setWish] = useState(['', ''])

  const wishId = ~~(Math.random() * 2)

  useEffect(() => {
    setWish(birthdayWishes(+userAge)[wishId])
    setAge(userAge)

    let ageInt: NodeJS.Timer;
    let i = 1
    let j = 1

    const nameInt = setInterval(() => {
      setName(values[i])

      i = i === 3 ? 0 : i + 1
      if (i === 0) {
        setName(userName)
        clearInterval(nameInt)
      }
    }, 1500)

    setTimeout(() => {
      ageInt = setInterval(() => {
        const age = getRandomAge()
        setAge(`${age}`)
        setWish(birthdayWishes(age)[wishId])

        j = j === 3 ? 0 : j + 1
        if (j === 0) clearInterval(ageInt)
      }, 2000)
    }, 8000)

    return () => {
      clearInterval(nameInt)
      clearInterval(ageInt)
    }
  }, [])

  return (
    <article className='bg-black text-white p-10 sm:px-16 max-w-full sm:max-w-3xl'>
      <h1 className='text-4xl font-medium mb-6 text-center'>{'Happy Birthday'}</h1>
      <div className='text-2xl font-light'>
        <div className='flex items-center mb-4'>
          <h2 className='mr-4'>{'Dear,'}</h2>
          <h2 className='bg-white text-black p-1 px-4 font-medium'>{name}</h2>
        </div>
        <div className='flex flex-wrap text-xl text-justify'>
          <h2>{wish[0]}<span className='bg-white text-black mx-2 px-2 font-medium inline-block'>{age}</span>{wish[1]}</h2>
        </div>
      </div>
    </article>
  )
}
