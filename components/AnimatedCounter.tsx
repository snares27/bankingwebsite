'use client';
import CountUp from 'react-countup';


const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-fulls'>
        <CountUp
          duration={2.75}
          decimals={2}
          decimal="."
          prefix="$"
        end={amount} />
    </div>
  )
}

export default AnimatedCounter