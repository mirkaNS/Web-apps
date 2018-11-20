const App = () => {
    return (
        <div>
            <Header headerName={"My React Blog"} />
            <ContentLists lists={postDataJson} />
        </div>
    )
}

const Header = (props) => {
    return <h1>{props.headerName}</h1>
}

// const Main = () => {
//     return <ContentLists />
// }

const ContentLists = (props) => {
    // console.log(props);
    const content = props.lists.map((postDataJson, i) => {
        return <ContentItem key={i} id={postDataJson.id} title={postDataJson.title} body={postDataJson.body} />
    })
    return content
}
const ContentItem = (props) => {
    console.log(props)
    return (
        <div className="myStyle">
            <h3>{props.title}</h3>
            <p>{props.id}</p>
            <p>{props.body}</p>
        </div>
    )
}


const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement)