import React, { createContext, Component } from "react";
import axios from 'axios';

export const MyContext = createContext();

const Axios = axios.create({
    baseURL: '/api/',
   });

class MyContextProvider extends Component {
    constructor() {
        super();
    }

    state = {
        shipments:[],
        shipment:[],
    }

    getShipments = () => {
        try {
            Axios.get('shipments/recent').then(response => {
                const shipments = response.data;
                this.setState({
                    shipments:shipments
                })
                // console.log(shipments);
                // setShipments(shipments);
            });

        } catch (e) {
            console.log(e);
        }
        
    };

    getShipment = (id) => {
        try {
            Axios.get('shipment-data/' + id)
            .then(response => {
                const shipment = response.data;
                // return shipment
                this.setState({
                    shipment:shipment
                })
            });
        } catch (e) {
            console.log(e)
        }



    };

    render() {
        const contextValue = {
            rootState:this.state,
            getShipments:this.getShipments,
            getShipment:this.getShipment
        }
        return (
            // <>
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
            // </>
        )
    }

}

export default MyContextProvider;