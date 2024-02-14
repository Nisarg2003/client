import React, { useEffect, useState, useMemo } from 'react';
import '../App.css';
import nameLogo from '../Images/logo_name.png';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import _ from "lodash";


const HomePage = () => {
  const innerImage = "https://s3-alpha-sig.figma.com/img/727a/92e5/b27c5c3c589ffa6708563860edcef108?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXsJddy-3Nj6u0uqOgv2iQ7OisuXcgzGR7lyK3rn1kIxuYw57nWAKYygGqoSvOtPgqjB7T-bFgZ-9VpbIqDtpjb6v00xnF8yD5CkWogSEPTKPK9CkcNcsSkZP6L962nb0etFcXalFVOU5i6FVZDQkupT6oBqApg9vA-ECJaGq6lCalVpyu7MfhQvJ~rjbAimgRr5SyUzW-stWi2oCaVFUsfg1PHsgD8CAAZkx-3i1TUCMfAf4CmTBVzk4boIW-jsIM5PFnd0niGEycHu5p1ooNGVULa3RfsUebBn9MGir-OGwSejL~q5L1nEviNj7onpPFmVVvXT3MyYEtJWOlVbLw__";
  const dummy_avtar = "https://s3-alpha-sig.figma.com/img/7613/cc02/2594f285820486376a1a39bb46ce87a2?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dYQUye-foKLt4nZoNW83~3AHIF-mtkLckTRt~RDDf9-jHXXNJYRmGrjhsPDRGeyFUNGV5cUqiW9ZfFszfbs0F1AIbTc5gg~me--OTflgsqYjL6upFd~F7l2y2UmQoQHCuIVr01Jt3M5Qbqu2bH34~j9N52SAfklaewO6YbIUkn4xpc2ZwHzYqzPn3Rirg1~LtoqZRmkapxfYl9db3JretuG1SNjdTQ0E7oi4-4c8picOFsAKpe5~A95YwrnV8Qr8vUHFlyUaUfM4vi6~hSLbAzf8kDe9PF2jg7iMdJdRqzjtdbuo3wiDkkMDAW-JvLMzte6Ts~wydRHVYndEoEk69w__";
  const image = "https://s3-alpha-sig.figma.com/img/3e7a/b867/bc187385a649e42acf686a7116e83d56?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WtyOShhRHGgHDIVc-ZlSOcbW8KbDkUQ4EMGKWP-itYAh3LLHP7giiAxFJE9sOTk4IKGbh5ZcuszvlK3npD0QbXqau6DEYo2zubujIRJksih6Fb5Mv~aS4m3XmMEKD24PEI9nAmdKwofLNB0zRTFC5Ym82eJM6ydTE1rWjYz0eSHroAute0gDV9ITeGyzIFsZzHtTBa4gtyPXHXlueWcQZErF7GFaqgqaxaS1~EnUhHFnqtGz3BFfGK7mdTrnCzpDFaaeMDLyh4OIAb~9H7qKqBDNvtMjxRicEDoSM5biQ07J3wzY3OMjOp1QhIihJpT2B~Nf-uJZILhNBQ3yUy6qRw__";
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://server-nd0j.onrender.com/api/v1/get-data');
      if (res.data) {
        const formattedData = res.data.data.map(item => {
          const dateObject = new Date(item.hospital_registration_date);
          const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          };
          const formattedDate = dateObject.toLocaleString('en-IN', options);
          return { ...item, hospital_registration_date: formattedDate };
        });
        setData(formattedData);
        console.log(res.data);
      } else {
        console.log("There is an error in getting data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 

  const debouncedSearch = useMemo(
    () =>
      _.debounce(async (term) => {
        try {
          const response = await axios.post(
            `https://server-nd0j.onrender.com/api/v1/searchHospital?search=${term}`
          );
          setSearchResults(response.data);
          console.log(response.data);
        } catch (error) {
          console.error("Error searching user:", error);
        }
      }, 500),
    []
  );

  useEffect(() => {
    debouncedSearch(searchTerm);
    return () => debouncedSearch.cancel();
  }, [searchTerm, debouncedSearch]);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate('/login');
  };

  return (
    <div className='bg-[#f3faff]'>
      <nav className="w-[100%] h-[80px] " style={{ background: '#201A31' }}>
        <div>
          <img style={{ width: '60px', transform: 'scale(1.5)', height: '62px', backgroundSize: 'cover', position: 'absolute', top: '9px', left: '100px' }} src={innerImage} alt="Inner Image" />
        </div>
        <div>
          <img style={{ width: '132px', height: '29px', objectFit: 'cover', position: 'absolute', top: '26px', left: '160px' }} src={nameLogo} alt="Name Logo" />
        </div>
        <div>
          <img style={{ width: '50px', height: '50px', borderRadius: '100%', objectFit:'cover',position: 'absolute', top: '15px', left: '1053px' }} src={dummy_avtar} alt="Dummy Avatar" />
        </div>
        <div className='w-[96px] h-[17px]  ml-[1118px] mt-[32px] absolute'>
          <p style={{ fontFamily: 'Inter', fontSize: '14px', fontWeight: 500, lineHeight: '17px', letterSpacing: '0em', textAlign: 'left', color: "#FFFFFF", top: '32px' }}>Alex Robinson</p>
        </div>
        <button onClick={handleLogOut} className='w-[106px] h-[40px] mt-[20px] ml-[1234px] rounded-[10px] bg-[#302A41]' style={{ color: 'white', textAlign: 'center' }}>LogOut</button>
      </nav>

      <div>
        <img src={image} style={{ position: 'absolute', width: "83px", height: "83px", top: "107px", left: "1182px" }} alt="Image" />
      </div>
      <div className='absolute mt-[100px] ml-[100px]'>
        <p style={{ fontFamily: 'Poppins', fontSize: '32px', fontWeight: 500, lineHeight: '39px', letterSpacing: '0em' }} className='w-[358px] h-[39px]'>Hospital Registrations</p>
      </div>
      <div className='w-[450px] h-[40px] ml-[820px]  mt-[107px]'>
        <input
          className=" absolute w-[450px] h-[40px] p-4 rounded-[10px] "
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 400, lineHeight: '24px', boxShadow: '2px 2px 8px 0px #00000026', color: '#808080' }}
        />
        <div className="absolute ml-[420px] mt-[5px]">
          <FontAwesomeIcon icon={faSearch} size="1x" className="text-black" />
        </div>
      </div>

      <Table aria-label="Example table with dynamic " className='w-[1240px] h-[100%] mt-[40px] ml-[70px] rounded-[20px]'>
        <TableHeader className='customTableHeader'>
          <TableColumn className='w-[173px] text-center'>No.</TableColumn>
          <TableColumn className='w-[173px] text-center'>Date & Time</TableColumn>
          <TableColumn className='w-[173px] text-center'>Hospital Name</TableColumn>
          <TableColumn className='w-[173px] text-center'>Email</TableColumn>
          <TableColumn className='w-[173px] text-center'>Address</TableColumn>
          <TableColumn className='w-[173px] text-center'>Phone No.</TableColumn>
          <TableColumn className='w-[173px] text-center'>City</TableColumn>
          <TableColumn className='w-[173px] text-center'>State</TableColumn>
          <TableColumn className='w-[173px] text-center'>Pincode</TableColumn>
          <TableColumn className='w-[173px] text-center'>Hospital Registration Date</TableColumn>
          <TableColumn className='w-[173px] text-center'>Hospital Registration Number</TableColumn>
          <TableColumn className='w-[173px] text-center'>Hospital Registration Photo</TableColumn>
          <TableColumn className='w-[173px] text-center'>Emergency Word Number</TableColumn>
          <TableColumn className='w-[173px] text-center'>Number of Ambulance</TableColumn>
        </TableHeader>
        <TableBody>
          {searchTerm === '' ? 
            (data && data.map((row, index) => (
              <TableRow key={index}>
                <TableCell className='w-[173px] text-center'>{index + 1}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_registration_date}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_name}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.email_id}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.address}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.phone_number}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.city}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.state}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.pincode}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_registration_date}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_registration_number}</TableCell>
                <TableCell className='w-[173px] text-center'><Link className='color-blue-500'>file</Link></TableCell>
                <TableCell className='w-[173px] text-center'>{row.emergency_word_number}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.number_of_ambulance_available}</TableCell>
              </TableRow>
            )))
          : 
            (searchResults && searchResults.map((row, index) => (
              <TableRow key={index}>
                <TableCell className='w-[173px] text-center'>{index + 1}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_registration_date}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_name}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.email_id}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.address}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.phone_number}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.city}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.state}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.pincode}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_registration_date}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.hospital_registration_number}</TableCell>
                <TableCell className='w-[173px] text-center'><Link className='color-blue-500'>file</Link></TableCell>
                <TableCell className='w-[173px] text-center'>{row.emergency_word_number}</TableCell>
                <TableCell className='w-[173px] text-center'>{row.number_of_ambulance_available}</TableCell>
              </TableRow>
            )))
          }
        </TableBody>
      </Table>
          </div>
  );
}

export default HomePage;
