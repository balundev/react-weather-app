import React from "react";
import FooterSocials from "./footerSocials.jsx";

class Footer extends React.Component{
    render() {
        return (
            <footer className="text-muted bg-dark">
                <div className="container d-flex justify-content-between">
                    <p>All rights reserved <a href="https://www.linkedin.com/in/balundev/">Eagle</a></p>
                    <FooterSocials/>
                </div>
            </footer>
        );
    }
}

export default Footer