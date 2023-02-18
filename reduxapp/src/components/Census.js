import React, { Component } from "react";

class Census extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            error: null,
            isLoaded: false,
            censuses: []
        };
    }
    componentDidMount() {
        alert("In Census " + this.props.name);
        const name = this.props.name;
        var URL = "http://localhost:8080/api/census?name=" + name;
        fetch((URL))
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        censuses: data
                    });
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, censuses} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul className="list-group">

                 {censuses.map((s) => ((<li className="list-group-item" key={s.city}>{s.city.replace('city',',')}: population {s.census}</li>)))}
                </ul>

            );
        }
    }
}
export default Census;