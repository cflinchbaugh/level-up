import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CancelPop from 'buttons/CancelPopButton';

const StyleWrapper = styled.div`
    .RevealOptions {
        margin: auto;
    }
    
    .RevealOptions >* {
        margin-bottom: 15px;
    }

    .RevealOptions >*:last-child {
        margin-right: 0;
    }

    @media (min-width: 1200px) {
        .RevealOptions >* {
            float: left;
            margin-right: 2em;
        }
    }

`;

export class RevealOptions extends Component {    
    _processReveal(translationsArr) {
        return translationsArr.map(function(translationData, idx) {
            let reveal,
                buttonData = {
                    label: translationData.id,
                    onClickFunction: '',
                    showX: false
                },
                displayDataId = this.props.flashCardDisplay[0] ? this.props.flashCardDisplay[0].id: false;

            if (translationData.id === displayDataId) {
                buttonData.onClickFunction = (() => this.handleClick('none'));
                buttonData.showX = true
            } else {
                buttonData.onClickFunction = (() => this.handleClick(translationData.id));
            }
            
            reveal = (
                <CancelPop key={idx} {...buttonData}/>
            );
            
            return reveal;
        }, this);
    }
    
    render() {
        let reveal = this._processReveal(this.props.optionsArray);
        
        return (
            <StyleWrapper className="reveal-options-wrapper">
                <div className="RevealOptions clearfix">
                    {reveal}
                </div>
            </StyleWrapper>
        )
    }

    handleClick(e) {
        this.props.handleClickOption(e);
    }

}

const mapStateToProps = state => ({
    flashCardDisplay: state.cards.revealOption
});

export default connect(mapStateToProps, {  })(RevealOptions);