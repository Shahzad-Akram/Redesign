import { Col, Row, Button } from 'react-bootstrap';
import React, {useState} from 'react'
import CustomDropdown from '../components/custom/CustomDropdown';
import MyChart from '../components/chart/my-chart';
import { QueryRenderer } from '@cubejs-client/react';
// Icons
import { BiCalendarEvent, BiMenu } from 'react-icons/bi';



const Dashboard = ({ onClick, ariaExpanded }) => {

  const [show, setShow] = useState(false)


  return (
    <main className='bg-light w-100 z-index-wrap vh-100 overflow-auto wrap-all-the-things'>
      <header className='d-flex flex-wrap align-items-baseline justify-content-between bg-white border m-3 px-3 shadow-sm rounded-lg'>
        <div>
          <Button
            variant='link'
            className='p-0 d-md-none'
            onClick={onClick}
            aria-controls='example-collapse-text'
            aria-expanded={ariaExpanded}
          >
            <BiMenu />
          </Button>

          <Button variant='link' className='px-0'>
            <div className='d-flex align-items-center'>
              <BiCalendarEvent size={25} className='mr-1' />
              <small>Mar 27, 2019 - Feb 27, 2020</small>
            </div>
          </Button>
        </div>
        <div className='ml-auto'>
          <Button variant='link' className='px-0'>
            <div className='d-flex align-items-center'>
              <small className='text-black-50 mr-2 text-right'>
                <b className='d-block'>Matt</b>
                <span>Whitaker</span>
              </small>
              <div>
                <CustomDropdown>
                  <img
                    className='rounded-circle'
                    width={40}
                    height={40}
                    src='https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
                    alt='user'
                  />
                </CustomDropdown>
              </div>
            </div>
          </Button>
        </div>
      </header>
      <section className='height-scroll scrollbox'>
        <Row className='mx-0'>
          <Col className='mb-4 mb-lg-0'>
          <QueryRenderer
      query={{
        "measures": [                                               
        "Session.NumberOfSession"                                  
        ],                                                           
        "timeDimensions": [                                          
          {                                                          
            "dimension": "Session.createdAt"                         
          }                                                          
        ],                                                           
        "order": {},                                                 
        "filters": []    
        
        }   }
      render={({ resultSet }) => {
        if (!resultSet) {
          return 'Loading...';
        }

        return (
          
          <div className='view-box bg-gradient-success text-center py-3 mb-3 border rounded-lg-2 shadow-sm'>
            <h4>{resultSet.loadResponse.results[0].data[0]["Session.NumberOfSession"]}</h4>
              <div>Visitors</div>
            </div>
        );
      }}
    />
    <QueryRenderer
      query={{
        "measures": [
          "NewPatients.TotalNewPatient"
        ],
        "timeDimensions": [
          {
            "dimension": "NewPatients.EventDate"
          }
        ],
        "order": {
          "NewPatients.EventDate": "asc"
        },
        "filters": []
      }}
      render={({ resultSet }) => {
        if (!resultSet) {
          return 'Loading...';
        }
        return(
          <div className='view-box bg-gradient-primary text-center py-3 mb-3  border rounded-lg-2 shadow-sm'>
            <h4>{resultSet.loadResponse.results[0].data[0]["NewPatients.TotalNewPatient"]}</h4>
              <div>New Patients</div>
            </div>
        )
      }}
      />
      <QueryRenderer
      query={{
        "measures": [
          "Patients.TotalPatient"
        ],
        "timeDimensions": [
          {
            "dimension": "Patients.EventDate"
          }
        ],
        "order": {},
        "filters": []
      }}
      render={({ resultSet }) => {
        if (!resultSet) {
          return 'Loading...';
        }
        return(
          <div className='view-box bg-gradient-primary text-center py-3 mb-3  border rounded-lg-2 shadow-sm'>
            <h4>{resultSet.loadResponse.results[0].data[0]["Patients.TotalPatient"]}</h4>
              <div>Existing Patients</div>
            </div>
        )
      }}
      />
      <QueryRenderer
      query={{
        "measures": [
          "Patients.TotalPatient"
        ],
        "timeDimensions": [
          {
            "dimension": "Patients.EventDate"
          }
        ],
        "order": {},
        "filters": []
      }}
      render={({ resultSet }) => {
        if (!resultSet) {
          return 'Loading...';
        }
        return(
          <div className='view-box bg-gradient-danger text-center py-3 border rounded-lg-2 shadow-sm'>
              <h4>20</h4>
              <div>MyChart Logins</div>
            </div>
        )
      }}
      />
            
          </Col>
          <Col lg={6} className='mb-4 mb-lg-0'>
            <div className='h-100 w-100 bg-white rounded-lg-2 shadow p-3'>
              <MyChart />
            </div>
          </Col>
          <Col>
            <div className='card rounded-lg-2 shadow-sm h-100'>
              <div className='card-content'>
                <div className='card-body p-3'>
                  <h5 className='card-title mb-0'>
                    <small className='d-block text-primary'>
                      Most Valuable
                    </small>
                    Providers
                  </h5>
                </div>
                <div className='table-responsive px-3'>
                  <table className='table table-hover-animation mb-0'>
                    <tbody>
                    <QueryRenderer
                  query={{
                    "measures": [
                      "Physician.countTopdoctor"
                    ],
                    "timeDimensions": [
                      {
                        "dimension": "Physician.createdAt"
                      }
                    ],
                    "order": {
                      "Physician.countTopdoctor": "desc"
                    },
                    "dimensions": [
                      "Physician.topPhysician"
                    ],
                    "filters": []
                  }}
                 render={({ resultSet }) => {
                    if (!resultSet) { return 'Loading...'; }
                    return(
                    <>
                      
                      { show === true ? 
                      resultSet.loadResponse.results[0].data.map( v=> 
                        <tr>
                        <th className='row'>{v["Physician.topPhysician"]}</th>
                        <td className='text-right'>1,997</td>
                        </tr>)
                      :
                      resultSet.loadResponse.results[0].data.slice(9).map( v=> 
                      <tr>
                      <th className='row'>{v["Physician.topPhysician"]}</th>
                      <td className='text-right'>1,997</td>
                      </tr>
                        )}
                      
                    </>) 
                  }}/>
                      
                    </tbody>
                  </table>
                </div>
                <div className='card-body'>
                  <a onClick={() => setShow(!show)} className='card-link'>
                    {show === true ? 
                    <small>Close</small>: 
                    <small>View All</small> }
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <h3 class='my-4 text-center'>Appointment Types</h3>
        <Row className='mx-0'>
          <Col md={3} className='mb-3 mb-md-0'>
            <div className='card rounded-lg-2 shadow-sm'>
              <div className='card-content'>
              <div className='card-body text-center'>
          <QueryRenderer
                  query={{
                    "measures": [
                      "TotalReasons.TotalOfficeVisits"
                    ],
                    "timeDimensions": [
                      {
                        "dimension": "TotalReasons.EventDate"
                      }
                    ],
                    "order": {},
                    "dimensions": [],
                    "filters": []
                  }}
                 render={({ resultSet }) => {
                    if (!resultSet) { return 'Loading...'; }
                 return(
                 <div className='text-center'>
                    <h4 className='text-success mb-0'>{resultSet.loadResponse.results[0].data[0]["TotalReasons.TotalOfficeVisits"]}</h4>
                        <h6><small>Office</small></h6>
                             </div>)}}/>
                 </div>
              </div>
            </div>
          </Col>
          <Col md={3} className='mb-3 mb-md-0'>
            <div className='card rounded-lg-2 shadow-sm'>
              <div className='card-content'>
                <div className='card-body text-center'>
                <QueryRenderer
                  query={{
                    "measures": [
                      "TotalReasons.TotalSick"
                    ],
                    "timeDimensions": [
                      {
                        "dimension": "TotalReasons.EventDate"
                      }
                    ],
                    "order": {},
                    "dimensions": [],
                    "filters": []
                  }
                  }
                 render={({ resultSet }) => {
                    if (!resultSet) { return 'Loading...'; }
                 return(
                 <div className='text-center'>
                    <h4 className='text-warning mb-0'>{resultSet.loadResponse.results[0].data[0]["TotalReasons.TotalSick"]}</h4>
                        <h6><small>Sick</small></h6>
                             </div>)}}/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className='mb-3 mb-md-0'>
            <div className='card rounded-lg-2 shadow-sm'>
              <div className='card-content'>
                <div className='card-body text-center'>
                <QueryRenderer
                  query={{
                    "measures": [
                      "TotalReasons.TotalPhysical"
                    ],
                    "timeDimensions": [
                      {
                        "dimension": "TotalReasons.EventDate"
                      }
                    ],
                    "order": {},
                    "dimensions": [],
                    "filters": []
                  }}
                 render={({ resultSet }) => {
                    if (!resultSet) { return 'Loading...'; }
                 return(
                 <div className='text-center'>
                    <h4 className='text-primary mb-0'>{resultSet.loadResponse.results[0].data[0]["TotalReasons.TotalPhysical"]}</h4>
                        <h6><small>Physical</small></h6>
                             </div>)}}/>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className='mb-3 mb-md-0'>
            <div className='card rounded-lg-2 shadow-sm'>
              <div className='card-content'>
                <div className='card-body text-center'>
                <QueryRenderer
                  query={
                    {
                      "measures": [
                        "TotalReasons.TotalNGoodHealth"
                      ],
                      "timeDimensions": [
                        {
                          "dimension": "TotalReasons.EventDate"
                        }
                      ],
                      "order": {},
                      "dimensions": [],
                      "filters": []
                    }}
                 render={({ resultSet }) => {
                    if (!resultSet) { return 'Loading...'; }
                 return(
                 <div className='text-center'>
                   {console.log(resultSet)}
                    <h4 className='text-danger mb-0'>{resultSet.loadResponse.results[0].data[0]["TotalReasons.TotalNGoodHealth"] === null ? 0 : resultSet.loadResponse.results[0].data[0]["TotalReasons.TotalNGoodHealth"]}</h4>
                        <h6><small>N Good Health</small></h6>
                             </div>)}}/>
                  
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Dashboard;
