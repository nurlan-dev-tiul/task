import React from 'react'
import { Link } from 'react-router-dom';
import { TaskList } from '../components/list'; 

const Home = () => {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Link className='home_link' to='/create'>
          Добавить задачу
        </Link>
      </div>
			<TaskList />
		</div>
  )
}

export default Home
