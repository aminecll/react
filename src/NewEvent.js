import React, { Component } from 'react';

class NewEvent extends Component {
    createSelectItems() {
        let items = [];         
                    
             items.push(<option key={0} value="web">web</option>);   
             items.push(<option key={1} value="cuisine">cuisine</option>);  
             //here I will be creating my options dynamically based on
             //what props are currently passed to the parent component
        
        return items;
    }  
    render() {
        return(
            <div className="row text-left">
            
            <div className="col-md-1 mb-r">
    
    
            </div>
            
    
            
            <div className="col-md-10 mb-r pb-5">
                <h2>Nouveau Événement</h2>
                <br></br>
    
                <div className="card">
                    <div className="card-body z-depth-1">
    
                        <form id="eventForm">
                        <br></br>
                        
    
                        <div className="md-form">
                            <div className="mdb-select select-dropdown">
                            <select>
                                <option value="web">web</option>
                                </select>
                                </div>
                            <span className="error-msg"></span>
                        </div>
    
                        <div className="md-form">
                             <label htmlFor="titre"></label>
                            <input type="text" name="titre" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
    
                        <div className="md-form">
                            <label htmlFor="description"></label>
                            <textarea  name="description" placeholder="titre"></textarea>
                            <span className="error-msg"></span>
                        </div>
    
                        <div className="md-form ">
                            <label htmlFor="dateDebut"></label>
                            <input type="text" name="dateDebut" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
                        <div className="md-form">
                            <label htmlFor="dateFin"></label>
                            <input type="text" name="dateFin" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
    
                        <div className="md-form">
                            <label htmlFor="prix"></label>
                            <input type="text" name="prix" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
                        <div className="md-form">
                            <label htmlFor="nbrMax"></label>
                            <input type="text" name="nbrMax" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
    
                        <div className="md-form"> 
                            <label htmlFor="adresse"></label>
                            <input type="text" name="adresse" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
    
                        <div className="md-form"> 
                            <label htmlFor="codeP"></label>
                            <input type="text" name="codeP" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
                        <div className="md-form"> 
                        <select name="ville">
                                <option value="paris">paris</option>
                            </select>
                            <span className="error-msg"></span>
                        </div>
                        <div className="md-form "> 
                        <select name="region" className="mdb-select select-dropdown">
                                <option value="ile de france">ile de france </option>
                            </select>
                            <span className="error-msg"></span>
                        </div>
                        <div className="md-form"> 
                        <select name="departement">
                                <option value="informatique">informatique</option>
                            </select>
                            <span className="error-msg"></span>
                        </div>
                        <div className="md-form"> 
                            <label htmlFor="images"></label>       
                             <br></br><br></br>
                            <input type="file"  name="images" placeholder="titre"></input>
                            <span className="error-msg"></span>
                        </div>
    
    
                        <div className="text-right">
                            <br></br><br></br>
                            <input className="btn btn-primary-inverse btn-md waves-effect waves-light" id="submit_event" type="submit" value="Créer" />
                            <br></br><br></br>
                        </div>
                        <br></br>
    
                    </form>
                    </div>
    
    
                </div>
                
    
            </div>
            
    
            
            <div className="col-md-1 mb-r">
    
    
            </div>
            
    
        </div>

    );
}
}

export default NewEvent;