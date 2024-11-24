import { CheckCircle2, Eye, EyeOff, User } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Stage1 = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve the selected platform from navigation state
  const { platform } = location.state || {};

  const handleNext = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!platform) {
      alert('Please select a platform first.');
      return;
    }
    navigate('/stage2', { state: { username, password, platform } });
  };

  return (
    <div className='loginContainer  h-[60vh] flex flex-col gap-10 rounded-md w-[25vw] border-2 border-black bg-white '>
      <div className='flex justify-evenly p-6'>
        <CheckCircle2  className='bg-green-500 rounded-full'/>
        <p className='rounded-full border border-black px-2 py-1 '>2</p>
        <p className='rounded-full border border-black px-2 py-1 '>3</p>
      </div>
      <h1 className='text-3xl text-center font-medium'>LOGIN</h1>
      {/* <div className='flex justify-center items-center relative'>
      <User className='absolute right-24'/>
      <input  type='text' className='rounded-lg border px-3 py-2 border-neutral-300' placeholder='username' />
      </div>
      <div className='flex justify-center items-center relative'>
        <button
          type="button"
          className="absolute top-0 right-24 p-2"
          onClick={togglePasswordVisibility}
        >
          {passwordType === 'password' ? <Eye/> : <EyeOff/>}
        </button>
        <input type={passwordType} className='rounded-lg border px-3 py-2 border-neutral-300' placeholder='password' />
      </div>
      <div className='flex justify-center '>

          <Link className='hover:no-underline bg-green-500 rounded-md px-3 py-2 w-20 flex justify-center items-center ' to='/stage2'>Next</Link>
      </div> */}

      <form onSubmit={handleNext}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default Stage1
