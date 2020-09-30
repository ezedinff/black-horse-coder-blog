import Header from "./Header";

const { default: Meta } = require("components/meta")

const Layout = ({children}) => {
    return (
        <>
            <Meta/>
            <Header/>
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
        </>
    )
}

export default Layout;