import React from "react";

class FooterSocials extends React.Component {
    render() {
        return (
            <ul className="d-flex social-list">
                <a href="https://github.com/balundev"><li className="mr-3">Github</li></a>
                <a href="https://www.linkedin.com/in/balundev/"><li className="mr-3">Linkedin</li></a>
                <a href="https://www.facebook.com/alan.danieluk"><li>Facebook</li></a>
            </ul>
        );
    }
}

export default FooterSocials