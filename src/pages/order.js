import React from "react"
import GoogleSheets from "react-google-sheets"


class Order extends React.Component {
    constructor(props) {
        super(props)
        
        this.getOrderData = this.getOrderData.bind(this)
    }

    getOrderData() {
       console.log('get order data', this.props)
    }

    componentWillMount() {
        this.getOrderData()
    }

    render() {
        return (
            <div>
                <GoogleSheets
                    apiKey={"AIzaSyCJMEEfBxQgbxKaAn1BV9sPlneYmBdXPnY"}
                    spreadsheetId={"19MeCi4toNfM5ZYYuxfzOaIEMXRXG5TU7pHj-a5noGRo"}
                    afterLoading={this.getOrderData}>
                    {console.log(this.props)}
                </GoogleSheets>
            </div>
        )
    }
}

export default Order