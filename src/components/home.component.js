import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="vertically-center-outer">
                <div className="vertically-center-middle">
                    <div className="vertically-center-inner">
                        <form className="search-bar">
                            <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Search by ID, age or name" aria-label="Search" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
                            </div>
                            </div>
                        </form>
                        <p className="text-below-search-bar"><Link to={'/ahana-psychometry/create'}>Proceed to Asssessments</Link></p>
                    </div>
                </div>
                <a href="/ahana-psychometry/" className="logo-link"><img src="/logo-ahana.png" alt="Ahana : Experience the exceptional care"/></a>
            </div>
        )
    }
}