import "./RecentTrips.css";
import { Chip, Avatar } from "@mui/material";
import { FiMoreVertical } from "react-icons/fi";

export default function RecentTrips() {

const trips=[
{
id:"#TRP-1024",
vehicle:"UP32 LM 1234",
driver:"John Smith",
route:"Delhi → Jaipur",
status:"In Transit",
progress:"68%",
avatar:"J"
},
{
id:"#TRP-1025",
vehicle:"UP14 GT 9876",
driver:"Sarah Wilson",
route:"Mumbai → Pune",
status:"Completed",
progress:"100%",
avatar:"S"
},
{
id:"#TRP-1026",
vehicle:"UP16 AB 5678",
driver:"Mike Johnson",
route:"Bangalore → Chennai",
status:"Delayed",
progress:"42%",
avatar:"M"
},
{
id:"#TRP-1027",
vehicle:"UP18 HK 3456",
driver:"Emma Brown",
route:"Lucknow → Kanpur",
status:"Scheduled",
progress:"0%",
avatar:"E"
}
];

return(

<div className="recentTrips">

<div className="tripHeader">

<h2>Recent Trips</h2>

<a href="#">View All</a>

</div>

<table>

<thead>

<tr>

<th>Trip ID</th>

<th>Vehicle</th>

<th>Driver</th>

<th>Route</th>

<th>Status</th>

<th>Progress</th>

<th></th>

</tr>

</thead>

<tbody>

{
trips.map((trip,index)=>(

<tr key={index}>

<td>{trip.id}</td>

<td>{trip.vehicle}</td>

<td>

<div className="driver">

<Avatar
sx={{width:34,height:34,fontSize:14}}
>
{trip.avatar}
</Avatar>

{trip.driver}

</div>

</td>

<td>{trip.route}</td>

<td>

<Chip

label={trip.status}

size="small"

color={
trip.status==="Completed"
?"success":
trip.status==="Delayed"
?"warning":
trip.status==="In Transit"
?"primary":
"default"
}

/>

</td>

<td>{trip.progress}</td>

<td>

<FiMoreVertical/>

</td>

</tr>

))
}

</tbody>

</table>

</div>

)

}