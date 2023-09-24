import React, {useState, useEffect} from 'react';
import Block from './components/block';
import './App.css' 
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import { groupByProperty } from './utilities/Handlers';

const App = () => {

    const [tickets,setTickets] = useState(null);
    const [users, setUsers] = useState(null)
    const [grpBy, setgrpBy] = useState(localStorage.getItem('grpBy'))
    const [ordBy, setordBy] = useState(localStorage.getItem('ordBy'))
    const [groupedData, setGroupedData] = useState(null)
    const [check, setCheck] = useState(false)

    useEffect(() => {
        fetch('https://api.quicksell.co/v1/internal/frontend-assignment ')
        .then(res => res.json())
        .then(data => {
          
            setTickets(data.tickets)
            let us = {};
            for(const key of data.users) {
              us[key.id] = key;
            }
            setUsers(us)
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    function handleGrpBy(e) {
      setGroupedData(groupByProperty(tickets,e.target.value))
      setgrpBy(e.target.value)
      localStorage.setItem('grpBy', e.target.value)
   }


    function orderBy(par) {
      let newData = groupedData;
        if(par==="priority") {
          Object.keys(newData).forEach((key) => {
              newData[key].sort((a,b) => b.priority  - a.priority  )
          })
        } else {
          Object.keys(newData).forEach((key) => {
            newData[key].sort((a,b) => a.title.localeCompare(b.title) )
          })
        }
        localStorage.setItem('ordBy',par)
        setordBy(par)
    } 

    function handleOrdBy(e) {
        let par = e.target.value
        orderBy(par)
    }

    if(!tickets) {
        return <Loader/>
    }
    else {
        if(!groupedData)  {
          setGroupedData(groupByProperty(tickets,localStorage.getItem('grpBy') || "status"));
          setCheck(true);
        }

        return (
            <div className='app' >  
               <div className='nav'>  
                <Navbar ordBy={ordBy} grpBy={grpBy} handleGrpBy={handleGrpBy} handleOrdBy={handleOrdBy} title={"Display"}/>
               </div>
                <div className='cont'>
                {
                    Object.entries(groupedData?  groupedData : {}).map(([groupName, groupItems], index) => (
                        <div key={index}>
                            <Block key={groupName} name={groupName} arr={groupItems} users={users} grps={grpBy} />
                        </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}

export default App