const App = () => {
    return <ListOfUsers list={users} />;
}

const ListOfUsers = (props) => {

    const userList = props.list.results.map((users, i) => {
        const date = new Date(users.dob.date).toLocaleDateString("en-GB").split("/").join(".");
        return <UserInfo key={i} name={users.name} image={users.picture} email={users.email} birthday={date + "."} />
    })
    return userList;
}
const UserInfo = (props) => {
    console.log(props);
    return (
        <div className="profile">
            <img src={props.image.thumbnail} />
            <p>Name: {props.name.first}</p>
            <p>Email: {props.email}</p>
            <p>Date of birth: {props.birthday}</p>

        </div>
    )
}

const main = document.querySelector(".root");
ReactDOM.render(<App />, main);

const Title = () => {
    return <h1>React Users</h1>
}

const header = document.querySelector("header");
ReactDOM.render(<Title />, header);

const Footer = () => {
    return <p className="container">@2018 Copyright BIT</p>
}

const footer = document.querySelector("footer");
ReactDOM.render(<Footer />, footer);