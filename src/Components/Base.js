import CustomNavbar from "./CustomNavbar";

function Base({title = "My Blogger", children}){

    return(
        <div className="container-fluid m-0 p-0">

            <CustomNavbar />

            {children}

            <h1>This is footer</h1>
        </div>
    );
}

export default Base;