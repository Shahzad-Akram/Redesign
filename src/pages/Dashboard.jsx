import { Col, Row, Button } from 'react-bootstrap';
import CustomDropdown from '../components/custom/CustomDropdown';
import MyChart from '../components/chart/my-chart';
import { useCubeQuery }  from '@cubejs-client/react';
import cubejs from "@cubejs-client/core";
// Icons
import { BiCalendarEvent, BiMenu } from 'react-icons/bi';



const Dashboard = ({ onClick, ariaExpanded }) => {

  const { resultSet, isLoading, error, progress } = useCubeQuery({

    "measures": [
      "Physician.countTopdoctor"
      
      ],
      
      "timeDimensions": [],
      "order": {}

  })
  
  if (isLoading) {
    return <div>{progress && progress.stage && progress.stage.stage || 'Loading...'}</div>;
  }

  if (error) {
    return <div>{error.toString()}</div>;
  }

  if (!resultSet) {
    return null;
  }
  const dataSource = resultSet.tablePivot();
  const columns = resultSet.tableColumns();
  console.log(dataSource, columns)


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
            <div className='view-box bg-gradient-success text-center py-3 mb-3 border rounded-lg-2 shadow-sm'>
              <h4>334.19k</h4>
              <div>Visitors</div>
            </div>
            <div className='view-box bg-gradient-primary text-center py-3 mb-3  border rounded-lg-2 shadow-sm'>
              <h4>1.93k</h4>
              <div>New Patients</div>
            </div>
            <div className='view-box bg-gradient-primary text-center py-3 mb-3  border rounded-lg-2 shadow-sm'>
              <h4>477</h4>
              <div>Existing Patients</div>
            </div>
            <div className='view-box bg-gradient-danger text-center py-3 border rounded-lg-2 shadow-sm'>
              <h4>20</h4>
              <div>MyChart Logins</div>
            </div>
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
                      <tr>
                        <th className='row'>Alison A. Tucker, MD</th>
                        <td className='text-right'>1,997</td>
                      </tr>
                      <tr>
                        <th className='row'>Brent Duncan, MD</th>
                        <td className='text-right'>1,232</td>
                      </tr>
                      <tr>
                        <th className='row'>Christina M. Breit, MD</th>
                        <td className='text-right'>1,201</td>
                      </tr>
                      <tr>
                        <th className='row'>Dana L. Dougherty, MD</th>
                        <td className='text-right'>1,001</td>
                      </tr>
                      <tr>
                        <th className='row'>Donna Head, APRN</th>
                        <td className='text-right'>965</td>
                      </tr>
                      <tr>
                        <th className='row'>Alison A. Tucker, MD</th>
                        <td className='text-right'>955</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='card-body'>
                  <a href='/' className='card-link'>
                    <small>View All</small>
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
                  <div className='text-center'>
                    <h4 className='text-success mb-0'>206</h4>
                    <h6>
                      <small>Office</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className='mb-3 mb-md-0'>
            <div className='card rounded-lg-2 shadow-sm'>
              <div className='card-content'>
                <div className='card-body text-center'>
                  <div className='text-center'>
                    <h4 className='text-warning mb-0'>143</h4>
                    <h6>
                      <small>Sick</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className='mb-3 mb-md-0'>
            <div className='card rounded-lg-2 shadow-sm'>
              <div className='card-content'>
                <div className='card-body text-center'>
                  <div className='text-center'>
                    <h4 className='text-primary mb-0'>132</h4>
                    <h6>
                      <small>Physical</small>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={3} className='mb-3 mb-md-0'>
            <div className='card rounded-lg-2 shadow-sm'>
              <div className='card-content'>
                <div className='card-body text-center'>
                  <div className='text-center'>
                    <h4 className='text-danger mb-0'>0</h4>
                    <h6>
                      <small>NGood Health</small>
                    </h6>
                  </div>
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
