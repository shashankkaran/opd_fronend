import React,{useState,useEffect} from 'react'
import { Link  , useParams } from 'react-router-dom'
import Axios from 'axios'
// import {
//   Row,
//   Col,
//   ListGroup,
//   Card,
// } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Form,
  Button,
  Row,
  Col,
  Table,
} from 'react-bootstrap'
import HomeScreen from './HomeScreen'
const UserEditScreen = () => { 
  let { id } = useParams();
  const [orders, setOrders] = useState([])
useEffect(async() => {
  
  try {
    const { data } = await Axios({
        method: 'get',
        url: `/api/orders/${id}/pf`,
    });

    console.log(data);
    setOrders(data);
} catch (err) {
    if (err.response.status === 404) {
        console.log('Resource could not be found!');
    } else {
        console.log(err.message);
    }
}
 
}, [])



  return (
    <>

    {/* <HomeScreen/> */}

      <Link
        to='/admin/userlist'
        className='btn btn-light my-3'
      >
        Go Back
      </Link>      
          
      <h1>Manage Faculty Purchases</h1>
    <Row>
     
          {/* <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>multivitamin</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>$500</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card> */}

{/* <h4>Total -456</h4> */}
<Table
            striped
            bordered
            hover
            responsive
            className='table-sm'
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>NAME</th>
                <th>PF Number</th>
                <th>TOTAL</th>
                {/* <th>PAID</th> */}
                {/* <th>DELIVERED</th> */}
                <th></th>
              </tr>
            </thead>
           
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>
                    {order.createdAt.substring(0, 10)}
                  </td>
                  <td>{order.shippingAddress.city}</td>
                  <td>{order.shippingAddress.pfNo}</td>
                  <td>{order.totalPrice}</td>
                  {/* <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i
                        className='fas fa-times'
                        style={{ color: 'red' }}
                      />
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i
                        className='fas fa-times'
                        style={{ color: 'red' }}
                      />
                    )}
                  </td> */}
                  <td>
                    <LinkContainer
                      to={`/order/${order._id}`}
                    >
                      <Button
                        className='btn-sm'
                        variant='success'
                      >
                        Details
                      </Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
   
      </Row>
    </>
  )
}

export default UserEditScreen
