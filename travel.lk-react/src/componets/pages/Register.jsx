import React, { useEffect, useState } from 'react'
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";
import axios from 'axios'


export default function Register() {


    const [name,setname] = useState();
    const [email,setemail] = useState();
    const [city,setcity] = useState();
    const [mobile,setmobile] = useState();
    const [gender,setgender] = useState();
    const [password,setpassword] = useState();


        const submit =async()=>{

            const User ={
                name,
                email,
                mobile,
                city,
                gender,
                password
            }

           await axios.post('http://localhost:4000/user/Register',User).then(res =>{

            console.log('added')
            }).catch(err=>{

                console.log(err)
            })
        }

      

    return (
        <div>
            <MDBContainer className="mt-3">
        <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
        <MDBFreeBird>
          <MDBRow>
            <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Contact with us</MDBCardTitle>
                <p className="pb-4">we always with you</p>
                <form onSubmit={submit}>
                  <MDBInput label="Your name"  onChange={e =>{

                      setname(e.target.value)
                  }} group type="text"  />
                  <MDBInput label="Your email"  onChange={e =>{

                      setemail(e.target.value)
                  }}group type="text" />
                  <MDBInput label="Your mobile"onChange={e =>{

                    setmobile(e.target.value)
                }} group type="text"  />
                  <MDBInput label="Your city"  onChange={e =>{

                    setcity(e.target.value)
                    }}group type="text"  />

                <MDBInput label="Your gender" onChange={e =>{

                setgender(e.target.value)
                }}group type="text"  />

                  <MDBInput label="Your password" onChange={e =>{

                        setpassword(e.target.value)
                        }}group type="text"  />
               
               

                 
                  <MDBBtn color="mdb-color" type= "submitclassN">Submit</MDBBtn>
                </form>
                <div className="my-2">
                  <p style={{ fontWeight: "300", fontSize: "0.75rem" }}>Never submit your passwords here</p>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </MDBContainer>
            
        </div>
    )
}
