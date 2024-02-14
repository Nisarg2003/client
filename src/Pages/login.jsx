import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout/Layout'
import CommonLayout from '../Layout/CommonLayout'
import axios from 'axios'

const Login = () => {
  const imageLogoImage = "https://s3-alpha-sig.figma.com/img/95ba/3481/3ad994db5b5e421121cc1ef38e21523e?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DT7LoXockAWf5-7MafqzBO6U5Z79HxJPBOneR3SfSW6lEeg-CyRmVS16BYjuM24HIVXuseqYpz3LJMFGvBEac~Mp6nzCv16HfwUoT32zTd-xpKnusPRxhYDEdgQlXpBgAHvzHVR8YiIXrcrYAEwUCFsHOou2w3sGIuqb8lLJ1W5gBF3fC~Fa03h7lO9d6EQBVhSxkSToQHuNJ3FVfP-UyFUvz-6E4zVt4Lb5KwdnbqKhHxOStQokD3VxBqaERnhKcz5Y0peKKCEE3-K1-04PFaSqqgBTzuyHUfhIFcIw7P1rXwJTsMvLbJpRmo4yUZThsOAkATvopi3EMLsy~ZTicA__"
  const [signUp,setSignUp] = useState(true);
  const navigate = useNavigate();
  const [hospital_name,sethospital_name] = useState('')
  const [email_id,setemail_id] = useState('')
  const [address,setaddress] = useState('')
  const [phone_number,setphone_number] = useState(null)
  const [city,setcity] = useState('')
  const [hospital_registration_number,sethospital_registration_number] = useState('')
  const [state,setstate] = useState('')
  const [emergency_word_number,setemergency_word_number] = useState('')
  const [pincode,setpincode] = useState('')
  const [hospital_registration_date,sethospital_registration_date] = useState('')
  const [password,setpassword] = useState('')
  const [number_of_ambulance_available,setnumber_of_ambulance_available] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  const handleLogin = () => {
    setSignUp(false);
  } 
  const handleSignUp = () => {
    setSignUp(true);
  } 
  const handleClickCapturePhoto = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("https://server-nd0j.onrender.com/api/v1/login",{
      hospital_name,email_id,password
    })
    
    if(res.data.success){
      console.log("Login Successfully")
      localStorage.setItem("user",JSON.stringify({...res.data.data._id}))
      navigate('/capturePhoto')
    }else{
      console.log("Error in something")
    }

} catch (error) {
    console.log(error)
    console.log("Something not happens correctly")
}

}


  const handleSignUpSubmit = async(e) =>{
    e.preventDefault();

    if(password===confirmPassword){

      try {
        const res = await axios.post("https://server-nd0j.onrender.com/api/v1/register",{
        hospital_name,email_id,address,phone_number,city,hospital_registration_number,state,emergency_word_number,pincode,hospital_registration_date,password,number_of_ambulance_available
      })
      
      if(res.data.success){
        handleLogin()

      }else{
        console.log("Error in something")
      }
  
  } catch (error) {
      console.log(error)
      console.log("Something not happens correctly")
  }
}else{
  console.log("Enter the correct password")
}
  console.log({hospital_registration_date})
}
  
 

  const imageLogo = {
    backgroundImage: `url(${imageLogoImage})`,
    width: '98px',
    height: '98px',
    top: '73px',
    position: 'relative',
    left: '10px',
    backgroundSize: 'cover',
  };
  return (
    <>
       <div className="flex ">
      <div className="mr-4">
        <img style={imageLogo} src={imageLogoImage} alt="Logo"></img>
      </div>
      <div className="flex ml-[120px] mt-[100px]">
        <button autoFocus className="font-poppins font-semibold text-2xl leading-10 text-gray-400 mx-4 cursor-pointer focus:text-indigo-600 focus:outline-none" onClick={handleSignUp}>SignUp <span className='mx-2'> /</span></button>
        <button className="font-poppins font-semibold text-2xl leading-10 text-gray-400 mx-0 cursor-pointer focus:text-indigo-600 focus:outline-none" onClick={handleLogin}>Login</button>
      </div>
    </div>


      {signUp ? <>
        <div className="flex  h-screen">
      <form onSubmit={handleSignUpSubmit} className="grid grid-cols-2 gap-10 mb-10  mt-[110px]">
        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Hospital Name'
            onChange={(e) => sethospital_name(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>


        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Email Id'
            onChange={(e) => setemail_id(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>
        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Address'
            onChange={(e) => setaddress(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        <div className="flex flex-col mb-4 ">
          <input
            type="number"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Phone Number'
            onChange={(e) => setphone_number(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='City'
            onChange={(e) => setcity(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Hospital Registration Number'
            onChange={(e) => sethospital_registration_number(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        

        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='State'
            onChange={(e) => setstate(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Emergency-Word Number'
            onChange={(e) => setemergency_word_number(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        <div className="flex flex-col mb-4 ">
          <input
            type="number"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Pincode'
            onChange={(e) => setpincode(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            name='Registration certificate Upload'
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Registration certificate Upload'
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>
        

        <div className="flex flex-col mb-4 ">
          <input
            type="date"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Hospital Registration Date'
            onChange={(e) => sethospital_registration_date(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>
        <div>
        <button
      className="w-[120px] h-[40px] mt-[-30px] bg-white text-black font-poppins text-xl font-semibold leading-7 rounded-md absolute top-855 left-912 focus:outline-none"
      style={{
        borderRadius: '15px',
        background: '#261E3B',
        fontSize: '18px',
        fontWeight: '600',
        color:'white',
        lineHeight: '27px',
        letterSpacing: '0em',
        textAlign: 'center',
      }}>
        Upload
        </button>
        </div>
        <div className="flex flex-col mb-4 ">
          <input
            type="number"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Number of Ambulance available'
            onChange={(e) => setnumber_of_ambulance_available(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>

        <div className="flex flex-col mb-4 ">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px] mt-[-30px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Create Password'
            onChange={(e) => setpassword(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>
        <div className="flex flex-col mb-4 "></div>
        <div className="flex flex-col mb-4 mt-[-35px]">
          <input
            type="text"
            id="field1"
            className="w-[320px] h-[32px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Confirm Password'
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
        </div>
        <button
      className="relative w-[160px] h-[50px] bg-white text-black ml-[270px] mt-[0px] font-poppins text-xl font-semibold leading-7 rounded-md absolute top-855 left-912 focus:outline-none"
      type='submit'
      style={{
        borderRadius: '15px',
        background: '#261E3B',
        fontSize: '18px',
        fontWeight: '600',
        color:'white',
        lineHeight: '27px',
        letterSpacing: '0em',
        textAlign: 'center',
      }}>
        Sign Up
        </button>

      </form>
    </div>
    </>
    :
    <>
    <div className="w-[514px] h-[540px] bg-white rounded-lg shadow-lg absolute mb-10 ml-[120px] mt-[90px] shadow-md" 
      style={{boxShadow: '10px 10px 20px 0 rgba(0, 0, 0, 0.15)',borderRadius: '30px', }}
             
      >
      <div className="text-white p-6">
        <h1
          className="font-poppins font-semibold text-2xl leading-10 mb-4"
          style={{
            width: '274px',
            height: '36px',
            top: '34px',
            left: '130px',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'left',
            color: '#261E3B',
            position: 'absolute', 
          }}
        >
          Welcome to Sicu-aura
        </h1>
        <p
          className="font-poppins text-sm font-normal leading-5"
          style={{
            width: '411px',
            height: '21px',
            top: '84px',
            left: '50px',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '21px',
            letterSpacing: '0em',
            textAlign: 'center',
            color: '#BCBCBC',
            position: 'absolute',
          }}
        >
          Your one-stop safety solutions using innovative technology
        </p>
        </div>
          <form onSubmit={handleClickCapturePhoto}>
        <div className="flex flex-col mb-4">

        <input
          type="text"
          className="w-[320px] h-[32px] mt-[120px] ml-[100px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
          placeholder='Hospital Name'
          onChange={(e) => sethospital_name(e.target.value)}
            required
          style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
      </div>
        <div className="flex flex-col mb-4">

        <input
          type="text"
          className="w-[320px] h-[32px] mt-[32px] ml-[100px] border-b border-gray-300 focus:border-black p-2 focus:outline-none"
          placeholder='Email Id '
          onChange={(e) => setemail_id(e.target.value)}
            required
          style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
      </div>
        <div className="flex flex-col mb-4">

        <input
          type="text"
          className="w-[320px] h-[32px] mt-[32px] ml-[100px]  border-b border-gray-300 focus:border-black p-2 focus:outline-none"
          placeholder='Password'
          onChange={(e) => setpassword(e.target.value)}
            required
          style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
          />
      </div>
          <div className="flex flex-col mb-4">

          <input
            type="text"
            className="w-[320px] h-[32px] ml-[100px] mt-[32px] border-b border-gray-300 focus:border-black p-2 focus:outline-none"
            placeholder='Special Access Code'
            style={{ fontFamily: 'Poppins', fontWeight: 400, color: '#000000',  fontSize: '18px', lineHeight: '27px' }}
            />
        </div>

        <button
      className="w-[160px] h-[50px] bg-white text-black ml-[160px] mt-[140px] font-poppins text-xl font-semibold leading-7 rounded-md absolute top-855 left-912 focus:outline-none"
      type='submit'
      style={{
        borderRadius: '15px',
        background: '#261E3B',
        fontSize: '18px',
        fontWeight: '600',
        color:'white',
        lineHeight: '27px',
        letterSpacing: '0em',
        textAlign: 'center',
      }}>
      <span>
      Capture Photo
      </span>
    </button>
          </form>
    </div>
    
    </>}
      
    </>

  )
}

export default Login