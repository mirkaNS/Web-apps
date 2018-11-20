
const Header = (props) => {
    return (
        <div>
            <h1>{props.headerName}</h1>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
        </div>

    )
}

const products = [
    "apple",
    "orange",
    "banana",
    "kiwi",
    "lemon",
    "pineapple"
];

const ProductItem = (props) => {

    return <p> {props.productName} </p>
}

const ProductList = (props) => {

    const productList = props.listOfProduct.map((product, i) => {
        return <ProductItem key={i} productName={product} />
    })
    return (
        <div>
            <h3>My products</h3>
            {productList}
        </div>
    )
}



const App = () => {
    return (
        <div>
            <Header headerName={"Garden"} />
            <hr />
            <ProductList listOfProduct={products} />
        </div>
    )
}

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);