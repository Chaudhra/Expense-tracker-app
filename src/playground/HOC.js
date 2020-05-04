// Higher order component - A componenet that renders another component
// Reuse code, render hijacking, prop manipulation, abstract state
import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) =>{
    return (
        <div>
            <h1>Info</h1>
            <p>info is :{props.info}</p>
        </div>
    );
}

//This is a regulat function that returns the higher order component
const withAdminWarning =(WrappedComponent) =>{
    // Higher order stateless functional componenet
    return (props) =>{
        return (
            <div>
                {props.isAdmin && <p>THIS IS PRIVATE INFO.</p>}
                
                <WrappedComponent {...props}/> {/*use object spread operator to pass down props to child componenet*/}
            </div>
        );

    }
};

const requireAuthentication = (WrappedComponent) =>{
    return (props) =>{ 
        return (
            <div>
                {props.isAuthenticationRequired ? (<WrappedComponent {...props} />) : (<p>Please login to view Info </p>) }
                
            </div>
        )
    }
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticationRequired={true} info="this is some text"/>, document.getElementById('app'));
// ReactDOM.render(<AdminInfo isAdmin={false} info="this is some text"/>, document.getElementById('app'));