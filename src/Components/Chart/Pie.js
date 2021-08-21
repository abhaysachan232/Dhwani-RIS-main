import React from "react";
import { MDBContainer } from "mdbreact";
import { Pie} from 'react-chartjs-2';

const Piechart = (props) => {


return (
  <>
	<MDBContainer>
  <Pie data = {props.data}/>
	</MDBContainer>
  
  </>
   
    )
}

export default Piechart
