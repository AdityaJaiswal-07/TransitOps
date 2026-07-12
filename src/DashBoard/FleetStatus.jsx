import "./FleetStatus.css";

import { PieChart } from "@mui/x-charts/PieChart";
import { LineChart } from "@mui/x-charts/LineChart";

import {
    FiChevronDown,
    FiCalendar,
    FiChevronRight
} from "react-icons/fi";

export default function FleetStatus(){

const maintenance=[
{
number:"UP32 LM 1234",
model:"Tata Prima 5530",
status:"Engine Repair",
date:"May 20, 2025"
},
{
number:"UP14 GT 9876",
model:"BharatBenz 1617",
status:"Brake Service",
date:"May 19, 2025"
},
{
number:"UP16 AB 5678",
model:"Ashok Leyland 3118",
status:"General Service",
date:"May 18, 2025"
},
{
number:"UP11 DK 4321",
model:"Eicher Pro 2049",
status:"Tyre Replacement",
date:"May 17, 2025"
}
];

return(

<div className="dashboard-middle">

{/* Fleet Overview */}

<div className="overview-card">

<div className="card-title">
Fleet Status Overview
</div>

<PieChart

width={330}

height={260}

series={[{

innerRadius:60,

outerRadius:95,

data:[

{id:0,value:96,label:"Active",color:"#4CD964"},

{id:1,value:12,label:"Maintenance",color:"#FFB020"},

{id:2,value:10,label:"Idle",color:"#3B82F6"},

{id:3,value:6,label:"Out of Service",color:"#EF4444"},

{id:4,value:4,label:"Inactive",color:"#CBD5E1"}

]

}]}

/>

<button className="view-btn">

View All Vehicles

<FiChevronRight/>

</button>

</div>

{/* Utilization */}

<div className="utilization-card">

<div className="util-header">

<h3>Fleet Utilization</h3>

<div>

This Week

<FiChevronDown/>

</div>

</div>

<h1>

68%

<span>Average Utilization</span>

</h1>

<LineChart

height={260}

xAxis={[{

scaleType:"point",

data:["May12","May13","May14","May15","May16","May17","May18"]

}]}

series={[{

data:[55,50,75,65,90,75,72],

area:true

}]}

/>

</div>

{/* Maintenance */}

<div className="maintenance-card">

<div className="maintenance-header">

<h3>Vehicles in Maintenance</h3>

<a>View All</a>

</div>

{

maintenance.map((item,index)=>(

<div

className="vehicle"

key={index}

>

<div className="vehicle-icon">

<FiCalendar/>

</div>

<div className="vehicle-info">

<h4>{item.number}</h4>

<p>{item.model}</p>

</div>

<div className="vehicle-status">

<span>

{item.status}

</span>

<p>{item.date}</p>

</div>

</div>

))

}

</div>

</div>

)

}