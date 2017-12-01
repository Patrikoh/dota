import React, {Component} from 'react';
import {Search} from 'material-ui-icons';
import Paper from 'material-ui/Paper';

class SideMenu extends Component {

    render() {
        const {photoCategories} = this.props;
        return (
            <Paper className="side-menu l-rows l-flex--2 l-margin-right--big" zDepth={1}>
                <div className="l-flex-nowrap l-padding-top--huge l-padding-left--small l-columns">
                    <input className="input input--with-button l-flex" id="search" value={this.filter} type="text"/>
                    <div className="icon-wrapper l-flex l-margin-right--big" onClick={() => {
                        this.props.handleSubmit(document.getElementById('search').value)
                    }}>
                        <Search className="icon icon--white"/>
                    </div>
                </div>
                <div className="menu-block l-padding-left--small">
                    <div className="l-columns">
                        <div className="header">
                            <h2>Kategorier</h2>
                        </div>
                        <div className="l-flex--3"/>
                    </div>
                    {photoCategories.map(category => (
                        <div onClick={()=> this.props.handleSubmit(category)} className="l-flex cell">
                            <p>{category}</p>
                        </div>
                    ))}
                </div>
            </Paper>
        );
    }
};

export default SideMenu;
