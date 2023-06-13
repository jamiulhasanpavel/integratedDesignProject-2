import { Link } from 'react-router-dom'

function navbar() {
  return (
    
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/'>Academic_Course</Link>
        <Link to='/'>Skill_Development</Link>
        <Link to='/'>Motivation</Link>
        <Link to='/'>university_level_courses</Link>
    </nav>
  )
}

export default navbar