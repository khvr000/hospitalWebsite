import React, {Component} from 'react';

const infoComponentStyles = {
    display: 'flex',
    alignItems: 'center',
}

const generalInformationStyles = {
    display: 'flex',
    justifyContent: 'space-between'
}

class GeneralInformationComponent extends Component {

    data = [
        {
            icon: 'mail',
            headerText: 'Give us a Call',
            value: '1-888-123-14567'
        },
        {
            icon: 'mail',
            headerText: 'Send us a Message',
            value: 'medical-clinic@mail.com'
        },
        {
            icon: 'mail',
            headerText: 'Visit our Location',
            value: '3213 Suitland Street'
        },
    ];


    infoComponent = (infoItem) => {
        return (
            <div style={infoComponentStyles}>
                <div>
                    <span className="material-icons-outlined">
                        mail
                    </span>
                </div>
                <div>
                    <div>{infoItem.headerText}</div>
                    <div>{infoItem.value}</div>
                </div>
            </div>
        );
    };

    render() {
        return (
            <div style={generalInformationStyles}>
                {this.data.map(dataItem => this.infoComponent(dataItem))}
            </div>
        );
    }
}

export default GeneralInformationComponent;
