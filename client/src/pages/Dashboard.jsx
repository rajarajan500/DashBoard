import react from 'react'
import {useNavigate} from 'react-router-dom'

function Dashboard(){ 
    const navigate = useNavigate()
    const clear = ()=>{localStorage.removeItem('token')
        navigate('/')
    }

    return(
      <div className="h-screen bg-gray-100">
      <nav className="sticky top-0 bg-white shadow-md backdrop-filter: blur(10px)">
        <div className="container mx-auto p-4 flex justify-between">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <button onClick={clear} className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-pink-500 hover:to-orange-500 text-white font-bold py-2 px-4 rounded-full">log out</button>
        </div>
      </nav>
      <main className="container mx-auto p-4 mt-12">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4 hover:translateY(-8px) transition duration-300">
            <h2 className="text-2xl font-bold">Card 1</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:translateY(-8px) transition duration-300">
            <h2 className="text-2xl font-bold">Card 2</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 hover:translateY(-8px) transition duration-300">
            <h2 className="text-2xl font-bold">Card 3</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold">Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">Users</h3>
              <p className="text-gray-600">1000</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">Sales</h3>
              <p className="text-gray-600">$1000</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">Revenue</h3>
              <p className="text-gray-600">$10000</p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold">News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">News 1</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">News 2</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-bold">News 3</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </section>
      </main>
    </div>)

}

export default Dashboard