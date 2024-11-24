import { CheckCircle2 } from 'lucide-react'
import  { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Stage2 = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve existing state
  // const { platform, username, password } = location.state || {};
  const { platform = '', username, password } = location.state || {};

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setSelectedOptions((prev) =>
      checked ? [...prev, value] : prev.filter((option) => option !== value)
    );
  };

  const handleNext = () => {
    if (!username || !password || !platform) {
      alert('Username, password, and platform are required.');
      return;
    }
    if (selectedOptions.length === 0) {
      alert('Please select at least one option.');
      return;
    }
    navigate('/stage3', { state: { platform, username, password, selectedOptions } });
  };


    // function handleCheckboxChange(event) {
    //     const { value, checked } = event.target;

    //     if (checked) {
    //         setCheckedItems([...checkedItems, value]);
    //     } else {
    //         setCheckedItems(checkedItems.filter((item) => item !== value));
    //     }
    // }


  // Define options based on platform
  let options = [];
  if (platform === 'instagram') {
    options = [
      { value: 'followers', label: 'Parse Followers' },
      { value: 'chats', label: 'Parse Chats' },
      { value: 'posts', label: 'Parse Posts' }
    ];
  } else if (platform === 'twitter') {
    options = [
      { value: 'followers', label: 'Parse Friends' },
      { value: 'chats', label: 'Parse Messages' },
      { value: 'posts', label: 'Parse Posts' }
    ];
  } else if (platform === 'facebook') {
    options = [
      { value: 'followers', label: 'Parse Friends' },
      { value: 'chats', label: 'Parse Messages' },
      { value: 'posts', label: 'Parse Posts' }
    ];
  }

  return (
      <div className='loginContainer  h-[60vh] flex flex-col gap-3 rounded-md w-[25vw] border-2 border-black bg-white '>
          <div className='flex justify-evenly p-6'>
              <CheckCircle2 className='bg-green-500 rounded-full'/>
              <CheckCircle2 className='bg-green-500 rounded-full'/>
            <p className='rounded-full border border-black px-2 py-1 '>3</p>

          </div>
          {/* <h1 className='text-3xl text-center font-medium'>Select The Social Media </h1>
          <div  className='flex flex-col gap-3 px-20 '>
            <div className='flex gap-3'>

              <input
                  type="checkbox"
                  id="checkbox1"
                  value="Everything"
                  checked={checkedItems.includes('Everything')}
                  onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox1">Parse Everything</label>
            </div>
              <div className='flex gap-3'>

              <input
                  type="checkbox"
                  id="checkbox2"
                  value="Posts"
                  checked={checkedItems.includes('Posts')}
                  onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox2">Parse Posts</label>   
            </div>
              <div className='flex gap-3'>

              <input
                  type="checkbox"
                  id="checkbox3"
                  value="Chats"
                  checked={checkedItems.includes('Chats')}
                  onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox3">Parse Chats</label>   
            </div>
              <div className='flex gap-3'>

              <input
                  type="checkbox"
                  id="checkbox4"
                  value="Comments"
                  checked={checkedItems.includes('Comments')}
                  onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox4">Parse Comments</label>   
            </div>
              <div className='flex gap-3'>

              <input
                  type="checkbox"
                  id="checkbox5"
                  value="LikedPosts"
                  checked={checkedItems.includes('LikedPosts')}
                  onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox5">Parse Liked Posts</label>   
            </div>
              <div className='flex gap-3'>

              <input
                  type="checkbox"
                  id="checkbox6"
                  value="Metadata"
                  checked={checkedItems.includes('Metadata')}
                  onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox6">Parse Metadata</label>   
            </div>
            <div className= ' bg-orange-500 text-center w-20 rounded-xl px-3 py-2 m-auto'>
                <Link to='/stage3' className='hover:no-underline'>Parse</Link>
            </div>
          </div> */}


      {/* <h2>Select Options for { platform.charAt(0).toUpperCase() + platform.slice(1)}</h2> */}
      <h2>Select Options for {platform ? `${platform.charAt(0).toUpperCase()}${platform.slice(1)}` : 'Platform'}</h2>
      {/* <h2>Select Options for {platform?.charAt(0).toUpperCase() + platform.slice(1)}</h2> */}
      {options.map(option => (
        <div key={option.value}>
          <input
            type="checkbox"
            value={option.value}
            onChange={handleCheckboxChange}
          />
          <label>{option.label}</label>
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
            
      </div>
  )
}

export default Stage2
