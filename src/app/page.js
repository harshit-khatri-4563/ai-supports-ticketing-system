import Link from 'next/link';
import "./homepage.css";

function HomePage() {
  return (
    <div className='Home'>
      <h1>Welcome to the Main Page</h1>
      <nav>
        <ul>
          <li><Link href="/user">User Dashboard</Link></li>
          <li><Link href="/admin">Admin Dashboard</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
