import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const StyleWrapper = styled.div`
    .RevealOptions >* {
        float: left;
        margin-right: 2em;
    }

    .RevealOptions >*:last-child {
        margin-right: 0;
    }

`;

class RevealOptions extends Component {    
    _processReveal(translationsArr) {
        return translationsArr.map(function(translationData, idx) {
            let reveal,
                buttonData = {
                    label: translationData.id
                }
            
            if (translationData.id === this.props.display) {
                reveal = (
                    <Button key={idx} {...buttonData}/>
                );
            } else {    
                buttonData.onClickFunction = (() => this.handleClick(translationData.id));
                
                reveal = (
                    <Button key={idx} {...buttonData}/>
                );
            }
            
            
            return reveal;
        }, this);
    }
    
    render() {
        let reveal = this._processReveal(this.props.optionsArray);
        
        return (
            <StyleWrapper>
                <div className="RevealOptions">
                    {reveal}
                </div>
            </StyleWrapper>
        )
    }

    handleClick(e) {
        this.props.handleClickOption(e);
    }

}

export default RevealOptions