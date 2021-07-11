import React, { Component } from 'react';
import Tabletop from 'tabletop';
import Loader from "react-loader-spinner";


function UserGreeting(props) {
        return <h1>Welcome to Dashboard {props.name}</h1>;
}

function NonUserGreeting(props) {
        return <h1>Unable to find {props.name} in the record please reach out to admin.</h1>;
}
function Greeting(props) {
        var isLoggedIn = props.isLoggedIn.flag;
        if(isNaN(isLoggedIn)){
             return <Loader
             type="TailSpin"
             color="#00BFFF"
             height={100}
             width={100}
             timeout={10000} //3 secs
           />
        }else{
                if (isLoggedIn) {
                        return <UserGreeting  name={props.isLoggedIn.name}/>;
                } else {
                        return <NonUserGreeting  name={props.isLoggedIn.name} />;
                }
        }
        

}

export class Dashboard extends Component {
        constructor(props) {
                super(props);
                this.state = {
                        name: '',
                        data:[],
                        loading:true
                };
                
                //this.fetchData();
                
        }
        componentDidMount(){
                if(sessionStorage.getItem('userData') !== "undefined"){
                const data = JSON.parse(sessionStorage.getItem('userData'));
                Tabletop.init({
                        key: '1XNHFwt1nCd-qsavz4hwaezYHDY7ZgSJG9IAZ9e9bUj4',
                        callback:  googleData => {
                                var eles = googleData["Data"]["elements"];
                                console.log('google sheet data --->', eles)
                                this.setState({ name: data.email,data:eles })
                                for(var i = 0; i < eles.length; i++) {
                                        if (this.state.name.toString().includes(eles[i]["Email"])) {
                                                this.setState({flag:true});
                                                break;
                                        }else{
                                                this.setState({flag:false});     
                                        }
                                }
                        },
                        simpleSheet: false
                })
                }else{
                        localStorage.clear();
                        sessionStorage.clear();
                        window.location.href = "/index-page";    
                }
                
                
                

        }
        logout = () => {
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = "/index-page";
        }
       
        render() {
                return (
                        <div className="container">
                                <Greeting isLoggedIn={this.state} />
                                <button onClick={this.logout}>Logout</button>
                        </div>
                )
        }
}
export default Dashboard