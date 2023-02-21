import './App.css';
import axios from 'axios';

function App() {

  const emails = [
    {email :"chitresh@inzint.com", name: "Chitresh"}, 
    {email:"paras@inzint.com", name:"Paras"}, 
    {email:"saksham@inzint.com", name:"Saksham"}, 
    {email:"shivam@inzint.com", name:"Shivam"}, 
    {email:"sushma@inzint.com", name:"Sushma"}
  ]

  const sendMessage = async (sendTo) => {
    try {
     await axios.post(`http://localhost:3001/api/sendEmail`, {
      sendTo: sendTo
    }
    )
    .catch((err) => console.log('ERROR: ', err));
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  const sendMessageToAll = async (emails) => {
    try {
      const emailArray = emails.map(el =>  el.email);
     await axios.post(`http://localhost:3001/api/sendEmailToAll`, {
      emails: emailArray
    })
    .catch((err) => console.log('ERROR: ', err));
    } catch (error) {
      console.log('ERROR: ', error);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {
            emails.map((el, index)=>{
             return <div key={index} className='names' >
              {el.name}
              <span className='button' onClick={() => sendMessage(el)}>Send Message</span>
              </div>
            })
          }
          <div className='buttonAll' 
           onClick={() => sendMessageToAll(emails)}
           >Send Message To All</div>
        </div>
      </header>
    </div>
  );
}

export default App;
